import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/assets/logo.webp'
import classes from './main-header.module.css'

import NavLink from '../components/nav-link'

export default function MainHeader() {

    return <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={logoImg} alt="food_image"/>
            Parawatch
        </Link>

        <nav className={classes.nav}>
            <NavLink href="/watch" children="Watches"/>
            <NavLink href="/community" children="Community"/>
        </nav>
    </header>
}
