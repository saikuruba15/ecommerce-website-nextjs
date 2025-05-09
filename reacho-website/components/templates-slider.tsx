import React from "react";
const templatesData = [
  {
    id: 1,
    src: "/assets/images/templates-banner-img.png",
    alt: "templates image",
  },
  {
    id: 2,
    src: "/assets/images/templates-banner-img.png",
    alt: "templates image",
  },
  {
    id: 3,
    src: "/assets/images/templates-banner-img.png",
    alt: "templates image",
  },
];

export default function TemplatesSlider() {
  return (
    <>
      <section className="relative px-6 py-14 md:py-16 lg:py-20 bg-cloud-31 bg-gray-900 bg-center bg-cover overflow-hidden">
        <div className="container max-w-7xl mx-auto">
          <div
            className="w-full max-w-4xl mx-auto pb-12 sm:pb-16 text-white"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-5xl !leading-tight mb-5 md:mb-8 font-bold text-center">
              700+ Ready-to-Use Templates to Power Email & SMS Marketing
            </h2>
            <div className="relative z-10 text-base sm:text-xl sm:!leading-8 text-center">
              <p className="">
                A vast library of free templates for emails, surveys, and
                landing pages. Beautiful designs to delight your customers every
                time.
              </p>
            </div>
          </div>
        </div>

        <div className="templates-hero-two-section w-full relative">
          <div className="templates-slider flex overflow-x-auto">
            {templatesData.map((template) => (
              <div
                key={template.id}
                className="templates-slider-item flex-shrink-0"
              >
                <img
                  src={template.src}
                  loading="lazy"
                  alt={template.alt}
                  className="templates-cover-image w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
          {/* <div className="mt-20 text-center">
            <a
              href="https://app.reacho.com/signup"
              className="inline-flex items-center gap-x-1.5 rounded-xl bg-red-500 px-6 py-3 lg:py-4 lg:px-8 lg:text-lg text-base font-medium text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Explore our templates <span aria-hidden="true">→</span>
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
}
