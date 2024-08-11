"use client";
import usePaginationStore from "@/lib/store/PaginationStore";
import useProduct from "@/lib/store/ProductStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

export default function ProductContainer() {
  const { productList } = useProduct();
  const { start, end } = usePaginationStore();
  const router = useRouter();

  return (
    <div className='flex flex-wrap gap-5  items-center justify-center  '>
      {productList?.slice(start, end).map((value, key) => {
        const [firstWord, secondWord] = value.name.split(" ", 2);
        const discountedPrice =
          value.price - value.price * (value.discount / 100);
        return (
          <Link
            href={`/product-list/${value.id}`}
            key={key}
            className={`flex-1 min-w-[40%] md:min-w-[250px] max-w-[250px] h-[240px] bg-gradient-to-tl
           from-[#0a020f] via-[#302f30] to-[#000000] relative pb-5`}
          >
            <p className={` text-xl text-[#c40046] font-roboto `}>5000 PUFFS</p>
            <p className='absolute top-0 text-yellow-400 right-0 rotate-12'>
              {value.discount} %
            </p>
            <h1 className='absolute font-permanent_marker shadow-image top-20 left-6 italic leading-tight text-3xl md:text-5xl z-10 font-bold '>
              {firstWord} <br />
              <span className='pl-8'>{secondWord}</span>
            </h1>

            <Image
              className=' object-top w-auto h-auto rotate-45 md:rotate-0 hover:z-20 hover:rotate-45 hover:scale-125 transition-all '
              src={value.image}
              fill
              alt='vape1'
            />

            <div className='flex justify-between items-end h-full w-full  px-2 pb-3'>
              <p>
                ₱ <span>{discountedPrice} </span>
              </p>

              <button
                onClick={() => router.push(`/product-list/${value.id}`)}
                className='font-roboto border p-1  rounded-full z-30'
              >
                Order Now!
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
