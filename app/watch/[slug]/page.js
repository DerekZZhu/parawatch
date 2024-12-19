import Image from 'next/image'
import classes from "./page.module.css"
import { getWatch } from '@/watches'
import { notFound } from 'next/navigation'

export default function WatchPage({params}) {
    const watch = getWatch(params.slug)

    if (!watch) {
        notFound()
    }
    watch.post = watch.post.replace(/\n/g, '<br />')
    return <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image fill src={watch.image}/>
            </div>
            <div className = {classes.headerText}>
                <h1>{watch.title}</h1>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{__html: watch.post}}>

            </p>
        </main>
    </>
}
