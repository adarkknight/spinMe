"use client";
import React from 'react'
import Link from 'next/link';
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
                <img src="/avatar.png" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 font-inter normal-case text-neutral">
              <li>
                <a className="justify-between">
                  Collection
                </a>
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