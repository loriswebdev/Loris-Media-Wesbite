import AutoCarousel from "@/components/AutoCarousel";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { homeData } from "@/constants";



import Image from "next/image";
import Link from "next/link";

export default function Home() {
const {main} = homeData;
  return (
    <>
    
      <section className='jumbo relative w-full h-[800px] bg-cover z-0 overflow-hidden' style={{backgroundImage: `url(${main.bgImgUrl})`}}>
        <div className="absolute d:relative gradient bg-gradient-purple-dark w-full h-full opacity-80">
         </div>
        
      <div className="w-full md:w-fit relative md:absolute flex flex-col  md:rotate-[-21.19deg] z-10 md:top-[-20vw] lg:left-[-8vw] lg:top-[-30vw] ">

      <Image
      src='/icons/LorisMediaLogo_white.png'
      width={600}
      height={600}
      alt='Loris Media Logo'
      className="relative mt-[30vh] md:mt-0 top-[-20px] md:top-0 lg:min-w-[900px] md:min-w-[700px]"
     
      />
      <h1 className="text-white text-center md:text-left md:ml-[250px] lg:ml-[310px] mt-[-60px] md:mt-[-40px] lg:mt-[-60px] text-[1.5rem] md:text-[2rem] lg:text-[2.75rem] uppercase italic md:mb-2 lg;mb-5">Custom Websites</h1>
   <Image
   src='/icons/down-arrow.gif'
   width={50}
   height={50}
   alt="scroll down"
   className="md:hidden self-center"
   unoptimized
   />
   <AutoCarousel/>
      
      </div>
      
      </section>
      <div className="w-full text-white pt-9 pb-9 relative bg-purple-1 z-20 flex justify-center items-center flex-col">
        <h2 className=" font-extrabold text-[6vw] md:text-[3.2rem] lg:text-[4rem] uppercase"><span className="koho tracking-widest font-light">Explore Our</span> Portfolio</h2>
        <h3 className="italic text-[4vw] md:text-[2rem]">Effective <span className="font-extrabold">Modern</span> Designs</h3>
        <h4 className="text-[1.2rem]">Click Here!</h4>
        <Link href='/portfolio'><Button className="bg-white hover:after:bg-black hover:after:w-full 
        before:h-full before:w-full before:absolute before:bg-white before:z-0
        hover:after:h-full hover:after:absolute relative  overflow-hidden hover:after:z-30 hover:after:opacity-[.05]"><Image
        src='/icons/click.gif'
        width={50}
        height={50}
        alt="click here"
        className="z-10"
        

        /></Button></Link>
      </div>
      <section className="services">
      <Services/>
      <div className="h-[20px] w-full bg-white"></div>
      </section>

    </>
  );
}