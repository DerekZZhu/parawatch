import Link from 'next/link'
import classes from './page.module.css'
import Slideshow from "../components/slideshow"

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <Slideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Observing & Documenting the Paranormal</h1>
            <p>Unveiling Unknowns Together</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/watch">Explore Current Watches</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How our forum works</h2>
          <p>
            Parawatch is more than just an internet forum. With the development of webscrapers and interesting dataflows
            we scrape the internet looking for activities of interest that may or may not be the result of paranormal incidents.
          </p>
        </section>
      </main>
    </>
  );
}
