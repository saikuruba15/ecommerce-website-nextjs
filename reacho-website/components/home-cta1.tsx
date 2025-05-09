import React from "react";

export default function HomeCta() {
  return (
    <div
      className="fancy-short-banner-twelve overflow-hidden relative z-[1] py-14 lg:pt-[135px] lg:pb-[115px] px-4 bg-[#fff4e9]
		md:p-[100px_0_80px]
		sm:p-[100px_0_80px]
		xsm:p-[100px_0_80px]
		"
    >
      <div className="container">
        <div className="flex flex-wrap mx-[-15px]">
          <div
            className="xl:w-10/12 xl:basis-10/12 lg:w-11/12 lg:basis-11/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-[15px] m-auto aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="title-style-ten text-center">
              <h2 className="md:text-[40px] text-3xl lg:text-[58px] font-semibold lg:leading-[1.2em]">
                Start your free trial now.
              </h2>
              <p className="pt-[25px] pb-[45px] lg:text-[22px] text-base lg:leading-[1.91em] text-black md:leading-[1.6em] leading-[1.6em] max-w-3xl mx-auto">
                Experience Reacho risk-free. Enjoy the benefits without worrying
                about cancellation fees.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-dealy="150">
          <div className="search-filter-form">
            <form
              action="#"
              className="max-w-[750px] h-[70px] relative shadow-[0_30px_50px_rgba(7,21,36,0.12)] m-[0_auto] rounded-xl bg-white md:h-[70px] sm:h-[65px] xsm:h-[65px]"
            >
              <input
                type="text"
                placeholder="Your email address"
                className="w-full h-full text-sm lg:text-base font-light p-[0_140px_0_15px] lg:p-[0_200px_0_35px] sm:p-[0_180px_0_15px] xsm:p-[0_180px_0_15px] rounded-xl border-none focus:!ring-0 focus:!border-[none] focus:outline-none"
              />
              <button className="flex items-center justify-center px-4 lg:px-0 text-sm lg:w-[185px] absolute transition-all duration-[0.3s] ease-in-out rounded-xl right-[10px] inset-y-[10px] text-white font-medium bg-red-500 hover:bg-black md:w-[160px] sm:w-[160px] xsm:w-[160px]">
                Get Started
              </button>
            </form>
          </div>

          <div className="pt-7 flex items-center justify-center flex-wrap gap-y-3 sm:gap-y-0 gap-x-4 sm:gap-x-10 text-white text-sm sm:text-base hidden">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle-fill text-gray-800"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <span className="text-gray-900">14-day free trial</span>
            </span>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle-fill text-gray-800"
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
        className="shapes shape-two absolute z-[-1]  -translate-y-2/4 left-0 top-2/4 opacity-[0.4] md:opacity-100"
      />
    </div>
  );
}
