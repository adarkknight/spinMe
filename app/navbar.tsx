"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="navbar bg-secondary text-neutral-content min-h-0 p-0">
      <div className="flex-1 p-1">
        <div className="font-inter normal-case font-extrabold text-xl">spinMe</div>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src="/avatar.png" width='100' height='100' alt='avatar'></Image>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-md menu menu-sm dropdown-content bg-base-100 rounded-box w-40 font-inter normal-case text-neutral">
            <li>
              <Link href='/home'>Home</Link>
            </li>
            <li>
              <Link href='/collection?page=1'>Collection</Link>
            </li>
            <li>
              <Link href='/'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar