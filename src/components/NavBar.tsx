"use client";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
// import Button from "./ui/Button";
import { motion, sync, useCycle } from "framer-motion";

import LinkButton from "./ui/Links";
import { useDimensions } from "../../lib/hooks/useDimentions";
import { MobileNavigation } from "./ui/mobile-nav";
import { MenuToggle } from "./ui/menu-toggle";

const navList = ["Home", "New Arrivals", "Best Sellers", "Contact Us"];

export default function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const goLogin = () => {};

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <div className='overflow-hidden font-roboto '>
      <div className='grid grid-cols-[70px 1fr]'>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className=' fixed md:hidden top-0 left-0 z-50  w-[300px] h-full'
        >
          <motion.div
            className='md:hidden top:0 right-0 w-[300px]'
            variants={sidebar}
          />
          <MobileNavigation isOpen={isOpen} />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
      <header
        className='fixed w-full max-w-[1300px]  hidden md:flex m-0 h-14 top-0 left-[50%] transform -translate-x-1/2 justify-between items-center px-[20px] z-10'
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div>
          <Image
            className='rounded-full cursor-pointer h-[40px] w-[40px}'
            src='/logo.jpg'
            alt='logo'
            height={80}
            width={80}
          />
        </div>
        <ul className='flex gap-8 text-sub-header capitalize cursor-pointer justify-center items-center'>
          {navList.map((navItem, idx) => (
            <li key={idx}>{navItem}</li>
          ))}
        </ul>
        <div className='flex items-center'>
          <ShoppingCart color='#eee' />
          <LinkButton href=''>Login</LinkButton>
          <LinkButton href='/signup'>Signup</LinkButton>
        </div>
      </header>{" "}
    </div>
  );
}
