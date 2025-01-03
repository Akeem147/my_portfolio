"use client";
import dynamic from "next/dynamic";
import { cn } from "@/utils/cn";
import { useState } from "react";
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const BackgroundGradientAnimation = dynamic(
  () => import("@/components/ui/GradientBg").then((mod) => mod.default), // Access default export explicitly
  {
    ssr: false, // Disable SSR for this component
  }
);

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  width?: string | undefined;
  height?: string | undefined;
  spareImg?: string;
  id?: number;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("Odedeakeem539@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(2, 0, 36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(59, 59, 68, 1) 26%, rgba(93, 108, 111, 1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              width={700}
              height={700}
              alt="img"
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt="spare image"
              width={700}
              height={700}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        <div>
          {id === 6 && <BackgroundGradientAnimation interactive={true} />}
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 lg:px-5 p-5 "
            )}
          >
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
              {title}
            </div>

            {id === 3 && (
              <div className="flex gap-1 lg:gap-2 w-fit absolute -right-1 lg:-right-0 md:mt-[105px] lg:mr-3 mr-4 ">
                <div className="flex flex-col gap-3 lg:gap-8 md:gap-8">
                  {["React.js", "Next.js", "TypeScript"].map((item) => (
                    <span
                      className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                </div>

                <div className="flex flex-col gap-3 lg:gap-8 md:gap-8">
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                  {["Express.js", "Node.js", "MongoDB"].map((item) => (
                    <span
                      className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {id === 6 && (
              <div className="mt-5 relative lg:mt-10">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                  />
                </div>
                <MagicButton
                  title={copied ? "Email copied!" : "Copy my email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="`!bg-[#161831]`"
                  handleClick={handleCopy}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundGradientAnimation;
