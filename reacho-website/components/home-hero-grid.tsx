import React from "react";

export default function HomeHeroGrid() {
  return (
    <>
      <div className="mt-12 md:mt-48 grid grid-cols-12 items-end gap-x-4 gap-y-4 sm:gap-y-0 sm:gap-x-4 lg:gap-x-4 relative px-4 lg:px-0">
        <div className="col-span-6 md:col-span-3">
          <div className="overflow-hidden rounded-2xl bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <div className="pb-6 space-y-1">
                <h2 className="font-semibold text-xl">Marketing</h2>
                <p className="text-base text-gray-500">
                  Keep your audience informed
                </p>
              </div>
              <img
                className="w-full rounded-2xl"
                src="https://cdn.lindoai.com/c/recWb5MDAKXtEkkWV/images/82276316.png"
                alt="Image Description"
              />
            </div>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3">
          <img
            data-wow-duration="0.3s"
            className="w-full rounded-2xl"
            src="https://cdn.lindoai.com/c/recWb5MDAKXtEkkWV/images/06046337.png"
            alt="Image Description"
          />
        </div>

        <div className="col-span-6 md:col-span-3 self-start lg:self-auto">
          <img
            className="w-full mb-2 lg:mb-4 rounded-2xl"
            src="https://cdn.lindoai.com/c/recWb5MDAKXtEkkWV/images/26706297.png"
            alt="Image Description"
          />
          <img
            className="w-full rounded-2xl"
            src="https://cdn.lindoai.com/c/recWb5MDAKXtEkkWV/images/10861476.png"
            alt="Image Description"
          />
        </div>

        <div className="col-span-6 md:col-span-3 self-start lg:self-auto">
          <img
            className="w-full rounded-2xl"
            src="https://cdn.lindoai.com/c/recWb5MDAKXtEkkWV/images/02068134.png"
            alt="Image Description"
          />
        </div>
      </div>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
              250k
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-gray-900">
                Users on the platform
              </p>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Vel labore deleniti veniam consequuntur sunt nobis.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              $8.9 billion
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                We’re proud that our customers have made over $8 billion in
                total revenue.
              </p>
              <p className="mt-2 text-base leading-7 text-gray-400">
                Eu duis porta aliquam ornare. Elementum eget magna egestas.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              401,093
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                Transactions this year
              </p>
              <p className="mt-2 text-base leading-7 text-indigo-200">
                Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu
                duis porta aliquam ornare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
