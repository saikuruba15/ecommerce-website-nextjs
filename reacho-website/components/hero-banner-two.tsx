import React from "react";

interface HeroBannerTwoProps {
  data?: { "main-heading": string, "sub-heading": string, "dashboard-image-url": { src: string, className: string } }
}

export default function HeroBannerTwo({ data }: HeroBannerTwoProps) {
  return (
    <>
      <section className="hero-banner-two">
        <div className="container-fluid relative px-4 md:pt-6 pb-40 xl:pb-96 lg:pb-96 md:pb-60 !text-center">
          <div className=" flex flex-wrap mx-[-15px]">
            <div
              className="m-auto
						xl:w-11/12 xl:basis-11/12
						lg:w-11/12 lg:basis-11/12
						md:w-8/12 md:basis-6/82
						 sm:w-full sm:basis-full
						 xsm:w-full xsm:basis-full
						relative px-[15px]"
            >
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                className="font-bold text-4xl lg:text-[78px] lg:leading-[1.15em] text-center
						md:text-[55px] md:leading-[1.25em]
						sm:text-[55px] sm:leading-[1.18em]
						xsm:text-[55px] xsm:leading-[1.18em]
						"
              >
                {data?.["main-heading"] ? data?.["main-heading"] : <> All-in-One eCommerce Marketing &
                  Support Software </>}
              </h1>
            </div>
            <div
              className="m-auto
						xl:w-7/12 xl:basis-7/12
						lg:w-9/12 lg:basis-9/12
						md:w-full md:basis-full
						xsm:w-full xsm:basis-full
						relative px-[15px]"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p className="sub-text text-base lg:text-xl leading-[1.6em] text-center pt-8 lg:pt-14 pb-6 lg:pb-7 px-0">
                {data?.["sub-heading"] ? data?.["sub-heading"] :
                  <>
                    Create seamless eCommerce journeys that excite your customers,
                    with retention marketing solutions that work together
                    out-of-the-box.
                  </>
                }
              </p>

              <div className="mt-5">
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
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    <span>14-day free trial</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    <span>No credit card required</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Clients /> */}
      </section>

      <section className="relative bg-white">
        <div className="container pb-2 xl:pb-0 lg:pb- md:pb-10 lg:!mb-0">
          <div className="flex flex-wrap mx-0">
            <div
              // data-aos="fade-up"
              // data-aos-delay="150"
              className="dashbord-bg w-9/12 sm:w-10/12 lg:w-9/12 xl:w-full flex-[0_0_auto] max-w-full !mx-auto mt-[-5rem] xl:!-mt-80 lg:!mt-[-10rem] md:!mt-[-10rem] bg-[url('/assets/images/dashboard-bg.jpg')] rounded-xl sm:rounded-[30px] sm:mb-2 lg:mb-20 p-4 sm:p-12 bg-cover illustration"
            >
              <img
                src={data?.["dashboard-image-url"].src ? data?.["dashboard-image-url"].src : "/assets/images/dashboard.png"}
                alt=""
                className={data?.["dashboard-image-url"].className ? data?.["dashboard-image-url"].className : "max-w-full h-auto !mx-auto !rounded-[.4rem] !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
