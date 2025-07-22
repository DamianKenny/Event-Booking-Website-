"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your questions about browsing and booking events
            easily.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to browse events?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To browse events, simply navigate to the events section on our
              website. You can view all available events and filter them based
              on your preferences. Use the search bar to find specific events
              quickly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to book tickets?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Booking tickets is easy! After selecting an event, click on the
              'Book Now' button. Log in to your account, choose your ticket
              type, and complete the payment to secure your spot.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I host events?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can host your own events! Simply navigate to the 'Host
              Event' section, fill in the required details, and submit your
              event for approval. Once approved, it will be listed for others to
              see.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if I need help?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              If you have any questions or need assistance, our support team is
              here to help. You can reach out via the contact form or email us
              directly. We aim to respond promptly to all inquiries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to cancel booking?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To cancel a booking, log into your account and navigate to your
              bookings. Select the event you wish to cancel and follow the
              prompts to complete the cancellation process. Ensure you check our
              cancellation policy for any applicable fees.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help you!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
