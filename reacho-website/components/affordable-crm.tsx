import React from "react";

const Affordable = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-[#f5eee5] to-[#f4f4f1] py-12 lg:py-16">
        <div className="container mx-auto pb-0 sm:pt-4">
          <div className="section-title text-center pb-10 lg:pb-12">
            <h2 className="text-2xl md:text-[2.078125rem] font-semibold mb-0">
              Recommended as one of the
              <span className="text-purple-500 font-semibold">
                {" "}
                best affordable CRM{" "}
              </span>{" "}
              by
            </h2>
          </div>
          <div className="flex items-center justify-center lg:pb-3 mb-0">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 lg:gap-y-0 gap-x-4 gap-y-4">
              <div className="" data-aos="zoom-in-right">
                <img
                  className="w-[115px] h-[1.95rem] lozad"
                  alt="Zapier"
                  src="https://cdn5.engagebay.com/assets/img/best-crm/zapier.svg"
                />
              </div>

              <div className="" data-aos="zoom-in-right">
                <img
                  className="w-[139px] h-[1.95rem] lozad"
                  alt="Ringcentral"
                  src="https://cdn5.engagebay.com/assets/img/best-crm/ringcentral.svg"
                />
              </div>

              <div className="" data-aos="zoom-in-right">
                <img
                  className="w-[99px] h-[1.95rem] lozad"
                  alt="Forbes"
                  src="https://cdn5.engagebay.com/assets/img/best-crm/forbes.svg"
                />
              </div>

              <div className="" data-aos="zoom-in-right">
                <img
                  className="w-[139px] h-[1.95rem] lozad"
                  alt="Zendesk"
                  src="https://cdn5.engagebay.com/assets/img/best-crm/zendesk.svg"
                />
              </div>

              <div className="" data-aos="zoom-in-right">
                <img
                  className="w-[129px] h-[1.95rem] lozad"
                  alt="Freelancer"
                  src="https://cdn5.engagebay.com/assets/img/best-crm/freelancer.svg"
                />
              </div>

              <div className="" data-aos="zoom-in-right">
                <img
                  className="w-[138px] h-[1.95rem] lozad"
                  alt="Monday"
                  src="https://cdn5.engagebay.com/assets/img/best-crm/monday.svg"
                />
              </div>

              <div className="" data-aos="zoom-in-right">
                <img
                  className="w-[99px] h-[1.95rem]lozad"
                  alt="Hubspot"
                  src="https://cdn5.engagebay.com/assets/img/best-crm/hubspot.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Affordable;
