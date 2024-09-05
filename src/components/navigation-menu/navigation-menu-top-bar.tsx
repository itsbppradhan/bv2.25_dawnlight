import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Link from "next/link";

const TopBar: React.FC<{ onToggleMenu: () => void }> = ({ onToggleMenu }) => (
  <div className="flex z-50 fixed md:static items-center justify-between w-full max-w-[calc(100%-1rem)] top-2 left-2 right-2 md:right-4 border bg-white/50 dark:bg-black/50 md:bg-transparent border-gray-300 dark:border-white/20 md:border-none p-2 md:p-4 md:pb-1.5 rounded-full backdrop-blur-md">
    <div className="pl-3">
      <Image
        src="/b.svg"
        alt="Logo"
        className="dark:invert "
        width={12}
        height={12}
        priority
      />
    </div>
    <div className="flex space-x-1">
    <Link href="https://itsbppradhan.bio.link" target="_blank" rel="noopener noreferrer" className="z-50">
        <button className="rounded-full dark:bg-black/40 dark:text-white bg-white/60 text-black p-1 px-2.5 border border-gray-300 dark:border-white/30">Get in touch</button>
      </Link>      
      <button 
        className="rounded-full dark:bg-black/40 dark:text-white bg-white/60 text-black p-1 px-2.5 border border-gray-300 dark:border-white/30 md:hidden" 
        onClick={onToggleMenu}
      >
        <HamburgerMenuIcon />
      </button>
    </div>
  </div>
);

export default TopBar;
