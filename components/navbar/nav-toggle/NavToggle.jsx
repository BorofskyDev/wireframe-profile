'use client'

import { useState } from 'react'

import styles from './NavToggle.module.scss'
import HamburgerToggle from './hamburger-toggle/HamburgerToggle'

export default function NavToggle() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.navToggle}>
            <HamburgerToggle handleClick={handleClick}  />
        </div>
    )
}