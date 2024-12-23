import Link from 'next/link';
import Image from 'next/image';

import classes from './watch-item.module.css';

export default function WatchItem({ title, slug, image, summary, user }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {user}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/watch/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}