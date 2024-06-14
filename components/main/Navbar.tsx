import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-[2%]">
      <Link
        href={"/"}
        className="bg-gradient-to-r from-zinc-100 to-zinc-600 text-transparent bg-clip-text text-2xl transition hover:opacity-75 font-semibold uppercase"
      >
        PrimeCraft
      </Link>
      <nav className="py-3 px-5 border border-zinc-500 rounded-full">
        <ul className="flex items-center gap-5">
          <li className="transition hover:opacity-75 font-medium text-md">
            <Link href={"#about"}>About</Link>
          </li>
          <li className="transition hover:opacity-75 font-medium text-md">
            <Link href={"#about"}>Our Work</Link>
          </li>
          <li className="transition hover:opacity-75 font-medium text-md">
            <Link href={"#about"}>Testimonials</Link>
          </li>
          <li className="transition hover:opacity-75 font-medium text-md">
            <Link href={"#about"}>Offers</Link>
          </li>
        </ul>
      </nav>
      <Link href={"#offers"}>
        <Button variant={"outline"} className="rounded-full text-zinc-900">
          Get Your Website
        </Button>
      </Link>
    </header>
  );
};

export default Navbar;
