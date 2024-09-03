import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from 'next/link'
import React from 'react'


function header({ children, className }: HeaderProps) {
  return (
    <div className={cn("header", className)}>
        <Link href="/" className="md:flex-1">
        <Image 
            src="/assets/icons/logo.svg" 
            alt="Logo with name"
            width={120}
            height={32}
            className="hidden md:block"
        />
        </Link>
        {children}
    </div>
  )
}

export default header