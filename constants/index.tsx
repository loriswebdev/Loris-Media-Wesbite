import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faBriefcase,
    faPhone,
    faAddressCard
  } from "@fortawesome/free-solid-svg-icons";

 
export const navLinks =[ 
    {
        label: 'Home',
        route: '/',
        icon: <FontAwesomeIcon icon={faHouse} />
    },
    {
        label: 'Portfolio',
        route: '/portfolio',
        icon:  <FontAwesomeIcon icon={faBriefcase} />,
    },
    { 
        label: 'About',
        route: '/about',
        icon:  <FontAwesomeIcon icon={faAddressCard} />,
    },
    {
        label: 'Contact Us',
        route: '/contact-us',
        icon:  <FontAwesomeIcon icon={faPhone} />,
    }
]
export const homeData = {
    main:{
        bgImgUrl: 'home_bg_image.jpg'

    }


}
export const examples =[
    {   
        background:'bg-gradient-purple-pink',
        title: 'Refacciones Para Sillas',
        content: "We are proud to have had the opportunity to work with Refacciones Para Sillas. This e-commerce store is simple and easily navigable. At Loris Media, we take pride in helping our clients make profits and grow their businesses. This store was built with Shopify.",
        linkUrl: 'refaccionesparasillas.com',
        imgUrl:'/images/example_sillas.png',
        alt:'refacciones para silla homepage',  
      },
      {
        background:'bg-gradient-purple-dark',
        title: 'Germen',
        content: "We are proud to have had the opportunity to work with Germen in developing their company website. From design to backend, we are here to provide professional quality service. We support Germen's efforts for a more environmentally sustainable world. This website was built using Shopify.",
        linkUrl: 'germen.com.mx',
      imgUrl:'/images/example_germen.png',
      alt:'Gremen.com.mx homepage',  
    },
{
    background:'bg-gradient-pink-neon',
    title: 'Kenworth Motors',
    content: "This is a dynamic survey we designed and built for Kenworth Motors. The purpose was to store and update the user's selections on the fly. The final page is a specification sheet with all the user's choices. Try it out yourself! This survey also updates truck models and colors based on the user's selections.",
    linkLabel:'kenworthmotors.com',
    linkUrl: 'loriswebdev.github.io/configurador/',
  imgUrl:'/images/example_kenworth.png',
  alt:'Kenworth motor dynamic survey',  
},


]

export const projects = [

]