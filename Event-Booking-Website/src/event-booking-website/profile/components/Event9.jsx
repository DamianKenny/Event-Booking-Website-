"use client";

import { Badge, Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Event9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Your</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              Events
            </h1>
            <p className="md:text-md">
              Here are the events you've hosted or booked.
            </p>
          </div>
          <Button
            variant="secondary"
            size="primary"
            title="View all"
            className="hidden md:flex"
          >
            View all
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full rounded-image object-cover"
              />
              <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Fri</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  09
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4">Music</Badge>
            <a href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Live Music Night
              </h2>
            </a>
            <p className="mb-2">Downtown</p>
            <p>
              Join us for an unforgettable evening of live performances and
              great company.
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
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full rounded-image object-cover"
              />
              <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Sat</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  10
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4">Art</Badge>
            <a href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Art Exhibition Gala
              </h2>
            </a>
            <p className="mb-2">Gallery</p>
            <p>
              Explore stunning artworks from local artists at this exclusive
              exhibition.
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
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="relative mb-5 block aspect-[3/2] w-full md:mb-6"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute size-full rounded-image object-cover"
              />
              <div className="absolute top-4 right-4 flex min-w-28 flex-col items-center bg-background-primary px-1 py-3 text-sm">
                <span>Sun</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  11
                </span>
                <span>Feb 2024</span>
              </div>
            </a>
            <Badge className="mb-3 md:mb-4">Food</Badge>
            <a href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Culinary Festival
              </h2>
            </a>
            <p className="mb-2">Park</p>
            <p>
              Taste delicious dishes from renowned chefs and local food vendors.
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
        </div>
        <div className="mt-12 flex justify-end md:mt-14 md:hidden">
          <Button variant="secondary" size="primary" title="View all">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
