import Image from "next/image";
import React from "react";
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
export default function page({ params }: { params: { slug: string } }) {
  return (
    <div className='grid grid-cols-[1fr_450px] h-screen max-w-[1300px] mx-auto'>
      <div className=' h-screen'>
        <div className='flex justify-between items-center px-10 w-full h-20  mt-16 '>
          <input className='min-w-[60%]' />
          <button>search</button>
        </div>
        <div className='flex justify-between'>
          <h1 className='text-5xl font-bold'>New Arrivals</h1>
          <div>
            <p>sort</p>
          </div>
        </div>
        <div className='flex justify-center items-center  w-full '>
          <div className='flex flex-wrap h-fit mx-5 w-full justify-center gap-4'>
            {featuredList.map((value, key) => {
              const [firstWord, secondWord] = value.name.split(" ", 2);
              const discountedPrice =
                value.price - value.price * (value.discount / 100);
              return (
                <div
                  key={key}
                  className={`bg-gradient-to-tl h-[250px] w-[250px]
                   from-[#0a020f] via-[#302f30] to-[#000000] relative `}
                >
                  <p className={`absolute text-xl text-[#c40046] font-roboto `}>
                    5000 PUFFS
                  </p>
                  <span className='absolute text-yellow-400 right-0 rotate-12'>
                    {value.discount} %
                  </span>
                  <h1 className='absolute shadow-image top-20 left-6 italic leading-tight text-xl lg:text-4xl z-30 font-bold '>
                    {firstWord} <br />
                    <span className='pl-8'>{secondWord}</span>
                  </h1>
                  <Image
                    className='absolute shadow-image top-0 right-0 object-top rotate-45 md:rotate-0 hover:z-50 hover:rotate-45 hover:scale-150 transition-all '
                    src={value.image}
                    height={250}
                    width={250}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='h-screen  grid grid-rows-[250px_1fr_150px]'>
        <div className='w-full  '>Some logo</div>
        <div>check out</div>

        <div className='w-full'></div>
      </div>
    </div>
  );
}
