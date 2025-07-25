"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta13() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
            Delete Your Account
          </h1>
        </div>
        <div>
          <p className="md:text-md">
            We understand that sometimes it's necessary to take a step back. If
            you wish to delete your account, please proceed with the option
            below.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Delete">Delete</Button>
            <Button title="Cancel" variant="secondary">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
