import Link from 'next/link'
import classes from './page.module.css'

export default function Home() {
  return (
    <>
    <header>

    </header>
      <main>
        <p><Link href="/watch">Watches</Link></p>
        <p><Link href="/watch/share">Share Watch</Link></p>
        <p><Link href="/watch/share">Community</Link></p>
      </main>
    </>
  );
}
