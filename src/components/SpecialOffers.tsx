import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const featuredList = [
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 40,
    price: 500,
  },
  {
    name: "Mint Blue",
    image: "/vapes/pen.png",
    className: "col-span-2",
    discount: 10,
    price: 500,
  },
  {
    name: "Fire Breath",
    image: "/vapes/vape2.png",
    className: "col-span-2",
    discount: 40,
    price: 500,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 30,
    price: 500,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 20,
    price: 500,
  },
  {
    name: "Mint Blue",
    image: "/vapes/pen.png",
    className: "col-span-2",
    discount: 30,
    price: 500,
  },
  {
    name: "Fire Breath",
    image: "/vapes/vape2.png",
    className: "col-span-2",
    discount: 20,
    price: 500,
  },
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
    className: "col-span-3",
    discount: 30,
    price: 500,
  },
];
export default function SpecialOffers() {
  return (
    <section className='max-w-[1400px] m-auto '>
      <div className='relative w-full'>
        <h1
          className='font-bold absolute top-[-20px] md:top-[-40px] lg:top-[-150px] 
         text-center text-[10rem] md:text-[15rem] lg:text-[20rem] opacity-10 
         shadow-text leading-tight left-1/2 transform -translate-x-1/2'
        >
          Cloud
        </h1>
        <div className='flex justify-between mt-28 mb-14 items-center font-roboto'>
          <h1 className='text-5xl font-bold'>Special Offers!</h1>
          <Link href='' className='font-roboto pr-6'>
            See more
          </Link>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className='w-full m-auto'
      >
        <CarouselContent className='gap-8 mx-5'>
          {featuredList.map((value, key) => {
            const [firstWord, secondWord] = value.name.split(" ", 2);
            const discountedPrice =
              value.price - value.price * (value.discount / 100);
            return (
              <CarouselItem
                key={key}
                className={` lg:basis-1/3 md:basis-1/2 h-[340px] w-[200px]  bg-gradient-to-tl from-[#0a020f] via-[#302f30] to-[#000000] rounded-3xl relative ${value.className}`}
              >
                {" "}
                <p className={`absolute text-xl text-[#c40046] font-roboto `}>
                  5000 PUFFS
                </p>
                <span className='absolute text-yellow-400 right-0 rotate-12'>
                  {value.discount} %
                </span>
                <h1 className='absolute shadow-image top-20 left-6 italic leading-tight text-6xl lg:text-7xl z-30 font-bold '>
                  {firstWord} <br />
                  <span className='pl-8'>{secondWord}</span>
                </h1>
                <Image
                  className='absolute shadow-image top-0 right-0 object-top rotate-45 md:rotate-0 hover:z-50 hover:rotate-45 hover:scale-150 transition-all '
                  src={value.image}
                  height={350}
                  width={300}
                  alt='vape1'
                />
                <div className='flex justify-between items-end h-full w-full pb-2 px-2'>
                  <div>
                    <p className='pl-4 line-through opacity-40 text-sm'>
                      {value.price}
                    </p>
                    <p>
                      ₱ <span>{discountedPrice} </span>
                    </p>
                  </div>
                  <button className='font-roboto border p-2 rounded-full'>
                    Order Now!
                  </button>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className='ml-4 z-10' />
        <CarouselNext className='mr-4' />
      </Carousel>
    </section>
  );
}
