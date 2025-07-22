"use client";

import { Badge, Button, Card } from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

export function Event6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto flex w-full max-w-lg flex-col">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Events</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Webinars
            </h1>
            <p className="md:text-md">
              Explore our diverse range of upcoming webinars and events tailored
              for every interest and need.
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
                title="Business Talks"
                size="sm"
                className="border px-4 border-transparent"
              >
                Business Talks
              </Button>
              <Button
                variant="link"
                title="Creative Workshops"
                size="sm"
                className="border px-4 border-transparent"
              >
                Creative Workshops
              </Button>
              <Button
                variant="link"
                title="Tech Seminars"
                size="sm"
                className="border px-4 border-transparent"
              >
                Tech Seminars
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
              <Card className="grid grid-cols-[1fr_max-content] place-items-center gap-8 overflow-hidden p-6 md:p-8">
                <div className="flex w-full flex-col items-start justify-start">
                  <div className="mb-3 flex flex-wrap items-center gap-4 md:mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MdAccessTime className="size-6 flex-none" />
                      <span>45 minutes</span>
                    </div>
                    <Badge>Coming soon</Badge>
                  </div>
                  <a href="#" className="mb-3 md:mb-4">
                    <h2 className="text-xl font-bold md:text-2xl">
                      Future of Work
                    </h2>
                  </a>
                  <p>
                    Join us for an insightful discussion on the evolving
                    landscape of remote work.
                  </p>
                </div>
                <Button variant="link" size="link" className="flex">
                  <FaCirclePlay className="block text-8xl" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
