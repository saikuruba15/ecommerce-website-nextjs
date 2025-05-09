import React from "react";

export default function HomeCta() {
  return (
    <div className="fancy-short-banner-twelve overflow-hidden relative z-[1] py-14 lg:py-24 bg-[#fff4e9]">
      <div className="container">
        <div className="flex flex-wrap">
          <div
            className="xl:w-10/12 xl:basis-10/12 lg:w-11/12 lg:basis-11/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-[15px] m-auto aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="title-style-ten text-center">
              <h2 className="section-title1 md:text-[40px] text-[2rem] lg:text-[58px] font-semibold leading-[1.2em]">
                Free migration, free setup.
              </h2>
              <p className="section-description pt-[25px] pb-8 sm:pb-[45px]">
                Don’t worry about moving from any other platform. We’ll take
                care of it for you.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-dealy="150">
          <div className="search-filter-form">
            <form
              action="https://app.reacho.com/signup"
              className="max-w-[670px] h-[56px] lg:h-[70px]  relative shadow-[0_30px_50px_rgba(7,21,36,0.12)] m-[0_auto] rounded-xl bg-white md:h-[70px] sm:h-[65px] xsm:h-[65px]"
            >
              <input
                type="text"
                placeholder="Your email address"
                className="w-full h-full text-sm lg:text-base font-light p-[0_118px_0_15px] lg:p-[0_200px_0_25px] sm:p-[0_180px_0_15px] xsm:p-[0_180px_0_15px] rounded-xl border-none focus:!ring-0 focus:!border-[none] focus:outline-none"
              />
              <button className="flex items-center justify-center px-3 sm:px-4 md:px-0 lg:px-0 text-tiny lg:text-sm md:w-[150px] absolute transition-all duration-[0.3s] ease-in-out rounded-xl right-[4px] inset-y-[4px] md:right-[8px] md:inset-y-[8px] text-white font-medium bg-red-500 hover:bg-black">
                Get Started
              </button>
            </form>
          </div>

          <div className="pt-7 flex items-center justify-center whitespace-nowrap gap-y-3 sm:gap-y-0 gap-x-2 sm:gap-x-4 md:gap-x-10 text-white text-sm sm:text-base">
            <span className="flex items-center gap-1 sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <span className="text-gray-900"> Free forever</span>
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <span className="text-gray-900">No credit card required</span>
            </span>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/shape/cta_1.svg"
        alt="cta_1"
        className="shapes shape-one  absolute z-[-1] h-full right-0 bottom-0 opacity-[0.4] md:opacity-100"
      />
      <img
        src="/assets/images/shape/cta_2.svg"
        alt="cta_2"
        className="shapes shape-two absolute z-[-1] -translate-y-2/4 left-0 top-2/4 opacity-[0.4] md:opacity-100"
      />
    </div>
  );
}
