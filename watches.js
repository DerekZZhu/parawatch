import sql from 'better-sqlite3'

const db = sql('watches.db')

export async function getWatches() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return db.prepare('SELECT * FROM watches').all()
}

export function getWatch(slug) {
    return db.prepare('SELECT * FROM watches WHERE slug = ?').get(slug)
}