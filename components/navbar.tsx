"use client";
import React from "react";
import { NavLinks } from "@/constants/nav-links-data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="HD Music Digital"
              width={52}
              height={52}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Login
            </Button>
            <Button className="w-full bg-gradient-to-r from-[#2237DA] to-[#932CCE] text-white rounded-xl">
              Signup
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300">
                  <Menu className="h-16 w-16" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-black border-none"
              >
                {/* Add SheetHeader for Accessibility */}
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </SheetHeader>

                <Link href="/" className="flex items-center justify-center">
                  <div>
                    <Image
                      src="/Logo.png"
                      alt="HD Music Digital"
                      width={52}
                      height={52}
                    />
                  </div>
                </Link>
                <div className="flex flex-col items-center justify-center space-y-4 mt-8">
                  {NavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col space-y-4 pt-10">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white w-full"
                  >
                    Login
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-[#2237DA] to-[#932CCE] text-white rounded-xl">
                    Signup
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
