"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { UserButton } from "@clerk/nextjs";
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const currentPage = usePathname();
  const isHomePage = currentPage === '/home';

  return (
    <div className="navbar bg-secondary text-neutral-content min-h-0 p-0">
      <div className="flex-1 p-1">
        <div className="font-inter normal-case font-extrabold text-xl">spinMe</div>
      </div>

      <div className="flex-none gap-2 font-inter">
        <button>

          {!isHomePage ? (
            <Link href='/home'>Home</Link>
          ) : (
            <Link href='/collection?page=1'>Collection</Link>
          )}

        </button>
        <div className='p-1'>
          <UserButton
            // appearance={{
            //   elements: {
            //     card:
            //       "card w-auto font-inter h-60",
            //   },
            
            // }}
            afterSignOutUrl='/' />
        </div>
      </div>
    </div>
  )
}

export default Navbar