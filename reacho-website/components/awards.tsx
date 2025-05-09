import React from "react";

export default function Awards() {
  return (
    <>
      <div className="relative award-shape">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-[#3b56be]">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="section award-sec">
        <div className="bg-[#3b56be] py-12 sm:py-16 awards-bg">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-white">
              HAPPY CUSTOMERS SHARE GREAT REVIEWS ON G2
            </h2>
            <div className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-4 gap-y-4 sm:max-w-xl sm:grid-cols-6 sm:gap-x-5 lg:mx-0 lg:max-w-none lg:grid-cols-10">
              <img
                className="w-full object-contain"
                src="https://cdn5.engagebay.com/assets/img/g2-badges/badge-1.svg"
                alt="Transistor"
                width={99}
                height={128} data-aos="zoom-in-right"
              />
              <img
                className="w-full object-contain"
                src="https://cdn5.engagebay.com/assets/img/g2-badges/badge-2.svg"
                alt="Reform"
                width={99}
                height={128} data-aos="zoom-in-right"
              />
              <img
                className="w-full object-contain"
                src="https://cdn5.engagebay.com/assets/img/g2-badges/badge-3.svg"
                alt="Tuple"
                width={99}
                height={128} data-aos="zoom-in-right"
              />
              <img
                className="w-full object-contain"
                src="https://cdn5.engagebay.com/assets/img/g2-badges/badge-4.svg"
                alt="SavvyCal"
                width={99}
                height={128} data-aos="zoom-in-right"
              />
              <img
                className="w-full object-contain"
                src="https://cdn5.engagebay.com/assets/img/g2-badges/badge-5.svg"
                alt="Statamic"
                width={99}
                height={128} data-aos="zoom-in-right"
              />
              <img
                className="w-full object-contain"
                src="https://cdn5.engagebay.com/assets/img/g2-badges/badge-6.svg"
                alt="Statamic"
                width={99}
                height={128} data-aos="zoom-in-right"
              />
              <img
                className="w-full object-contain"
                src="https://cdn5.engagebay.com/assets/img/g2-badges/badge-7.svg"
                alt="Transistor"
                width={99}
                height={128} data-aos="zoom-in-right"
              />
              <img
                className="w-full object-contain"
                src="https://cdn5.engagebay.com/assets/img/g2-badges/badge-8.svg"
                alt="Reform"
                width={99}
                height={128} data-aos="zoom-in-right"
              />
              <img
                className="w-full object-contain"
                src="https://cdn5.engagebay.com/assets/img/g2-badges/badge-9.svg"
                alt="Tuple"
                width={99}
                height={128} data-aos="zoom-in-right"
              />
              <img
                className="w-full object-contain"
                src="https://cdn5.engagebay.com/assets/img/g2-badges/badge-9.svg"
                alt="SavvyCal"
                width={99}
                height={128} data-aos="zoom-in-right"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
