'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const pathname = usePathname();
  const links = navLinks.map(
    (link)=> pathname === link.route? <li className='font-extrabold cursor-pointer hover:scale-x-105 hover:transition-transform transition-transform'key={link.label}><Link href={link.route} key={link.label}>{link.label}</Link></li>: <Link href={link.route} key={link.label}><li key={link.label} className='cursor-pointer hover:scale-x-105 hover:transition-transform transition-transform'>{link.label}</li></Link>
  )
  return (
    <nav className='justify-between fixed z-50 w-full bg-dark-1 min hidden md:flex bg-white h-[100px]'>
      <Link href='/' className='flex items-center gap-1'>
      <Image
      src='/icons/LorisMediaLogo_purple.png'
      width={300}
      height={156}
      alt='Loris Media Logo'
      className='max-sm:size-10'
      />
      </Link>
      <div className='flex  gap-5 w-full'>

       <ul className="nav-menu flex flex-row justify-end gap-16 w-full items-end mr-12 lg:text-xl text-purple-1 uppercase pb-6 sm:text-base">
       {links}
       </ul>
       
      </div>
    </nav>
  )
}

export default Navbar