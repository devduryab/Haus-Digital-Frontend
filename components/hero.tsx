import { heroContent } from "@/constants/nav-links-data";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => (
  <section
    className="relative min-h-screen flex items-center justify-center bg-black text-white w-full"
    aria-labelledby="hero-heading"
  >
    <div className="absolute inset-0">
      <Image
        src="/banner.png"
        alt="A vibrant banner background image"
        fill
        priority
        className="object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
        <h1
          id="hero-heading"
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight"
        >
          {heroContent.title}
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-center leading-relaxed">
          {heroContent.subtitle}
        </p>

        <p className="max-w-3xl text-base md:text-lg text-gray-300 text-center leading-relaxed px-4">
          {heroContent.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition-colors duration-200"
          >
            {heroContent.primaryCTA}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-purple-500 text-white hover:bg-purple-500/10 px-8 py-3 rounded-xl transition-colors duration-200"
          >
            {heroContent.secondaryCTA}
          </Button>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl text-center pt-6 md:pt-8">
          <span className="text-purple-400">
            {heroContent.distributionText.highlight}
          </span>{" "}
          <span>{heroContent.distributionText.regular}</span>
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
