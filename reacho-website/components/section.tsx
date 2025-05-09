import React from "react";

const products = [
  {
    id: 1,
    sbutitle: "SMS Marketing",
    name: "Pay bills on time without missing a beat",
    href: "https://www.engagebay.com/marketing/marketing-automation-software",
    description:
      "Review and schedule payments using a bank transfer, credit card, or your Enagebay Balance. Integrate with QBO to reconcile payments automatically.",
    imageSrc:
      "https://gohopscotch.com/_next/image/?url=https%3A%2F%2Fhopscotchwp.wpengine.com%2Fwp-content%2Fuploads%2F2023%2F03%2FFrame-13494.png&w=3840&q=75",
    imageAlt: "Image",
  },
  {
    id: 2,
    sbutitle: "Service",
    name: "Create and send branded invoices in seconds",
    href: "https://www.engagebay.com/products/customer-service",
    description:
      "Pump up your revenue with fast, fee-free payment options. Control the transaction experience for clients and vendors.",
    imageSrc:
      "https://gohopscotch.com/_next/image/?url=https%3A%2F%2Fhopscotchwp.wpengine.com%2Fwp-content%2Fuploads%2F2023%2F03%2Fillo.png&w=3840&q=75",
    imageAlt: "Image",
  },
];

// Section component
export default function Section() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Accelerate growth with powerful tools for seamless marketing and
            support management
          </h2>
          <p className="mt-4 text-gray-500">
            Dive into a world of possibilities with Reacho's versatile marketing
            and support tools and connect with your audience effortlessly.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-4 lg:gap-10 mt-16">
          {products.map((product, index) => (
            <a
              href="#product.href"
              key={product.id}
              className={`group flex flex-col justify-between relative lg:aspect-[580/790] rounded-lg overflow-hidden gap-2 md:gap-0 ${
                index % 2 === 0 ? "bg-[#e1e7f9]" : "bg-[#e3f7ea]" // Apply different classes based on index
              }`}
            >
              <div className="px-8 pt-8 lg:px-12 lg:pt-12">
                <p className="text-lg mb-4 text-dark-900 text-gray-900/80">
                  {product.sbutitle}
                </p>
                <h3 className="text-4xl font-bold text-gray-900 lg:pr-10">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-base mt-4 text-gray-600">
                  {product.description}
                </p>
              </div>

              <div className="relative flex aspect-[580/500]">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="mx-auto w-[80%] md:aspect-[580/500]  md:w-full lg:max-w-[500px] opacity-100 transition-opacity duration-500"
                />
              </div>

              <div className="absolute bottom-8 left-8 self-start lg:bottom-12 lg:left-12">
                <div className="overflow-hidden rounded-lg">
                  <div
                    id="button"
                    className="button-class font-normal inline-flex shrink-0 items-center justify-center text-center relative focus:outline-none transition-all group overflow-hidden bg-slate-900 text-white hover:bg-slate-800 text-base tracking-[0.01em] px-6 py-[12px]"
                  >
                    <div className="relative z-30">Learn more</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
