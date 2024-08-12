import Image from "next/image";
import Link from "next/link";
import React from "react";

const featuredList = [
  {
    name: "Green Breeze",
    image: "/vapes/vape1.png",
  },
  {
    name: "Mint Blue",
    image: "/vapes/pen.png",
  },
  {
    name: "Fire Breath",
    image: "/vapes/vape2.png",
    className: "place-item-center",
  },
];

export default function FeaturedProduct() {
  const text = "Green Breeze";
  const [firstWord, secondWord] = text.split(" ", 2);
  return (
    <section className='font-permanent_marker  '>
      <div className='max-w-[1300px] mx-auto bg-[#200a31] py-10 rounded-3xl'>
        <div className='text-center mb-14  font-roboto '>
          <h1 className=' text-5xl font-bold'>Best deals</h1>
        </div>
        <div className=''>
          <div className='flex flex-wrap items-center gap-5 md:gap-14 justify-center'>
            {featuredList.map((value, key) => {
              const [firstWord, secondWord] = value.name.split(" ", 2);
              return (
                <div
                  key={key}
                  className={`h-[230px] md:h-[300px] bg-gradient-to-tl from-[#0a020f] via-[#302f30]
             to-[#000000] w-[150px] md:w-[300px] rounded-3xl relative ${value.className}`}
                >
                  <h1
                    className='absolute shadow-image top-20 left-6 italic leading-tight 
                  text-2xl md:text-4xl lg:text-6xl z-30 font-bold'
                  >
                    {firstWord} <br />
                    <span className='md:pl-8'>{secondWord}</span>
                  </h1>

                  <Image
                    className='absolute shadow-image top-0 right-0 object-top rotate-45 md:rotate-0 hover:z-50 hover:rotate-45 hover:scale-150 transition-all'
                    src={value.image}
                    height={200}
                    width={200}
                    alt='vape1'
                  />
                  <p
                    className={`absolute bottom-4 left-6 text-2xl text-[#c40046] `}
                  >
                    5000 PUFFS
                  </p>
                  <Link
                    href={"/product-list"}
                    className='absolute right-2 bottom-2 font-roboto border p-1 rounded-lg'
                  >
                    Order Now!
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
