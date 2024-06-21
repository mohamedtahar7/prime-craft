import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      className="flex border-b border-zinc-700 flex-col gap-5 py-[7%]"
      id="hero"
    >
      <h1 className="text-center text-6xl leading-[5rem] font-medium">
        A better way to build your <br />{" "}
        <span className="bg-gradient-to-b from-zinc-600 to-zinc-100 text-transparent bg-clip-text">
          website
        </span>
      </h1>
      <p className="text-center text-xl leading-9 text-zinc-400 font-normal">
        Crafting stunning, responsive websites that elevate your brand <br />{" "}
        and engage your audience. Partner with us to <br /> bring your vision
        into reality.
      </p>
      <div className="flex items-center justify-center gap-4 text-zinc-900">
        <Link href="#offers" className="">
          <Button variant={"outline"} className="rounded-full">
            Get Started
          </Button>
        </Link>
        <Link href="#work" className="">
          <Button className="rounded-full border border-zinc-100 transition hover:bg-zinc-800">
            Check Our Work
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
