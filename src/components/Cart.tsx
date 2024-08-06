"use client";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import useProduct from "@/lib/store/ProductStore";
import { AnimatePresence, motion } from "framer-motion";

// Define the type for the product
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

// Define the type for the quantities state
interface Quantities {
  [key: string]: number;
}

export default function Cart() {
  const { productList } = useProduct();
  const [selected, setSelected] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<Quantities>(() =>
    productList.reduce<Quantities>((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );
  const [totalPrice, setTotalPrice] = useState(() =>
    productList.reduce((total, product) => total + product.price, 0)
  );

  const handleSelect = (selected: string) => {
    setSelected(selected);
  };

  const handleIncrement = (id: number) => {
    setQuantities((prev) => {
      const newQuantities = { ...prev, [id]: prev[id] + 1 };
      updateTotalPrice(newQuantities);
      return newQuantities;
    });
  };

  const handleDecrement = (id: number) => {
    setQuantities((prev) => {
      if (prev[id] > 1) {
        const newQuantities = { ...prev, [id]: prev[id] - 1 };
        updateTotalPrice(newQuantities);
        return newQuantities;
      }
      return prev;
    });
  };

  const updateTotalPrice = (quantities: Quantities) => {
    const newTotal = productList.reduce((total, product) => {
      return total + product.price * quantities[product.id];
    }, 0);
    setTotalPrice(newTotal);
  };

  return (
    <div
      className='hidden md:block shadow-inner shadow-slate-950 px-5 bg-gradient-to-tl 
                from-[#000000] to-[#461542] relative rounded-xl'
    >
      <div className='shadow-2xl from-[#000000] to-[#461542] rounded-lg flex justify-center py-5 '>
        {selected ? (
          <motion.div
            key={selected}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='transition-all'
          >
            <Image src={selected} width={200} height={200} alt='Preview' />
          </motion.div>
        ) : (
          <ShoppingCart size={150} />
        )}
      </div>

      <div className=''>
        <ScrollArea>
          <div className='h-[55vh]'>
            {productList.map((value) => {
              return (
                <div key={value.id} onClick={() => handleSelect(value.image)}>
                  <div className='h-28 grid grid-cols-[100px_1fr_30px] justify-between items-center'>
                    <div className=''>
                      <Image
                        className='rotate-45'
                        src={value.image}
                        height={80}
                        width={80}
                        alt={value?.name}
                      />
                    </div>
                    <div>
                      <h1 className='text-xl mb-4'>{value.name}</h1>
                      <p className='text-slate-400'>P {value.price}</p>
                    </div>
                    <div className='flex items-center flex-col'>
                      <Plus
                        className='rounded-md bg-[#c40046] border-slate-400 cursor-pointer'
                        onClick={() => handleIncrement(value.id)}
                      />
                      <p>{quantities[value.id]}</p>
                      <Minus
                        className='border rounded-md border-slate-400 cursor-pointer'
                        onClick={() => handleDecrement(value.id)}
                      />
                    </div>
                  </div>
                  <Separator />
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
      <Separator />
      <div className='flex justify-between items-center mt-8'>
        <h1 className='text-4xl'>P {totalPrice}</h1>
        <button className='p-2 bg-[#c40046] rounded-lg'>Check out</button>
      </div>
    </div>
  );
}
