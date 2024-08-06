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
import Link from "next/link";

type navListType = {
  name: string;
  route: string;
};

const navList: navListType[] = [
  { name: "Home", route: "/" },
  { name: "New Arrival", route: "/product-list?n=New Arrival" },
  { name: "Bestseller", route: "/product-list?n=Bestseller" },
  { name: "Contact", route: "/contact" },
];

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
    <div className=' font-roboto '>
      <div
        className='flex justify-between items-center fixed md:hidden top-0 z-50 w-full'
        style={{ backdropFilter: "blur(10px)" }}
      >
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className=' '
        >
          <motion.div
            className='  top:0 right-0 w-[300px] fixed'
            variants={sidebar}
            animate={isOpen ? "open" : "closed"}
          />
          <MobileNavigation isOpen={isOpen} navList={navList} />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>{" "}
        <h2 className='text-2xl font-permanent_marker'>CLOUDPUFF</h2>
        <div className='flex items-center'>
          <ShoppingCart color='#eee' />
          <LinkButton href=''>Login</LinkButton>
          <LinkButton href='/signup'>Signup</LinkButton>
        </div>
      </div>
      <header
        className='fixed w-full max-w-[1300px]  z-50 hidden md:flex m-0 h-14 top-0 left-[50%] transform -translate-x-1/2 justify-between items-center px-[20px]'
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
            <Link href={`${navItem.route}`} key={idx}>
              {navItem.name}
            </Link>
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
