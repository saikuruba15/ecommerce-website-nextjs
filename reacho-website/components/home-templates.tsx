import React from "react";

export default function HomeTemplates() {
  return (
    <>
      <section className="relative px-6 py-12 md:py-16 lg:py-32 bg-cloud-3 bg-center bg-cover">
        <div className="container max-w-7xl mx-auto">
          <div
            className="w-full max-w-4xl mx-auto pb-20 text-white"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-6xl !leading-tight mb-5 md:mb-8 font-bold text-center">
              250+ Ready to Use Templates Available
            </h2>
            <div className="font-light relative z-10 text-base sm:text-xl !leading-8 text-center">
              <p>
                We Designed for You! All ready to use Email Templates, Surveys,
                and Landing Pages are available at FREE of COST
              </p>
            </div>
          </div>
        </div>

        <div className="templates-hero-section" data-aos="fade-up">
          <img
            className="w-full h-full"
            src="/assets/images/templates-hero.png"
            alt="Hero"
          />

          <div className="mt-20 text-center">
            <a
              href="https://app.reacho.com/signup"
              className="inline-flex items-center gap-x-1.5 rounded-xl bg-red-500 px-6 py-3 lg:py-4 lg:px-8 lg:text-lg text-base font-medium text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Try Now! It’s FREE <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
