import React from "react";
import Image from "next/image";
import "./styles/aboutus.styles.css";
import anim from "./Images/circle-anim.gif";
import Title from "./CommonComponent/Title/Title";
import cityscape from "./Images/cityscape-1.webp";

export const AboutUs = () => {
  return (
    <section className=" z-50 relative" id="about-us">
      <div className="about-section relative">
        <Image
          src={cityscape}
          fill
          className="object-cover sm:object-contain h-[50%] opacity-25 object-bottom"
        />
        <div className="header-sec ">
          <Title title={"About Us"} className={"px-5 sm:px-10 py-5"}></Title>
          <hr className="line-hr" />
        </div>
        <div className="aboutus flex flex-col md:flex-row px-10 py-20	text-justify justify-between items-center	 ">
          <div className="logo-container w-[219px] aspect-square grid place-items-center md:w-[624px] relative md:self-start">
            <Image
              src={"/Images/HO3.svg"}
              width={80}
              height={80}
              className="hacklogo max-w-[50%]"
              alt="hackodisha-logo"
            />
            <Image
              src={anim}
              fill
              className="relative -z-10 mix-blend-lighten opacity-20"
              alt="hackodisha-logo-animation"
            />
          </div>
          <div className="para-container w-[333px] md:w-[841px] md:px-8 ">
            <p className="paras">
              {" "}
              HackOdisha- a thrilling{" "}
              <span className="pink-span">36-hour online hackathon</span>{" "}
              organized by{" "}
              <span className="pink-span">Webwiz, Nit Rourkela</span>— an event
              dedicated to fostering community collaboration. With an impressive
              turnout of{" "}
              <span className="pink-span"> 3100 + participants in HackOdisha 2.0 </span> &{" "}
              <span className="pink-span">
                1600 + participants in HackOdisha 1.0{" "}
              </span>
              across India, this hackathon promises to be a platform where
              innovation knows no bounds.{" "}
            </p>

            <p className="paras">
              {" "}
              Here, we witness groundbreaking projects spanning many fields,
              including healthcare, education, environment, women&apos;s
              security, and much more. Our participants bring their unique
              perspectives and expertise to address real-world challenges in
              these critical areas.{" "}
            </p>

            <p className="paras">
              {" "}
              We celebrate the power of technology and the indomitable spirit of
              our participants. Together, we&apos;re shaping a brighter future
              through innovation and collaboration.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
