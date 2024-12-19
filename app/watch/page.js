import classes from './page.module.css'
import WatchGrid from '@/components/watch-grid'
import { getWatches } from '@/watches'
import Link from 'next/link'

export default async function WatchPage() {
    const watches = await getWatches()
    return(
        <>
            <header className={classes.action}>
                <Link href={`/watch/share`}> Create your own thread... </Link>
            </header>
            <main>
                <WatchGrid watches={watches}/>
            </main>
        </>
    )
}
