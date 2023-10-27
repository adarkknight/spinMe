"use client";
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-neutral font-semibold text-neutral-content text-[10px] leading-3">
      <aside>
        <div>Copyright © 2024 - spinMe</div>
        <div>Data provided by
          <a href="https://www.discogs.com/" target='_blank' rel='noopener noreferrer' className="link link-hover"> Discogs
          </a>
        </div>
      </aside>
    </footer>
  )
}

export default Footer