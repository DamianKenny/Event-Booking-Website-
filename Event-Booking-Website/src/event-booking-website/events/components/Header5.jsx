"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header5() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              Unleash Your Passion for Live Events
            </h1>
            <p className="text-text-alternative md:text-md">
              Dive into a world of entertainment with our diverse range of
              events. Whether you're looking to attend or host, there's
              something for everyone!
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Explore">Explore</Button>
              <Button title="Join" variant="secondary-alt">
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
