import Image from "next/image"
import { Cover } from "@/components/ui/cover";
import { EvervaultCard } from "@/components/ui/evervault-card";
import Link from "next/link";


export function Bento() {
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-5 md:grid-rows-4 gap-2 md:gap-2 m-4">
     <div className="border border-gray-300 dark:border-white/20 col-start-1 row-start-1 row-span-2 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-3 bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-4 md:p-10">
  <h2 className=" font-bold text-xl mb-4">Bespoke UI Design</h2>
  <p className="text-md ">Design that speaks.</p>
  <div className="mt-4">
    <Image
      src="/bento/simplelayout.svg"
      alt="Bespoke UI Illustration"
      layout="responsive"
      width={120}
      height={37}
      priority
      className="dark:invert"
    />
  </div>
</div>

<div className="border border-gray-300 dark:border-white/20 col-start-2 row-start-1 md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1 bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-4 md:p-10 flex items-center justify-center">
  <div className="font-semibold text-xl"><Cover>Ultra-fast</Cover> and scalable solutions</div>
</div>

      <div className="border border-gray-300 dark:border-white/20 col-start-2 row-start-2 md:col-start-3 md:row-start-4 md:col-span-1 md:row-span-1 bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-4 md:p-10">
  <p className="font-bold text-xl">
    <span className="text-green-500">ANDROID?</span>{' '}
    <span className="text-blue-500">WINDOWS?</span>{' '}
    <span className="text-yellow-500">LINUX?</span>{' '}
    <span className="text-pink-500">WEB?</span>{' '}
    <span className=" text-gray-800 dark:text-gray-200">I CAN DO IT ALL!</span>
  </p>
</div>
      <div className="relative border border-gray-300 dark:border-white/20 col-start-1 row-start-3 col-span-2 row-span-2 md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-4 bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-4 md:p-10 overflow-hidden">
    <Image
      src="/bento/3d.jpg"
      alt="Glass Image"
      objectFit="cover"
      layout="fill"
      priority
    />
    <div className="relative space-y-3 z-10">
      <p className="text-xl font-semibold">B Studio⁺</p>
      <p className="text-md"> Where pixels meet imagination. </p>
      <p className="text-sm">Coming Soon</p>
    </div>
  </div>
      <div className="border space-y-3 border-gray-300 dark:border-white/20 col-start-1 row-start-5 row-span-2 md:col-start-1 md:row-start-4 md:col-span-1 md:row-span-1 bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-4 md:p-10">
      <div className="space-y-3">
        <p className="text-2xl font-semibold">Want to <span className="text-orange-500">fire up</span> your next project?</p>
        <div>
          <Link href="https://itsbppradhan.bio.link" target="_blank" rel="noopener noreferrer">
            <button className="rounded-full dark:bg-black/40 dark:text-white bg-white/60 text-black p-1 px-2.5 border border-gray-300 dark:border-white/30">Get in touch</button>
          </Link>
        </div>
      </div>
      </div>
      <div className="border border-gray-300 dark:border-white/20 col-start-2 row-start-5 row-span-2 md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-2 bg-white dark:bg-black rounded-3xl "><EvervaultCard text=""/></div>
      
    </div>
    )
}