import classes from "./watch-grid.module.css"
import WatchItem from "./watch-item"

export default function WatchGrid({watches}) {
    return <ul className={classes.meals}>
        {
            watches.map(watch => <li key={watch.id}>
                <WatchItem {...watch}/>
            </li>)
        }
    </ul>
}