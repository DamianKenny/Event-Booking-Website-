"use client";

import React from "react";

export function Header49() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Your Account
            </h1>
          </div>
          <div>
            <p className="md:text-md">
              Easily manage your account and keep track of your event
              activities. Access your bookings, update your profile, and stay
              informed about upcoming events all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
