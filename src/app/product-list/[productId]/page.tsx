"use client";
import useProduct from "@/lib/store/ProductStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  const id = parseInt(productId);
  const { getProductById, productList } = useProduct();
  const vape = getProductById(id);
  return (
    <div className='max-w-[1300px] mx-auto mt-20'>
      <div className='flex items-center'>
        <div className='flex-1'>
          <Image
            className=''
            src={vape?.image || ""}
            alt={vape?.name || "img"}
            height={600}
            width={600}
          />
        </div>
        <div className='flex-1'>
          <h1 className='text-header leading-none'>{vape?.name}</h1>
          <p className='text-4xl my-5'>P {vape?.price}</p>

          <p className='text-slate-400 max-w-[70%]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non
            ullam repellendus, tempore deserunt omnis nemo aperiam? Architecto,
            natus iure?
          </p>
          <div className='flex flex-row gap-5 mt-8'>
            <button className='border p-2 rounded-xl shadow-sm shadow-slate-400'>
              Buy now
            </button>
            <button className='p-2 rounded-xl bg-[#990030] shadow-sm shadow-slate-400'>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className='my-20 '>
        <h1 className='text-5xl my-20 text-center'>You might also like</h1>

        <div className='flex flex-wrap gap-5 items-center justify-center px-52 '>
          {productList?.slice(0, 6).map((value, key) => {
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
                <p className={` text-xl text-[#c40046] font-roboto `}>
                  5000 PUFFS
                </p>
                <p className='absolute top-0 text-yellow-400 right-0 rotate-12'>
                  {value.discount} %
                </p>
                <h1 className='absolute font-permanent_marker shadow-image top-20 left-6 italic leading-tight text-3xl md:text-5xl z-10 font-bold '>
                  {firstWord} <br />
                  <span className='pl-8'>{secondWord}</span>
                </h1>
                <div className=''>
                  <Image
                    className=' object-top w-auto h-auto rotate-45 md:rotate-0 hover:z-20 hover:rotate-45 hover:scale-125 transition-all '
                    src={value.image}
                    fill
                    alt='vape1'
                  />{" "}
                </div>
                <div className='flex justify-between items-end h-full w-full  px-2 pb-3'>
                  <p>
                    ₱ <span>{discountedPrice} </span>
                  </p>

                  <Link
                    href={`/product-list/${value.id}`}
                    className='font-roboto border p-1  rounded-full z-30'
                  >
                    Order Now!
                  </Link>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
