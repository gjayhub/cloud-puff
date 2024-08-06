import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  closed: {
    y: 40,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ item, i }: any) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className='m-0 list-none mb-3 cursor-pointer font-museo_muderno text-slate-300 text-center'
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={`${item.route}`} className=''>
        {item.name}
      </Link>
    </motion.li>
  );
};
