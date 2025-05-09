"use client";
import { useState } from "react";
import Clients from "../components/clients";
import Awards from "../components/awards";
import Services from "../components/services";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Example() {
  return (
    <>
      <Navbar />
      <div className="bg-white relative isolate overflow-hidden bg-gradient-blend1">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          ></rect>
        </svg>

        <div className="relative isolate pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-18 sm:py-20 lg:pb-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-7xl text-center">
                <h1 className="text-4xl sm:leading-tight font-bold tracking-tight text-gray-900 sm:text-7xl from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                  Engage Shoppers. Enhance Support. eCommerce Simplified.
                </h1>
                <p className="mx-auto max-w-4xl mt-6 text-xl leading-8 text-gray-600">
                  Engage and connect with your customers like never before using
                  our comprehensive suite of marketing and support tools. From
                  email to SMS, Chat and Helpdesk, Reacho simplifies customer
                  interaction across multiple channels
                </p>

                <form className="max-w-xl mx-auto mt-14 mb-10">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative p-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-full">
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-5 pr-40 ps-6 text-base text-gray-900 rounded-full bg-white outline-none"
                      placeholder="Your email address"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-3 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-normal rounded-full text-base px-6 py-3"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <div className="flex items-center justify-center flex-wrap gap-6">
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle-fill text-gray-600"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    <span className="text-gray-600">
                      Try it free for 30 Days.
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle-fill text-gray-600"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    <span className="text-gray-600">
                      No credit card required.
                    </span>
                  </span>
                </div>
              </div>
              <div className="mt-10 flow-root">
                <div className="-mt-6 lg:p-4">
                  <img
                    src="/assets/images/hero.png"
                    alt="Hero"
                    width={802}
                    height={502}
                    className="p-0 m-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div> */}
        </div>

        <Clients />
      </div>
      <Awards />

      <Services />

      <section className="bg-stone-50 py-28">
        <section className="mt-0">
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="space-y-6 md:flex lg:items-center lg:gap-6 lg:space-y-0">
              <div className="md:5/12 lg:w-6/12">
                <img
                  className="md:-ml-8"
                  src="/assets/images/stats-login.webp"
                  alt="tailus stats and login components"
                  loading="lazy"
                  width="1779"
                  height="1592"
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
                  Empower Your Marketing with Complete Customer Understanding
                </h2>
                <p className="mt-8 text-gray-600 dark:text-gray-300">
                  Gain a deep understanding of your customers with comprehensive
                  profiles that detail every interaction—past, present, and
                  future.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="space-y-6 md:flex lg:items-center lg:gap-6 lg:space-y-0">
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
                  Elevate Your Customer Support with Smart Tools
                </h2>
                <p className="mt-8 text-gray-600 dark:text-gray-300">
                  Deliver exceptional customer service by leveraging detailed
                  insights from comprehensive profiles that track every
                  interaction
                </p>
              </div>
              <div className="md:5/12 lg:w-6/12">
                <img
                  className="md:-ml-8"
                  src="/assets/images/convert-your-emails-to-tasks.svg"
                  alt="image"
                  loading="lazy"
                  width="1779"
                  height="1592"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="space-y-6 md:flex lg:items-center lg:gap-6 lg:space-y-0">
              <div className="md:5/12 lg:w-6/12">
                <img
                  className="md:-ml-8"
                  src="/assets/images/stats-login.webp"
                  alt="image"
                  loading="lazy"
                  width="1779"
                  height="1592"
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
                  Designed for Every Business
                </h2>
                <p className="mt-8 text-gray-600 dark:text-gray-300">
                  Whether you're a budding entrepreneur or a large enterprise,
                  Reacho's scalable marketing and support solutions adapt to
                  meet your needs. Grow your audience, enhance customer lifetime
                  value, and increase your overall sales effortlessly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
