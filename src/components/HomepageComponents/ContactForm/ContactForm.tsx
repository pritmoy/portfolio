// app/contact/page.tsx or wherever you want
"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MainContainer from "@/components/shared/Container/MainContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function ContactFormSection() {
  return (
    <div className="w-full">
      <MainContainer>
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left Side */}
          <div className="w-full md:w-1/2 px-6 md:px-16 py-12 space-y-6">
            <h1 className="text-4xl font-bold leading-snug">
              Have any{" "}
              <span className="relative inline-block">
                <span className="z-10 relative text-primary">Thought</span>
              </span>
              <br />
              Find here.
            </h1>

            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full border-t"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex items-center gap-3 py-5 font-medium">
                  <div className="bg-black text-white rounded-full flex items-center gap-3 justify-center font-bold">
                    01
                    <span className="">Get an project overview</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9 text-sm pb-6">
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    urna, elementum turpis.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="flex items-center gap-3 py-5 font-medium">
                  <div className="text-sm font-bold flex items-center gap-3">
                    02 <span className="">Task monitoring at a glance</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9 text-sm pb-6">
                  Placeholder content for item 2.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="flex items-center gap-3 py-5 font-medium">
                  <div className="text-sm font-bold flex items-center gap-3">
                    03 <span className="">Weekly Project</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9 text-sm pb-6">
                  Placeholder content for item 3.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 px-6 md:px-16 py-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">
                  First Name
                </label>
                <Input placeholder="Max" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Last Name*
                </label>
                <Input placeholder="Mustermann" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  E-mail*
                </label>
                <Input placeholder="max.mustermann@mail.de" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Telephone*
                </label>
                <Input placeholder="+49 123456789" />
              </div>
              <div className="col-span-2">
                <label className="block mb-1 text-sm font-medium">
                  Description*
                </label>
                <Textarea
                  placeholder="Hier text einfügen"
                  className="min-h-[120px]"
                />
              </div>
              <div className="col-span-2">
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
                >
                  Send now!
                </Button>
              </div>
            </form>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
