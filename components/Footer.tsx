"use client";
import React from "react";
import EmailInput from "./EmailInput";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { ContactForm } from "./ContactForm";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-gradient-blue-dark text-white">
      <EmailInput />
      {pathname === "/contact-us" && (
        <>
          <h2 className="mb-10 w-full text-center md:inline-block text-[1.75rem] md:text-[2.75rem] lg:text-[3.75rem] font-extrabold leading-[.9] mt-10">
            Start a conversation with us
          </h2>
        </>
      )}
      <div className="w-full pb-20 pl-5 pr-5 md:flex-row flex-col flex justify-center items-center md:justify-around">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-baseline md:w-fit ">
          {pathname !== "/contact-us" && (
            <Image
              src="/icons/LorisMediaLogo_white.png"
              width={300}
              height={156}
              alt="Loris Media Logo"
              className="lg:w-[400px]"
            />
          )}
          <div className="pl-[-33px] md:pl-[70px] mt-[-5px] w-fit">
            {pathname === "/contact-us" && (
              <>
                <h3 className="w-fit md:text-[1.5rem] text-center before:mt-[11px] text-[1.25rem] md:before:mt-[18px] lg:before:mt-[18px] lg:text-[1.75rem] tracking-wider items-start flex gap-2 before:h-[4px] lg:before:h-[5px] before:w-[20px] lg:before:w-[25px] before:relative before:inline-block before:bg-white">
                  <span>
                    <span className="font-extrabold">Contact us</span> on
                    <br /> WhatsApp
                  </span>
                </h3>
                <Link href="https://wa.me/525629997499" target="_blank">
                  <div className="ml-[33px] gap-5  flex justify-center w-[calc(100%-33px)] lg:[&_svg]:h-7 md:[&_svg]:h-5">
                    <Image
                      src="/icons/WhatsApp.svg.png"
                      alt="Whatsapp Logo"
                      width={75}
                      height={75}
                      className="md:h-[50px] md:w-[50px] lg:h-[75px] lg:w-[75px] h-[40px] w-[40px]"
                    />
                  </div>
                  <p className="text-center text-[1rem] md:text-[1.25rem] lg:text-[1.3rem] pb-[5px] ml-[21px] w-[calc(100%-21px) md:w-[calc(100%-28px) lg:w-[calc(100%-33px)] md:ml-[28px] lg:ml-[33px] mb-8 md:mb-24">
                    +52 56 2999 7499
                  </p>
                </Link>
              </>
            )}
            <h3 className="w-fit md:text-[1.5rem] lg:text-[1.75rem] tracking-wider items-center flex gap-2 before:h-[4px] lg:before:h-[5px] before:w-[20px] lg:before:w-[25px] before:relative before:inline-block text-[1.25rem] before:bg-white">
              <span className="font-extrabold">Follow us</span> on
            </h3>
            <div className="ml-[33px] gap-5  flex justify-center w-[calc(100%-33px)] lg:[&_svg]:h-7 md:[&_svg]:h-5 [&_svg]:h-6">
              {" "}
              <Link href="https://www.instagram.com/loriswebdev/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61561484251228" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="https://www.linkedin.com/in/loris-media-63865b2a3/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
          {pathname !== "/contact-us" && (
            <h2 className="md:text-left text-center md:inline-block text-[1.5rem] md:text-[3.75rem] lg:text-[5rem] md:pl-[70px] font-extrabold leading-[.9] mt-10">
              Start a<br className="hidden md:inline-block" /> conversation
              <br className="hidden md:inline-block" /> with us
            </h2>
          )}
        </div>
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;
