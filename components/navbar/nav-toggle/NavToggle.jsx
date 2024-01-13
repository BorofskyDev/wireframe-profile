'use client'

import { useState } from 'react'
import styles from './NavToggle.module.scss'
import HamburgerToggle from './hamburger-toggle/HamburgerToggle'



export default function NavToggle() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={styles.navToggle}>
            <HamburgerToggle isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle}  />
        </div>
    )
}