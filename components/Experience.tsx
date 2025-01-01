import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="pt-20 pb-10 md:pb-8 md:py-0 lg:pt-10" id="testimonials">
      <h1 className="text-center mb-6 lg:text-6xl lg:w-5xl text-3xl">
        My {" "}
        <span className="text-purple">work experience</span>
      </h1>
      <div className=" w-full grid lg:mt-12 lg:grid-cols-4 grid-cols-1 gap-10">
      {workExperience.map((card) => (
        <Button className="flex-1 text-white border-neutral-200 dark:border-slate-800" key={card.id} duration={Math.floor(Math.random() * 10000 + 10000)}>
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <Image src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-12 w-16" width={200} height={200}/>
                <div className="lg:mx-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">{card.title}</h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">{card.desc}</p>
                </div>
            </div>
        </Button>
      ))}
      </div>
    </div>
  );
}
