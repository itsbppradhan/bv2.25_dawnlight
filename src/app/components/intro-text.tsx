import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Beautiful", "Bold", "Bespoke", "Brilliant", "Blazing"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-16">
      <div className=" items-start text-4xl font-normal text-neutral-600 dark:text-neutral-400">
        Creating
        <FlipWords words={words} /> <br />
        products that set new horizons
      </div>
      <div className="flex flex-col justify-center items-start text-base text-neutral-600 dark:text-neutral-400">
        <p>
        I craft beautiful, tactile software and powerful hardware, blending cutting-edge 3D graphics with seamless performance. My aim is to drive innovation across industries, making technology more uncluttered, accessible and impactful.
        </p>
      </div>
    </div>
  );
}


// At B, we create beautiful, tactile software and powerful hardware,
//           blending cutting-edge 3D graphics with seamless performance. Our
//           expertise drives innovation across industries, making technology more
//           accessible and impactful.