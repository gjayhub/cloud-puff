import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <article className='overflow-hidden'>
      <Image
        className='absolute w-screen h-screen object-cover -z-10'
        src='/hero.jpg'
        alt='hero'
        quality={100}
        width={2000}
        height={2000}
      />
      <div
        className='h-screen w-screen px-10 flex
        items-center lg:pl-40 md:pl-24 '
      >
        <div className='w-full pb-40 font-permanent_marker relative'>
          <h1 className='text-[4rem] leading-snug'>Discover Your</h1>
          <h1 className='lg:pl-32 md:pl-10 text-[4rem]'>Perfect Vape!</h1>
          <h3 className='text-sub-header lg:ml-32'>
            Quality, Flavor, and Innovation in Every Puff!
          </h3>{" "}
          <button className='absolute right-0 md:right-96 bottom-0  font-roboto text-3xl border p-2 rounded-full '>
            Order Now!
          </button>
        </div>
      </div>
    </article>
  );
}
