'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { examples } from "@/constants"
  import Autoplay from "embla-carousel-autoplay"
  import AutoScroll from 'embla-carousel-auto-scroll'
import React from 'react'
import ExampleCard from "./ExampleCard"

const AutoCarousel = () => {
  return (
    <div>
<div></div>
<Carousel className='md:left-[-140px] hidden md:block [&_div]:overflow-visible w-1/2 lg:left-[-30px] overflow-x-visible'orientation="horizontal"opts={{
    loop: true,
    align: "start"
   }}
   plugins={[
    AutoScroll({
      speed: 2,
      stopOnInteraction: false,
      stopOnFocusIn: false,
    }),
  ]}
   >
  <CarouselContent className="bg-transparent -ml-1 z-40 overflow-x-visible">
  {examples.map((link)=>(
       <CarouselItem className={`pl-10 basis-[${1/2*(examples.length)}%]`} key={link.imgUrl}> <ExampleCard
        key={link.imgUrl} imgUrl={link.imgUrl} className="bg-cover h-[200px] min-w-[300px] md:w-[40vw] md:h-[22vw] bg-white rounded-lg" ></ExampleCard></CarouselItem>
      ))}
  {examples.map((link)=>(
       <CarouselItem className={`pl-10 basis-[${1/2*(examples.length)}%]`} key={link.imgUrl}> <ExampleCard
        key={link.imgUrl} imgUrl={link.imgUrl} className="bg-cover h-[200px] min-w-[300px] md:w-[40vw] md:h-[22vw] bg-white rounded-lg" ></ExampleCard></CarouselItem>
      ))}
  </CarouselContent>
</Carousel>
    </div>
  )
}

export default AutoCarousel  
