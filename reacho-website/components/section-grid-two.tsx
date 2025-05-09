import React from "react";
import Section from "./section";

export default function SectionGridTwo() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 lg:py-40 px-4">
        <div className="container space-y-10 md:space-y-20 lg:space-y-[120px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Accelerate growth with powerful tools for seamless marketing and
              support management
            </h2>
            <p className="mt-6 lg:mt-10 text-gray-500 text-lg">
              Dive into a world of possibilities with Reacho's versatile
              marketing and support tools and connect with your audience
              effortlessly.
            </p>
          </div>
          <div
            id="featured-cards"
            className="grid gap-10 sm:grid-cols-2 sm:gap-4 lg:gap-10"
          >
            <a
              className="group flex flex-col justify-between relative lg:aspect-[580/790] rounded-lg overflow-hidden gap-2 md:gap-0 bg-[#e1e7f9]"
              href="#"
            >
              <div className="px-8 pt-8 lg:px-10 lg:pt-10">
                <p className="text-xl mb-5 text-gray-800/80 font-light md:mb-9">
                  Bill Pay
                </p>
                <h3 className="text-3xl font-bold text-gray-900">
                  Pay bills like a pro
                </h3>
                <div className="text-lg font-light mt-5 text-gray-900">
                  <p>
                    Hopscotch Bill Pay offers smart automations, flexible
                    payment methods, and an interface that’s easy on the eyes.
                  </p>
                </div>
              </div>
              <div className="relative flex aspect-[580/500]">
                <img
                  alt="Man clicking paid button (160x1000)"
                  src="https://gohopscotch.com/_next/image/?url=https%3A%2F%2Fhopscotchwp.wpengine.com%2Fwp-content%2Fuploads%2F2023%2F03%2FFrame-13494.png&w=3840&q=75"
                  width="1160"
                  height="1000"
                  className="mx-auto w-[80%] md:aspect-[580/500]  md:w-full lg:max-w-[500px] opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-8 left-8 self-start lg:bottom-12 lg:left-12">
                <div className="overflow-hidden rounded-lg">
                  <div
                    id="button"
                    className="
		button-class
		 font-medium inline-flex shrink-0 items-center justify-center text-center relative focus:outline-none transition-all group overflow-hidden bg-black text-white hover:bg-[#1c2643] text-base tracking-[0.01em] px-5 lg:px-8 py-[15px]"
                  >
                    <div className="relative z-30">Learn more</div>
                  </div>
                </div>
              </div>
            </a>
            <a
              className="group flex flex-col justify-between relative lg:aspect-[580/790] rounded-lg overflow-hidden gap-2 md:gap-0 bg-[#f1e6fe]"
              href="#"
            >
              <div className="px-8 pt-8 lg:px-10 lg:pt-10">
                <p className="text-xl mb-5 text-gray-800/80 font-light md:mb-9">
                  Flow
                </p>
                <h3 className="text-3xl font-bold text-gray-900">
                  Click, click, cashflow
                </h3>
                <div className="text-lg font-light mt-5 text-gray-900">
                  <p>
                    Instantly unlock revenue tied up in outstanding invoices and
                    use it to grow your business.
                  </p>
                </div>
              </div>
              <div className="relative flex aspect-[580/500]">
                <img
                  alt="Woman riding a wave"
                  src="https://gohopscotch.com/_next/image/?url=https%3A%2F%2Fhopscotchwp.wpengine.com%2Fwp-content%2Fuploads%2F2023%2F03%2Fillos.png&w=3840&q=75"
                  width="1160"
                  height="1000"
                  className="mx-auto w-[80%] md:aspect-[580/500]  md:w-full lg:max-w-[500px] opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-8 left-8 self-start lg:bottom-12 lg:left-12">
                <div className="overflow-hidden rounded-lg">
                  <div
                    id="button"
                    className="
		button-class
		 font-medium inline-flex shrink-0 items-center justify-center text-center relative focus:outline-none transition-all group overflow-hidden bg-black text-white hover:bg-[#352145] text-base tracking-[0.01em] px-5 lg:px-8 py-[15px]"
                  >
                    <div className="relative z-30">Learn more</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
