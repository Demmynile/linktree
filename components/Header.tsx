"use client";

import { cn } from "@/lib/utils";
import  Link  from "next/link";

function Header({  isFixed = false }: { isFixed?: boolean }) {

  return (
  <header 
    className={cn(
        "bg-white/80 backdrop-blur-sm border-b border-white/20 shadow-sm", 
    isFixed && "sticky top-0 z-50",
    )}
  >
    <div className="max-w-7xl mx-auto px-4 xl:px-2 py-4 flex justify-between items-center">

     <Link href = "/dashboard" className="text-2xl font-bold">
       SimmerLink
     </Link>

    </div>
  </header>
  )
}

export default Header