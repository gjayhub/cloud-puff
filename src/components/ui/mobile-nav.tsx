import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import Link from "next/link";
import Image from "next/image";
const navList = ["Home", "New Arrivals", "Best Sellers", "Contact Us"];
type navType = () => void;

export const MobileNavigation = ({ isOpen }: any) => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.4 },
      opacity: 1,
      x: 0,
      scale: 1,
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
      opacity: 0,
      x: -50,
      scale: 0.4,
      y: -100,
    },
  };
  const sidebar = {
    open: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    closed: {
      opacity: 0,
      x: -90,
      scale: 0.4,
      y: -200,
    },
  };

  return (
    <motion.div
      variants={sidebar}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.6 }}
      initial={{ opacity: 0 }}
      className='m-0 absolute top-0 left-0 rounded-br-lg w-[250px] bg-black pt-28 -z-10'
    >
      <Link
        href='#home'
        className='absolute top-2 left-1/2 transform -translate-x-1/2 '
      >
        <div className='relative w-[250px] h-[80px] '>
          <Image src='/logo.jpg' layout='fill' objectFit='contain' alt='logo' />
        </div>
      </Link>
      <motion.ul className='' variants={variants}>
        {navList.map((item, i) => (
          <MenuItem item={item} i={i} key={i} />
        ))}
      </motion.ul>
    </motion.div>
  );
};
