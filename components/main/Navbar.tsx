"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { RiCloseLargeFill, RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className="flex items-center justify-between py-[2%]">
      <Link
        href={"/"}
        className="bg-gradient-to-r from-zinc-100 to-zinc-600 text-transparent bg-clip-text text-2xl transition hover:opacity-75 font-semibold uppercase"
      >
        PrimeCraft
      </Link>
      <nav className="lg:block hidden py-3 px-5 border border-zinc-500 rounded-full">
        <ul className="flex items-center gap-10">
          <li className="transition hover:opacity-75 font-medium text-md">
            <Link href={"#about"}>About</Link>
          </li>
          <li className="transition hover:opacity-75 font-medium text-md">
            <Link href={"#work"}>Our Work</Link>
          </li>
          <li className="transition hover:opacity-75 font-medium text-md">
            <Link href={"#offers"}>Offers</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <Link className="lg:block hidden" href={"#offers"}>
          <Button variant={"outline"} className="rounded-full text-zinc-900">
            Get Your Website
          </Button>
        </Link>
        <Button
          onClick={() => setOpenNav(!openNav)}
          className="relative lg:hidden block text-zinc-900"
          variant={"outline"}
        >
          {openNav ? <RiCloseLargeFill size={25} /> : <RiMenu3Fill size={25} />}
        </Button>
      </div>
      {/* Mobile Nav */}
      <nav
        className={`absolute ${
          openNav ? "top-16" : "-top-full"
        } right-10 bg-zinc-700 lg:hidden flex flex-col gap-7 py-3 px-5 border border-zinc-500 rounded-lg transition-all duration-200`}
      >
        <ul className="flex flex-col items-center gap-10">
          <li className="transition hover:opacity-75 font-medium text-md">
            <Link href={"#about"}>About</Link>
          </li>
          <li className="transition hover:opacity-75 font-medium text-md">
            <Link href={"#work"}>Our Work</Link>
          </li>
          <li className="transition hover:opacity-75 font-medium text-md">
            <Link href={"#offers"}>Offers</Link>
          </li>
        </ul>
        <Link className="" href={"#offers"}>
          <Button variant={"outline"} className="rounded-lg text-zinc-900">
            Get Your Website
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
