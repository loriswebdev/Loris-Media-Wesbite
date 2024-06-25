'use client'
import React, {useState} from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
const Services = () => {
    const [active, setActive] = useState<string>('web')

    
  const onHover = (type:string,)=>{
    setActive(type)
   
  }
  const onMouseLeave = ()=>{
    setActive('web')
  }
    return (
    <div onMouseLeave={onMouseLeave} className="flex flex-col lg:flex-row w-full relative">
    <Image
    src='/images/web.jpg'
    width={800}
    height={800}
    alt="main at desk drawing logo"
    className={(active === 'web'? 'opacity-100 ': 'opacity-0 ') + "transition-opacity duration-700 w-full h-full absolute top-0 left-0 object-cover z-0"}
    />
    <Image
    src='/images/ecommerce.jpg'
    width={800}
    height={800}
    alt="main at desk drawing logo"
    className={(active === 'ecommerce'? 'opacity-100 ': 'opacity-0 ') + "transition-opacity duration-700 w-full h-full absolute top-0 left-0 object-cover z-0"}
    />
    <Image
    src='/images/marketing.jpg'
    width={800}
    height={800}
    alt="main at desk drawing logo"
    className={(active === 'marketing'? 'opacity-100 ': 'opacity-0 ') + "transition-opacity duration-700 w-full h-full absolute top-0 left-0 object-cover z-0"}
    />
    <p className="w-full lg:block hidden absolute text-[6rem] text-center text-white top-20 monoton tracking-widest [word-spacing:10px]">{active === 'web' ? "Custom Design": active==='ecommerce'? 'Ecommerce Design': 'Website Marketing'}</p>
      <Card onMouseOver={()=> {onHover('web')}} className='services-border border-none relative bg-gradient-green-light h-[200px] lg:h-[500px] w-full lg:w-1/3 flex flex-col justify-end  z-30 rounded-none text-white'>
  <CardHeader>
    <div className="flex flex-row">
    <CardTitle className="text-[2.5rem]">01</CardTitle>
    <CardDescription className="text-white ml-6 top-1/2 bottom-1/2 mt-auto mb-auto capitalize text-wrap text-[1.3rem]"><span className="font-extrabold">custom</span> web disign<br/> and Development</CardDescription>
    </div> 
  </CardHeader>
  <CardContent className={(active === 'web' ? `h-[100px] `: "h-0 pb-0 ")+ 'overflow-hidden transition-all duration-300'}>
    <p>We create websites that generate brand engagement, conversions and measurable results.</p>
  </CardContent>
   </Card>
   
      <Card onMouseOver={()=> {onHover('ecommerce')}} className='h-[200px]  services-border relative border-none bg-gradient-purple-light lg:h-[500px] w-full lg:w-1/3 flex flex-col justify-end z-20 rounded-none text-white'>
  <CardHeader>
    <div className="flex flex-row">
    <CardTitle className="text-[2.5rem]">02</CardTitle>
    <CardDescription className="text-white ml-6 top-1/2 bottom-1/2 mt-auto mb-auto capitalize text-wrap text-[1.3rem]"><span className="font-extrabold">eCommerce</span> Web Design & Development</CardDescription>
    </div> 
  </CardHeader>
  <CardContent className={(active === 'ecommerce' ? `h-[100px] `: "h-0 pb-0 ")+ 'overflow-hidden transition-all duration-300'}>
    <p>We create superior online shopping experiences to boost revenue and grow brand loyalty..</p>
  </CardContent>
   </Card>
   
      <Card onMouseOver={()=> {onHover('marketing')}} className='h-[200px] border-none bg-gradient-pink-light lg:h-[500px] w-full lg:w-1/3 flex flex-col justify-end  z-10 rounded-none text-white'>
  <CardHeader>
    <div className="flex flex-row">
    <CardTitle className="text-[2.5rem]">03</CardTitle>
    <CardDescription className="text-white ml-6 top-1/2 bottom-1/2 mt-auto mb-auto capitalize text-wrap text-[1.3rem]">Website Marketing</CardDescription>
    </div> 
  </CardHeader>
  <CardContent className={(active === 'marketing' ? `h-[100px] `: "h-0 pb-0 ")+ 'overflow-hidden transition-all duration-300'}>
    <p>We craft digital marketing initiatives to help you grow brand awareness and reach your target audience.</p>
  </CardContent>
   </Card>
   
    </div>
  )
}

export default Services