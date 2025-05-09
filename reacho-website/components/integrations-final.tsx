import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import "../app/integrations.css";

export default function Integrations() {
  return (
    <>
      <section className="integrations-main relative pt-28 pb-60">
        <div className="container max-w-7xl mx-auto">
          <div className="w-full max-w-4xl mx-auto pb-56" data-aos="fade-up">
            <h2 className="relative z-[10] text-6xl leading-[1.1em] mb-5 md:mb-8 font-bold text-center">
              Channels to Grow Business
            </h2>
            <div className="font-light relative z-10 text-xl text-center">
              <p>Setup the various channels to interact with your customers</p>
            </div>
          </div>

          {/* <div className="integrations-main-img"></div> */}
          <div className="integrations-logos-wrpper py-20">
            <div className="reacho-center-logo !p-4">
              <img
                className="w-20 h-20 lg:h-44 lg:w-44"
                src="/assets/images/integrations-logos/reacho.svg"
                alt="Icon"
              />
            </div>

            <div className="logos-gallery">
              <div className="logo logo1 scale-110">
                <img
                  src="/assets/images/integrations-logos/bigcommerce.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo2 scale-150">
                <img
                  src="/assets/images/integrations-logos/shopify.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo3">
                <img
                  src="/assets/images/integrations-logos/magento.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo4 scale-125">
                <img
                  src="/assets/images/integrations-logos/zyro.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo5 scale-150">
                <img
                  src="/assets/images/integrations-logos/woocommerce.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo6 scale-90">
                <img
                  src="/assets/images/integrations-logos/opencart.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo7 scale-110">
                <img
                  src="/assets/images/integrations-logos/adobe.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo8 scale-50">
                <img
                  src="/assets/images/integrations-logos/squarespace.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo9">
                <img
                  src="/assets/images/integrations-logos/wix.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo10">
                <img
                  src="/assets/images/integrations-logos/salesforce.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo11 scale-125">
                <img
                  src="/assets/images/integrations-logos/shift4shop.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo12 scale-50">
                <img
                  src="/assets/images/integrations-logos/shopify-plus.svg"
                  alt="Icon"
                />
              </div>

              <div className="logo logo13 scale-50">
                <img
                  src="/assets/images/integrations-logos/big-cartel.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo14 scale-105">
                <img
                  src="/assets/images/integrations-logos/shoplazza.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo15 scale-90">
                <img
                  src="/assets/images/integrations-logos/square-seeklogo.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo16">
                <img
                  src="/assets/images/integrations-logos/gorgias.svg"
                  alt="Icon"
                />
              </div>

              <div className="logo logo17 scale-150">
                <img
                  src="/assets/images/integrations-logos/volusion-seeklogo.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo18 scale-50">
                <img
                  src="/assets/images/integrations-logos/cscart.svg"
                  alt="Icon"
                />
              </div>

              <div className="logo logo19 scale-125">
                <img
                  src="/assets/images/integrations-logos/wordpress.svg"
                  alt="Icon"
                />
              </div>
              <div className="logo logo20 scale-50">
                <img
                  src="/assets/images/integrations-logos/ecwid.svg"
                  alt="Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
