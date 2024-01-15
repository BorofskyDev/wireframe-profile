'use client'
import React from 'react'
import { useStickyNav } from '@/libs/hooks/useStickyNav'
import Navbar from '../navbar/Navbar'
import Banner from './banner/Banner'

const Header = () => {
  const { isSticky, navbarRef, bannerRef } = useStickyNav()

  return (
    <>
      <Banner ref={bannerRef} />
      <Navbar isSticky={isSticky} ref={navbarRef} />
    </>
  )
}

export default Header