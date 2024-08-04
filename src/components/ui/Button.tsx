"use client"

import React, { ReactNode } from 'react'
import { cn } from '../../../lib/utils'

type ButtonProps = {
    className?:string
    onClick:()=>void
    children:ReactNode
}
export default function Button({className,onClick,children}:ButtonProps) {
  return (
<button onClick={onClick} className={cn("p-[3px] relative",className)}>
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
   {children}
  </div>

</button>
  )
}
