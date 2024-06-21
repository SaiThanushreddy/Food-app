"use client"
// import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  // const session =  useSession();
  // console.log(session);
  return (
    <header>
    
      <div className="flex items-center justify-between p-2">
        <Link href="/" className="text-amber-500 font-semibold text-2xl">
          ST PIZZA
        </Link>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          
        </nav>
        <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
        <Link href={''}>Login</Link>
        <Link href="/register" className='bg-red-500 text-white px-8 py-2 rounded-full justify-center' >Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
