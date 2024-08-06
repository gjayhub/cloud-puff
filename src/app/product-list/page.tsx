import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import PaginationComponent from "./Pagination";
import ProductContainer from "./ProductContainer";
import Cart from "@/components/Cart";

const validNav = ["Special Offer", "Bestseller", "New Arrival"];

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const navParam = Array.isArray(searchParams?.n)
    ? searchParams.n[0]
    : searchParams?.n;

  // Default to "All Products" if searchParams is not present or invalid
  const displayTitle = validNav.includes(navParam ?? "")
    ? navParam
    : "All Products";

  return (
    <div className='md:grid md:grid-cols-[2fr_1fr] overflow-hidden gap-2 max-w-[1300px] mx-auto px-5 mt-16'>
      <div className=''>
        <div className='flex z-50 items-center px-4 w-full h-20 gap-5 pl-10'>
          <input
            placeholder='Search vape'
            className='min-w-[60%] text-slate-600 p-2 rounded-lg font-roboto'
          />
          <button className='border p-2 rounded-xl'>Search</button>
        </div>
        <ScrollArea className='h-[90vh] w-full z-30'>
          <div className='flex justify-between m-10 items-center'>
            <h1 className='text-5xl font-bold'>{displayTitle}</h1>
            <button className='border px-2 rounded-xl'>Sort</button>
          </div>
          <ProductContainer />
        </ScrollArea>
        <PaginationComponent />
      </div>
      <Cart />
    </div>
  );
}
