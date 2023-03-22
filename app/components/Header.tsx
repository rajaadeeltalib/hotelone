"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import LogoWhite from "../../public/logo-white.svg";
import LogoDark from "../../public/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* logo */}
        <Link href="/">
          {header ? (
            <Image className="w-[160px]" src={LogoDark} alt="Logo Dark" />
          ) : (
            <Image className="w-[160px]" src={LogoWhite} alt="Logo White" />
          )}
        </Link>
        {/* nav */}
        <nav className={`${header ? "text-primary" : "text-white"} flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
        <Link className="hover:text-accent transition" href="/">Home</Link>
        <Link className="hover:text-accent transition" href="/">Rooms</Link>
        <Link className="hover:text-accent transition" href="/">Restaurant</Link>
        <Link className="hover:text-accent transition" href="/">Spa</Link>
        <Link className="hover:text-accent transition" href="/">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
