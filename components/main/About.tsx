import Image from "next/image";
import React from "react";
import aboutImg from "../../assets/about-1.png";
import Link from "next/link";
import { Button } from "../ui/button";
const About = () => {
  return (
    <section id="about" className="border-b border-zinc-700 py-[7%]">
      <div className="flex lg:flex-row flex-col items-center gap-12">
        <div className="flex text-center lg:text-start flex-col gap-5">
          <h1 className="text-lg font-semibold">About us</h1>
          <p className="text-lg leading-[2rem] text-zinc-300 font-normal">
            Welcome to PrimeCraft, where creativity and technology converge to
            craft exceptional digital experiences. We specialize in landing
            pages, e-commerce solutions, and custom web apps, collaborating
            closely with you to bring your vision to life effectively and
            beautifully.
          </p>
          <Link href="#work" className="text-zinc-900">
            <Button variant={"outline"} className="rounded-full">
              View Projects
            </Button>
          </Link>
        </div>
        <div>
          <Image
            className="rounded-3xl"
            src={aboutImg}
            alt="about image"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
