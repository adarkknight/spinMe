"use client";
import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
interface Props {
  authorized?: boolean;
}
const Navbar = ({ authorized }: Props) => {
  const currentPage = usePathname();
  const isHomePage = currentPage === "/home";

  return (
    <div className="navbar bg-secondary text-neutral-content min-h-0 p-0">
      <div className="flex-1 p-1">
        <div className="font-inter normal-case font-extrabold text-xl">
          spinMe
        </div>
      </div>
      <div className="flex-none gap-2 font-inter">
        {authorized && (
          <button>
            {!isHomePage ? (
              <Link className="link-hover" href="/home">
                Home
              </Link>
            ) : (
              <Link className="link-hover" href="/collection?page=1">
                Collection
              </Link>
            )}
          </button>
        )}
        <div className="p-1">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
