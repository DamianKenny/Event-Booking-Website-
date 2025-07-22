"use client";

import { Badge, Button, Card } from "@relume_io/relume-ui";
import React from "react";

export function Event4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto flex w-full max-w-lg flex-col">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h4 className="font-semibold">Exciting</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              Events
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">
              Discover a variety of upcoming events that cater to all interests
              and preferences.
            </p>
          </div>
          <div className="flex flex-col justify-start">
            <div className="mb-12 flex no-scrollbar w-full items-center overflow-auto md:justify-center md:overflow-hidden">
              <Button
                variant="secondary"
                title="View all"
                size="sm"
                className="border px-4"
              >
                View all
              </Button>
              <Button
                variant="link"
                title="Music Events"
                size="sm"
                className="border px-4 border-transparent"
              >
                Music Events
              </Button>
              <Button
                variant="link"
                title="Art Exhibitions"
                size="sm"
                className="border px-4 border-transparent"
              >
                Art Exhibitions
              </Button>
              <Button
                variant="link"
                title="Workshops"
                size="sm"
                className="border px-4 border-transparent"
              >
                Workshops
              </Button>
              <Button
                variant="link"
                title="Networking Events"
                size="sm"
                className="border px-4 border-transparent"
              >
                Networking Events
              </Button>
            </div>
            <div className="flex flex-col gap-6 md:gap-8">
              <Card className="flex flex-col md:flex-row">
                <div className="relative aspect-[3/2] w-full shrink-0 md:aspect-auto md:w-48 lg:aspect-square">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="absolute size-full object-cover"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-8 p-6 sm:p-8 lg:flex-row lg:items-center">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2 sm:mb-0 sm:gap-4">
                      <a href="#">
                        <h2 className="text-xl font-bold md:text-2xl">
                          Live Music Night
                        </h2>
                      </a>
                      <Badge>Sold out</Badge>
                    </div>
                    <div className="mb-3 flex items-center text-sm md:mb-4">
                      <span>Fri 09 Feb 2024</span>
                      <span className="mx-2 text-base">•</span>
                      <span>NYC</span>
                    </div>
                    <p>
                      Join us for an unforgettable night of music and
                      entertainment at the heart of NYC.
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    title="Save my spot"
                    className="flex items-center justify-center gap-x-2"
                  >
                    Save my spot
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
