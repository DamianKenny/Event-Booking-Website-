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
              Profile
            </h1>
            <p className="md:text-md">
              Here are the events you have booked tickets for and those you are
              hosting.
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
                title="Upcoming events"
                size="sm"
                className="border px-4 border-transparent"
              >
                Upcoming events
              </Button>
              <Button
                variant="link"
                title="Past events"
                size="sm"
                className="border px-4 border-transparent"
              >
                Past events
              </Button>
              <Button
                variant="link"
                title="Hosted events"
                size="sm"
                className="border px-4 border-transparent"
              >
                Hosted events
              </Button>
              <Button
                variant="link"
                title="Cancelled events"
                size="sm"
                className="border px-4 border-transparent"
              >
                Cancelled events
              </Button>
            </div>
            <div className="flex flex-col gap-6 md:gap-8">
              <Card className="grid grid-cols-[1fr_max-content] place-items-center gap-8 overflow-hidden p-6 md:p-8">
                <div className="flex w-full flex-col items-start justify-start">
                  <div className="mb-3 flex flex-wrap items-center gap-4 md:mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MdAccessTime className="size-6 flex-none" />
                      <span>1 hour</span>
                    </div>
                    <Badge>Available now</Badge>
                  </div>
                  <a href="#" className="mb-3 md:mb-4">
                    <h2 className="text-xl font-bold md:text-2xl">
                      Future Webinar Series
                    </h2>
                  </a>
                  <p>
                    Join us for insightful discussions and expert-led sessions
                    on trending topics.
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
