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
  },
];

export default function FeaturedProduct() {
  const text = "Green Breeze";
  const [firstWord, secondWord] = text.split(" ", 2);
  return (
    <section className='font-permanent_marker  bg-[#200a31]'>
      <div className='max-w-[1300px] mx-auto'>
        <div className='text-center mb-14  font-roboto '>
          <h1 className=' text-5xl font-bold'>Best deals</h1>
        </div>
        <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-20 '>
          {featuredList.map((value, key) => {
            const [firstWord, secondWord] = value.name.split(" ", 2);
            return (
              <div
                key={key}
                className={`h-[400px]  bg-gradient-to-tl from-[#0a020f] via-[#302f30] to-[#000000]  rounded-3xl relative `}
              >
                <h1 className='absolute shadow-image top-20 left-6 italic leading-tight text-6xl lg:text-7xl z-30 font-bold '>
                  {firstWord} <br />
                  <span className='pl-8'>{secondWord}</span>
                </h1>

                <Image
                  className='absolute shadow-image top-0 right-0 object-top rotate-45 md:rotate-0 hover:z-50 hover:rotate-45 hover:scale-150 transition-all '
                  src={value.image}
                  height={350}
                  width={350}
                  alt='vape1'
                />
                <p
                  className={`absolute bottom-4 left-6  text-2xl  text-[#c40046] ${
                    key === 2 || key === 1 ? "lg:text-5xl " : "md:text-5xl"
                  }`}
                >
                  5000 PUFFS
                </p>
                {/* make this button an overlay if it hover it */}
                <Link
                  href={"/product-list"}
                  className='absolute right-2 bottom-2  font-roboto  border p-2 rounded-full '
                >
                  Order Now!
                </Link>
              </div>
            );
          })}
        </div>{" "}
      </div>
    </section>
  );
}
