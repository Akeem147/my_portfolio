import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import Image from "next/image";

export default function Clients() {
  return (
    <div className="pt-20 pb-10 md:pb-8 md:py-0 lg:pt-10" id="testimonials">
      <h1 className="text-center mb-6 lg:text-6xl lg:w-5xl text-3xl">
        Kinds words from <br /> my{" "}
        <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-10 mt-10">
            {companies.map(({id, img, nameImg, name}) => (
                <div className="flex md:max-w-60 max-w-32 gap-2" key={id}>
                   <Image className="md:w-10 w-5" src={img} alt={name} width={40} height={40}/>
                   <Image className="md:w-24 w-20" src={nameImg} alt={name} width={40} height={40}/>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
