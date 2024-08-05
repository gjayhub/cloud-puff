import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className='bg-[#212121] text-white py-6 font-roboto'>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='mb-4'>
          <a href='#about' className='text-gray-300 hover:text-gray-100 mx-2'>
            About
          </a>
          <a
            href='#services'
            className='text-gray-300 hover:text-gray-100 mx-2'
          >
            Product
          </a>
          <a href='#contact' className='text-gray-300 hover:text-gray-100 mx-2'>
            Contact
          </a>
        </div>
        <div className='mb-4 flex space-x-4'>
          <Link
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-gray-100'
          >
            <Facebook />
          </Link>
          <Link
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-gray-100'
          >
            <Twitter />
          </Link>
          <Link
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-gray-100'
          >
            <Instagram />
          </Link>
        </div>
        <div>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
