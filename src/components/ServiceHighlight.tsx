import {
  LightbulbIcon,
  Lock,
  MessageSquareHeart,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const whyList = [
  {
    title: "Premium Quality",
    description:
      "At CloudPuff, we offer only the highest quality vape products from the most reputable manufacturers.",
    icon: <ShieldCheck size={50} />,
  },
  {
    title: "Innovative Flavors",
    description:
      "Discover unique and exciting flavors crafted by top flavorists, from classic tastes to bold new blends.",
    icon: <LightbulbIcon size={50} />,
  },
  {
    title: "Fast and Reliable Shipping",
    description:
      "Enjoy fast and reliable shipping with real-time tracking from our warehouse to your doorstep.",
    icon: <Truck size={50} />,
  },
  {
    title: "Secure Shopping",
    description:
      "Shop confidently with our secure website, protecting your personal and payment information.",
    icon: <Lock size={50} />,
  },

  {
    title: "Community and Education",
    description:
      "Join the CloudPuff community for resources and articles on the latest vaping trends and best practices.",
    icon: <Users size={50} />,
  },

  {
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our priority, with outstanding customer service ready to assist you at any time.",
    icon: <MessageSquareHeart size={50} />,
  },
];
export default function ServiceHighlight() {
  return (
    <section className='font-roboto my-24 max-w-[1400px] m-auto '>
      <h1 className='text-5xl lg:text-header font-bold text-center'>
        Why CloudPuff
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-3 justify-center  items-center gap-4'>
        {/* First set of whyList items */}
        <div className='col-span-1 text-center order-1'>
          {whyList.slice(0, 3).map((value, key) => (
            <div
              key={key}
              className='flex justify-center items-center flex-col h-36  md:h-auto '
            >
              <span className='text-center mx-auto mt-4'>{value.icon}</span>
              <h3 className='text-2xl'>{value.title}</h3>
              <p className='lg:block hidden text-slate-400'>
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image - spans 2 columns on mobile, centered on larger screens */}
        <div className='col-span-2 md:col-span-1 flex justify-center items-center order-first md:order-2'>
          <Image src='/vapes/vape3.png' width={600} height={600} alt='img' />
        </div>

        {/* Second set of whyList items */}
        <div className='col-span-1 text-center order-3'>
          {whyList.slice(3, 6).map((value, key) => (
            <div
              key={key}
              className='flex justify-center items-center flex-col h-36  md:h-auto '
            >
              <span className='text-center mx-auto mt-4'>{value.icon}</span>
              <h3 className='text-2xl'>{value.title}</h3>
              <p className='lg:block hidden text-slate-400'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
