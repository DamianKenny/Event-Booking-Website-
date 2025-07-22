"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq11() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              FAQs
            </h2>
            <p className="md:text-md">
              Find answers to your questions about browsing and booking events
              on EventBooker.
            </p>
          </div>
        </div>
        <Accordion
          type="multiple"
          className="grid w-full grid-cols-1 items-start gap-x-8 gap-y-4 md:grid-cols-2"
        >
          <Card>
            <AccordionItem
              value="item-faq11_accordion"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                How to browse events?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                To browse events, simply visit the Events section on our
                website. You can filter events by date, location, and category.
                Use the search bar for specific events.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-2"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                How to book tickets?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Booking tickets is easy! Once you find an event, click on it for
                details. If you're logged in, you can select your tickets and
                complete the purchase.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-3"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Can I create events?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes, you can create your own events on EventBooker! Just log in
                to your account and navigate to the 'Host an Event' section.
                Fill in the required details, and your event will be added.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-4"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                What if I need help?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                If you need assistance, visit our Help Center for resources. You
                can also reach out to our support team through the Contact page.
                We're here to help!
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-5"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                How to update events?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                To update your event, go to your dashboard and select the event
                you wish to modify. Make your changes and save them. Your
                updates will be reflected immediately.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-6"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Can I cancel bookings?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes, you can cancel your bookings. Simply go to your booking
                details and select the option to cancel. Please note that
                cancellation policies may apply.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-7"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Is there a fee?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                EventBooker may charge a small service fee for ticket purchases.
                This fee helps us maintain the platform and provide quality
                service. You will see the fee during checkout.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-8"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                How to delete account?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                To delete your account, go to your account settings. Select the
                option to delete your account and follow the prompts. Please be
                aware that this action is irreversible.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-9"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                Can I view attendees?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes, you can view the list of attendees for any event you are
                hosting. This information is available in your event management
                dashboard. It helps you keep track of your guests.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem
              value="item-faq11_accordion-10"
              className="border-none px-5 md:px-6"
            >
              <AccordionTrigger
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
              >
                What events can I find?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                You can find a wide range of events, including concerts,
                workshops, and community gatherings. Use the filters to narrow
                down your search. There's something for everyone!
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            We're here to help you with any inquiries!
          </p>
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
