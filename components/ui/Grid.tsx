import React from "react";
import {  BentoGridItem, BentoGrid } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            width,
            height,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              width={width} // Pass width
              height={height}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
