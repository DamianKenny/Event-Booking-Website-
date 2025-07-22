"use client";

import { Badge, Button, Card } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Event8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold">Discover</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              Events
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">
              Join us for exciting upcoming events in your area!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card className="flex flex-col items-start">
            <a href="#" className="relative block aspect-[3/2] w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover"
              />
              <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Fri</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  09
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <div className="flex flex-col items-start p-6">
              <Badge className="mb-3 md:mb-4">Music</Badge>
              <a href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Live Concert Night
                </h2>
              </a>
              <p className="mb-2">Downtown</p>
              <p>
                An unforgettable night featuring local bands and artists
                performing live.
              </p>
              <Button
                title="View event"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                View event
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col items-start">
            <a href="#" className="relative block aspect-[3/2] w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover"
              />
              <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Sat</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  10
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <div className="flex flex-col items-start p-6">
              <Badge className="mb-3 md:mb-4">Art</Badge>
              <a href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Art Gallery Opening
                </h2>
              </a>
              <p className="mb-2">Uptown</p>
              <p>
                Explore stunning artworks from emerging artists at our new
                gallery.
              </p>
              <Button
                title="View event"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                View event
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col items-start">
            <a href="#" className="relative block aspect-[3/2] w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full object-cover"
              />
              <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Sun</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  11
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <div className="flex flex-col items-start p-6">
              <Badge className="mb-3 md:mb-4">Theater</Badge>
              <a href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Shakespeare in the Park
                </h2>
              </a>
              <p className="mb-2">Central</p>
              <p>
                Enjoy a classic play under the stars with friends and family.
              </p>
              <Button
                title="View event"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                View event
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button variant="secondary" size="primary" title="View all">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
