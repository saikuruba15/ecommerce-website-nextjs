"use client";
import React, { useEffect, useState } from "react";
import "../app/integrations.css";
const logos = [
  {
    img: "/assets/images/integrations-logos/bigcommerce.svg",
    class: "logo1 scale-110",
    id: "logo1",
  },
  {
    img: "/assets/images/integrations-logos/shopify.svg",
    class: "logo2 scale-150",
    id: "logo2",
  },
  {
    img: "/assets/images/integrations-logos/magento.svg",
    class: "logo3",
    id: "logo3",
  },
  {
    img: "/assets/images/integrations-logos/zyro.svg",
    class: "logo4 scale-125",
    id: "logo4",
  },
  {
    img: "/assets/images/integrations-logos/woocommerce.svg",
    class: "logo5 scale-150",
    id: "logo5",
  },
  {
    img: "/assets/images/integrations-logos/opencart.svg",
    class: "logo6 scale-90",
    id: "logo6",
  },
  {
    img: "/assets/images/integrations-logos/adobe.svg",
    class: "logo7 scale-110",
    id: "logo7",
  },
  {
    img: "/assets/images/integrations-logos/squarespace.svg",
    class: "logo8 scale-50",
    id: "logo8",
  },
  {
    img: "/assets/images/integrations-logos/wix.svg",
    class: "logo9",
    id: "logo9",
  },
  {
    img: "/assets/images/integrations-logos/salesforce.svg",
    class: "logo10",
    id: "logo10",
  },
  {
    img: "/assets/images/integrations-logos/shift4shop.svg",
    class: "logo11 scale-125",
    id: "logo11",
  },
  {
    img: "/assets/images/integrations-logos/shopify-plus.svg",
    class: "logo12 scale-50",
    id: "logo12",
  },
  {
    img: "/assets/images/integrations-logos/big-cartel.svg",
    class: "logo13 scale-50",
    id: "logo13",
  },
  {
    img: "/assets/images/integrations-logos/shoplazza.svg",
    class: "logo14 scale-105",
    id: "logo14",
  },
  {
    img: "/assets/images/integrations-logos/square-seeklogo.svg",
    class: "logo15 scale-90",
    id: "logo15",
  },
  {
    img: "/assets/images/integrations-logos/gorgias.svg",
    class: "logo16",
    id: "logo16",
  },
  {
    img: "/assets/images/integrations-logos/volusion-seeklogo.svg",
    class: "logo17 scale-150",
    id: "logo17",
  },
  {
    img: "/assets/images/integrations-logos/cscart.svg",
    class: "logo18 scale-50",
    id: "logo18",
  },
  {
    img: "/assets/images/integrations-logos/wordpress.svg",
    class: "logo19 scale-125",
    id: "logo19",
  },
  {
    img: "/assets/images/integrations-logos/ecwid.svg",
    class: "logo20 scale-50",
    id: "logo20",
  },
];
export default function HomeIntegrations() {
  const [logoList, setLogoList] = useState(logos);
  // const [timer, setTimer] = useState<any>();
  const [a, setA] = useState<any>();
  const [b, setB] = useState<any>();

  useEffect(() => {
    console.log("intiiiiiiii");
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      var newLogos = [...logoList];
      let r1 = Math.floor(Math.random() * logoList.length) + 0;
      let r2 = Math.floor(Math.random() * logoList.length) + 0;
      if (
        a != undefined &&
        b != undefined &&
        (r1 == r2 || r1 == a || r1 == b || r2 == a || r2 == b)
      ) {
        // console.log(r1, r2, a, b);
        r1 =
          Math.abs(a - b) == 1 || Math.abs(a - b) == logoList.length - 1
            ? (a + 2) % logoList.length
            : (a + 1) % logoList.length;
        r2 =
          Math.abs(a - b) == 1 || Math.abs(a - b) == 5 - 1
            ? (b + 2) % logoList.length
            : (b + 1) % logoList.length;
        // console.log(r1, r2);
      }
      var temp = newLogos[r2].img;
      newLogos[r2].img = newLogos[r1].img;
      newLogos[r1].img = temp;
      console.log(newLogos[r2].img, newLogos[r1].img);
      setLogoList(newLogos);
      setB(r2);
      setA(r1);
    }, 3000);
    // return () => clearTimeout(timeOut);
  }, [logoList]);
  return (
    <>
      <section className="integrations-main relative pt-16 sm:pt-28 lg:pt-12 pb-60 lg:px-6 px-2">
        <div className="container">
          <div className="w-full pb-52" data-aos="fade-up">
            <h2 className="section-title mb-5 md:mb-8 text-center">
              One-Click Integrations, Unlimited Potential
            </h2>
            <p className="section-description relative z-10 text-center">
              Reacho integrates with hundreds of eCommerce platforms. Just click
              and grow.
            </p>
          </div>
          <div>
            <img
              className="w-full h-full relative top-[8px] hidden"
              src="/assets/images/integrations-logos/preview2.png"
              alt="img"
            />
          </div>
          {/* <div className="integrations-main-img"></div> */}
          <div className="integrations-logos-wrpper py-20">
            <div className="reacho-center-logo sm:!p-4">
              <img
                className="w-20 h-20 lg:h-44 lg:w-44"
                src="/assets/images/integrations-logos/reacho.svg"
                alt="Icon"
              />
            </div>
            <div className="logos-gallery">
              {logoList.map((logo, index) => {
                if (index < 20)
                  return (
                    <div
                      key={logo.img}
                      className={`logo ${logo.class} ${a == index || b == index ? "active" : ""
                        }`}
                    >
                      <img
                        src={logo.img}
                        className={`${a == index || b == index ? "active" : ""
                          }`}
                        alt="Icon"
                      />
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
