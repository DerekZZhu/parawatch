import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'fs'

const db = sql('watches.db')

export async function getWatches() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return db.prepare('SELECT * FROM watches').all()
}

export function getWatch(slug) {
    return db.prepare('SELECT * FROM watches WHERE slug = ?').get(slug)
}

export async function saveWatch(watch) {
    watch.slug = slugify(watch.title, {lower: true})
    watch.post = xss(watch.instructions)

    const extension = watch.image.name.split('.').pop()
    const fileName = `${watch.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await watch.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving Image Failed')
        }
    })

    watch.image = `/images/${fileName}`

    db.prepare(`
        INSERT INTO watches
            (title, summary, post, user, user_email, image, slug)
        VALUES (
            @title,
            @summary,
            @post,
            @user,
            @user_email,
            @image,
            @slug
        )
        `).run(watch)
}