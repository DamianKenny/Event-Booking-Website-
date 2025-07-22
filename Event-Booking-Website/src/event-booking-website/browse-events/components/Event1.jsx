"use client";

import { Badge, Button, Card } from "@relume_io/relume-ui";
import React from "react";

export function Event1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Discover</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Events
            </h1>
            <p className="md:text-md">
              Explore a diverse range of events happening near you. Don't miss
              out on the fun!
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="mb-12 ml-[-5vw] flex no-scrollbar w-screen items-center overflow-auto pl-[5vw] md:ml-0 md:w-full md:overflow-hidden md:pl-0">
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
              title="Conferences"
              size="sm"
              className="border px-4 border-transparent"
            >
              Conferences
            </Button>
          </div>
          <div className="grid grid-cols-1 items-center gap-4 overflow-hidden border-t border-border-primary py-6 last-of-type:border-b md:grid-cols-[max-content_1fr_max-content] md:gap-8 md:py-8">
            <Card className="flex min-w-28 flex-col items-center px-1 py-3 text-base">
              <span>Fri</span>
              <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                09
              </span>
              <span>Feb 2024</span>
            </Card>
            <div className="flex w-full flex-col items-start justify-start">
              <div className="mb-2 flex flex-wrap items-center gap-2 sm:mb-0 sm:gap-4">
                <a href="#">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Live Music Night
                  </h2>
                </a>
                <Badge>Sold out</Badge>
              </div>
              <p className="mb-3 text-sm md:mb-4">Venue</p>
              <p>Downtown Music Hall, 123 Main St, Cityville</p>
            </div>
            <div className="flex">
              <Button
                variant="secondary"
                size="sm"
                title="Save my spot"
                className="flex items-center justify-center"
              >
                Save my spot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
