import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'

export default function MainHeader() {
    return <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={logoImg} alt="food_image"/>
            NextLevel Food
        </Link>

        <nav>
            <Link href="/watch">Browse Current Watches</Link>
            <Link href="/community">Join the Community</Link>
        </nav>
    </header>
}