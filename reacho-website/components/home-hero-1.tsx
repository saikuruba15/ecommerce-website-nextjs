import React from "react";

export default function HomeHeroOne() {
  return (
    <section className="pt-12">
      <div className="hero-banner-three relative xl:p-[40px_0_0] lg:p-[40px_0_0] before:content-[''] before:bg-[url(https://deski-tailwindcss.ibthemespro.com/images/shape/67.svg)] before:absolute before:w-full before:h-[83%] before:bg-cover before:bg-no-repeat before:bg-[center_top] before:z-[-1] before:left-0 before:right-0 before:bottom-[78px]">
        <div className="container px-0 mx-auto">
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
                className="font-bold !text-[100px] leading-[1.05em] text-center
						md:text-[55px] md:leading-[1.18em]
						sm:text-[55px] sm:leading-[1.18em]
						xsm:text-[55px] xsm:leading-[1.18em]
						"
              >
                Engage, support, eCommerce.
                {/* Doc software you looking
                  for. */}
              </h1>
            </div>
            <div
              className="m-auto
						xl:w-8/12 xl:basis-8/12
						lg:w-9/12 lg:basis-9/12
						md:w-full md:basis-full
						xsm:w-full xsm:basis-full
						relative px-[15px]"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p
                className="sub-text text-[28px] leading-[1.39em] font-light text-[#2A2A2A] text-center pt-[25px] pb-[45px] px-0
							 md:pb-10 sm:pb-10 xsm:pb-10"
              >
                With Reacho Docs, you can write, edit, and collaborate wherever
                you are with 7 day trial
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className="search-filter-form">
              <form
                action="#"
                className="max-w-[750px] h-[70px] relative shadow-[0_30px_50px_rgba(7,21,36,0.12)] m-[0_auto] rounded-xl bg-white md:h-[70px] sm:h-[65px] xsm:h-[65px]"
              >
                <input
                  type="text"
                  placeholder="Your email address"
                  className="w-full h-full text-[16px] p-[0_200px_0_35px] rounded-xl border-none focus:!ring-0 focus:!border-[none] focus:outline-none md:p-[0_200px_0_30px] sm:p-[0_180px_0_15px] xsm:p-[0_180px_0_15px]"
                />
                <button className="flex items-center justify-center w-[185px] absolute transition-all duration-[0.3s] ease-in-out rounded-xl right-[10px] inset-y-[10px] text-white font-medium bg-red-500 hover:bg-black md:w-[160px] sm:w-[160px] xsm:w-[160px]">
                  Get Started
                </button>
              </form>
            </div>

            <div className="pt-[25px] flex items-center justify-center flex-wrap gap-6">
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
                <span className="text-gray-900">Try it free for 30 Days.</span>
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
                <span className="text-gray-900">No credit card required.</span>
              </span>
            </div>
          </div>
          <img
            data-aos="fade-up"
            data-aos-delay="150"
            src="https://deski-tailwindcss.ibthemespro.com/images/assets/ils_09.svg"
            alt=""
            className="illustration m-[95px_auto_0] md:mt-[90px] sm:mt-[70px] xsm:mt-[70px]"
          />
        </div>
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/68.svg"
          alt=""
          className="shapes shape-one absolute z-[-1] animate-[rotatedTwo_25s_infinite_linear] right-[15%] top-[5%] xsm:hidden"
        />
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/69.svg"
          alt=""
          className="shapes shape-two absolute z-[-1] right-[7%] top-[11%] xsm:hidden"
        />
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/70.svg"
          alt=""
          className="shapes shape-three absolute z-[-1] right-[20%] top-[24%] xsm:hidden"
        />
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/71.svg"
          alt=""
          className="shapes shape-four absolute z-[-1] animate-[jumpTwo_5s_infinite_linear] right-[11%] top-[28%] xsm:hidden"
        />
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/72.svg"
          alt=""
          className="shapes shape-five absolute z-[-1] right-[8%] top-[40%] xsm:hidden"
        />
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/73.svg"
          alt=""
          className="shapes shape-six absolute z-[-1] left-[9%] top-[6%] xsm:hidden"
        />
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/74.svg"
          alt=""
          className="shapes shape-seven absolute z-[-1] left-[7%] top-[19%] xsm:hidden"
        />
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/75.svg"
          alt=""
          className="shapes shape-eight absolute z-[-1] animate-[jumpThree_5s_infinite_linear] left-[16%] top-[24%] xsm:hidden"
        />
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/76.svg"
          alt=""
          className="shapes shape-nine absolute z-[-1] left-[21%] top-[35%] xsm:hidden"
        />
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/77.svg"
          alt=""
          className="shapes shape-ten absolute z-[-1] animate-[rotatedTwo_50s_infinite_linear] left-[11%] top-[42%] xsm:hidden"
        />
      </div>
    </section>
  );
}
