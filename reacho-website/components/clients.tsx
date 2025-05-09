import React from "react";

export default function Clients() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container">
        <h2 className="text-center text-2xl lg:text-3xl font-semibold">
          Brought to you by the creators of EngageBay
        </h2>
        <div className="mx-auto mt-8 lg:mt-12 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-4 sm:max-w-xl sm:grid-cols-6 sm:gap-8 lg:mx-0 lg:max-w-none">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/assets/images/p-logos/neilpatel.webp"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
            src="/assets/images/p-logos/forbs.webp"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-11 w-full object-contain lg:col-span-1"
            src="/assets/images/p-logos/inc.webp"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
            src="/assets/images/p-logos/enterpreneur.webp"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/assets/images/p-logos/techcrunch.webp"
            alt="Statamic"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-10 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/assets/images/p-logos/jeffbullas.webp"
            alt="Statamic"
            width={108}
            height={38}
          />
          {/* <img
            className="col-span-2 col-start-2 max-h-10 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/assets/images/p-logos/techcrunch.webp"
            alt="Statamic"
            width={108}
            height={38}
          /> */}
        </div>
      </div>
    </div>
  );
}
