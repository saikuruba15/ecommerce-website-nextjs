import React from "react";

export default function HomeProductView() {
  return (
    <div className="relative overflow-hidden px-6 lg:px-8 py-14 sm:py-20 bg-white">
      <div
        className="m-auto
						xl:w-11/12 xl:basis-11/12
						lg:w-11/12 lg:basis-11/12
						md:w-8/12 md:basis-6/82
						 sm:w-full sm:basis-full
						 xsm:w-full xsm:basis-full
						relative px-[15px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          className="font-bold  text-3xl lg:text-[64px] lg:leading-[1.15em] text-center
						md:text-[55px] md:leading-[1.25em]
						sm:text-[55px] sm:leading-[1.18em]
						xsm:text-[55px] xsm:leading-[1.18em]
						"
        >
          Five Channels. One Dashboard.
        </h1>

        <p className="sub-text text-base lg:text-2xl leading-[1.6em]  xl:w-10/12 xl:basis-10/12 lg:w-10/12 lg:basis-10/12 md:w-fullfont-light text-center pt-4 pb-8 lg:pt-8 lg:pb-[50px] px-0 m-auto">
          Say goodbye to point solutions and fragmented software. Reacho
          simplifies customer engagement by giving you the power of
          all-in-one.
        </p>
      </div>
      <div className="mt-0 grid grid-cols-12 items-end gap-x-4 gap-y-4 sm:gap-y-0 sm:gap-x-4 lg:gap-x-4 relative">
        <div className="col-span-6 md:col-span-3">
          <img
            data-aos="fade-up"
            className="w-full rounded-2xl "
            src="/assets/images/home-hero/image-01.png"
            alt="Image Description"
          />
        </div>

        <div className="col-span-6 md:col-span-3">
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-full rounded-2xl"
            src="/assets/images/home-hero/image-02.png"
            alt="Image Description"
          />
        </div>

        <div className="col-span-6 md:col-span-3 self-start lg:self-auto">
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-full mb-2 lg:mb-4 rounded-2xl"
            src="/assets/images/home-hero/image-03.png"
            alt="Image Description"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-full rounded-2xl"
            src="/assets/images/home-hero/image-04.png"
            alt="Image Description"
          />
        </div>

        <div className="col-span-6 md:col-span-3 self-start lg:self-auto">
          <img
            data-aos="fade-up"
            data-aos-delay="600"
            className="w-full rounded-2xl"
            src="/assets/images/home-hero/image-05.png"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
}
