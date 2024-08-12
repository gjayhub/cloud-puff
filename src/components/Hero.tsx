import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <article className='overflow-hidden  max-w-[1300px] mx-auto h-screen'>
      <div className=' h-full w-full px-10 grid md:grid-cols-2 items-center justify-center md:gap-14 lg:gap-20  '>
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2
         -translate-y-1/2  w-full md:w-[70vw] lg:w-[45vw]  h-[55vh] bg-[#990030] opacity-60
          rounded-3xl mt-[6.5rem] '
        >
          <Image
            className='object-cover w-full h-full rounded-3xl '
            src='/vapes/vape-trick.jpg'
            alt='vape-trick'
            height={500}
            width={500}
          />
        </div>

        <div className='grid grid-rows-[200px_50vh]'>
          <div className=''>
            <h1 className='text-8xl header-animation'>Cloud Puff</h1>
          </div>
          <div className='h-full w-full bg-purple-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 '>
            <Image
              className=' object-cover transform-gpu transition-all scale-125 -rotate-12 '
              src='/vapes/vape1.png'
              alt='hero'
              width={600}
              height={400}
            />
          </div>
        </div>
        <div className='md:grid grid-rows-[50vh_200px] relative hidden'>
          <div className='h-full w-full bg-purple-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 '>
            <Image
              className=' object-cover transform-gpu transition-all rotate-12 scale-125 '
              src='/vapes/vape2.png'
              alt='hero'
              width={500}
              height={500}
            />
          </div>
          <div className='text-left font-permanent_marker absolute bottom-0 '>
            <Link
              href={`/product-list`}
              className=' border p-1 rounded-md  font-roboto text-3xl  '
            >
              Order Now!
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
