import React from "react";
import { images } from "next/dist/build/webpack/config/blocks/images";

interface ImageData {
  index: number;
  src: string;
  className: string;
}

interface HomeFeatureGridProps {
  data?: {
    heading: string,
    description: string,
    "category-1": {
      name: string,
      heading: string,
      description: string,
      "learn-more": { text: string, href: string },
      "prospects-frame-images": ImageData[],
      "prospects-signup-images": ImageData[]
    },
    "category-2": {
      name: string,
      heading: string,
      description: string,
      "learn-more": { text: string, href: string },
      "prospects-frame-images": ImageData[]
    },
    "category-3": {
      name: string,
      heading: string,
      description: string,
      "learn-more": { text: string, href: string },
      "prospects-frame-images": ImageData[]
    },
    "category-4": {
      name: string,
      heading: string,
      description: string,
      "learn-more": { text: string, href: string },
      "prospects-frame-images": ImageData[]
    }
  }
}

export default function HomeFeatureGrid({ data }: HomeFeatureGridProps) {
  return (
    <>
      <div className="common-section stategic-section overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="w-full max-w-4xl mx-auto  pb-20">
            <h2
              className="relative z-[10] text-3xl lg:text-6xl leading-[1.1em] mb-5 md:mb-8 font-bold text-center"
              data-aos="fade-up"
              dangerouslySetInnerHTML={{
                __html: data?.heading ? data.heading :
                  "Switching platforms? <br />Let us guide you through."
              }}
            >
            </h2>
            <div
              className="relative z-10 text-base lg:text-xl text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p>
                {data?.description ? data.description :
                  <>
                    Our reviews, SMS and email, loyalty and referrals, and
                    subscriptions products spark engagement and increase retention —
                    all in one place.
                  </>
                }
              </p>
            </div>
          </div>

          <div className="block text-center lg:text-start lg:flex lg:gap-6">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="w-full lg:w-3/5 rounded-xl py-10 px-8 md:py-12 md:px-10 mb-6 bg-[linear-gradient(112.14deg,_#00D2FF_0%,_#3A7BD5_100%)]1 bg-gradient-to-r from-amber-200 to-yellow-500 1bg-[linear-gradient(303deg,_#ff8235_0%,_#ffdf93_100%)]"
            >
              <div className="p-0">
                <div className="column-content left w-full relative z-[1]">
                  <span className="inline-block border border-gray-600 rounded-md text-sm py-1 px-4 mb-4">
                    {data?.["category-1"].name ? data?.["category-1"].name : <>Text placeholder</>}
                  </span>
                  <h2 className="text-3xl font-semibold tracking-[-.24px] mb-4 max-w-[340px]">
                    {data?.["category-1"].heading ? data?.["category-1"].heading : <>Dedicated and tailored support</>}
                  </h2>
                  <p className="text-base mb-4 max-w-[260px]">
                    {data?.["category-1"].description ? data?.["category-1"].description :
                      <>
                        Rely on personalized support from platform migration
                        troubleshooting.
                      </>
                    }
                  </p>
                  <a className="mah-link hidden" href={data?.["category-1"]["learn-more"].href ? data?.["category-1"]["learn-more"].href : "#"}>
                    {data?.["category-1"]["learn-more"].text ? data?.["category-1"]["learn-more"].text : <>Learn more</>} <span>&nbsp;</span>
                  </a>
                </div>

                <div className="column-img-wrap w-full relative z-[1]">
                  <div className="column-img">
                    {data?.["category-1"]["prospects-frame-images"].length ?
                      data?.["category-1"]["prospects-frame-images"].map(image => (
                        <img
                          key={image.index}
                          data-lazy=""
                          alt="Prospects frame"
                          src={image.src}
                          width="304"
                          height="215"
                          className={image.className}
                        />
                      ))
                      :
                      <>
                        {/*<img*/}
                        {/*  data-lazy=""*/}
                        {/*  alt="Prospects frame"*/}
                        {/*  src="//www.zohowebstatic.com/sites/zweb/images/marketingautomation/home/mah-prospects-frame.svg"*/}
                        {/*  width="100%"*/}
                        {/*  height="215"*/}
                        {/*  className="mah-prospects-frame"*/}
                        {/*/>*/}
                      </>
                    }
                    {data?.["category-1"]["prospects-signup-images"].length ?
                      data?.["category-1"]["prospects-signup-images"].map(image => (
                        <img
                          key={image.index}
                          data-lazy=""
                          alt="Prospects frame"
                          src={image.src}
                          width="304"
                          height="215"
                          className={image.className}
                        />
                      ))
                      :
                      <>
                        <img
                          data-lazy=""
                          alt="Prospects signup"
                          src="//www.zohowebstatic.com/sites/zweb/images/marketingautomation/home/marketing-feature-signup.png"
                          width="200"
                          height="169"
                          className="marketing-feature-signup sm:mt-0"
                        />
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="flex flex-col !pb-0 w-full lg:w-[40%] bg-[#eff7ff] overflow-hidden relative rounded-xl py-10 px-8 md:py-12 md:px-10 mb-6"
            >
              <div className="column-content left w-full relative z-[1] flex-1">
                <span className="inline-block border border-gray-600 rounded-md text-sm py-1 px-4 mb-4">
                  {data?.["category-2"].name ? data?.["category-2"].name : <>Text placeholder</>}
                </span>
                <h2 className="text-3xl font-semibold tracking-[-.24px] mb-4 max-w-[370px]">
                  {data?.["category-2"].heading ? data?.["category-2"].heading : <>Nurture with multichannel automation</>}
                </h2>
                <p className="text-base mb-4 max-w-[340px]">
                  {data?.["category-2"].description ? data?.["category-2"].description :
                    <>
                      Offer the most relevant, and personalized content right where
                      your leads are.
                    </>
                  }
                </p>
                <a className="mah-link hidden" href={data?.["category-2"]["learn-more"].href ? data?.["category-2"]["learn-more"].href : "#"}>
                  {data?.["category-2"]["learn-more"].text ? data?.["category-2"]["learn-more"].text : <>Learn more</>} <span>&nbsp;</span>
                </a>
              </div>

              <div className="column-img-wrap w-full relative z-[1]">
                <div className="column-img">
                  {data?.["category-2"]["prospects-frame-images"].length ?
                    data?.["category-2"]["prospects-frame-images"].map(image => (
                      <img
                        key={image.index}
                        data-lazy=""
                        alt="Prospects frame"
                        src={image.src}
                        width="100%"
                        height="215"
                        className={image.className}
                      />
                    ))
                    :
                    <>
                      <img
                        data-lazy=""
                        alt="Prospects frame"
                        src="https://www.zohowebstatic.com/sites/zweb/images/marketingautomation/home/marketing-feature-automation.webp"
                        width="230"
                        height="215"
                        className="marketing-feature-automation"
                      />
                    </>
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="block text-center lg:text-start lg:flex lg:gap-6">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="w-full lg:w-[40%] bg-[#f4f0ff] overflow-hidden relative rounded-xl py-10 px-8 md:py-12 md:px-10 mb-6"
            >
              <div className="column-content left w-full relative z-[1]">
                <span className="inline-block border border-gray-600 rounded-md text-sm py-1 px-4 mb-4">
                  {data?.["category-3"].name ? data?.["category-3"].name : <>Text placeholder</>}
                </span>
                <h2 className="text-3xl font-semibold tracking-[-.24px] mb-4 max-w-[290px]">
                  {data?.["category-3"].heading ? data?.["category-3"].heading : <>Score leads based on intent</>}
                </h2>
                <p className="text-base mb-4 max-w-[350px]">
                  {data?.["category-3"].description ? data?.["category-3"].description :
                    <>
                      Score your leads based on how they engage with your campaigns.
                    </>
                  }
                </p>
                <a className="mah-link hidden"
                  href={data?.["category-3"]["learn-more"].href ? data?.["category-3"]["learn-more"].href : "#"}>
                  {data?.["category-3"]["learn-more"].text ? data?.["category-3"]["learn-more"].text : <>Learn more</>} <span>&nbsp;</span>
                </a>
              </div>

              <div className="column-img-wrap w-full relative z-[1]">
                <div className="column-img mt-10">
                  {data?.["category-3"]["prospects-frame-images"].length ?
                    data?.["category-3"]["prospects-frame-images"].map(image => (
                      <img
                        key={image.index}
                        data-lazy=""
                        alt="Prospects frame"
                        src={image.src}
                        width="80%"
                        height="215"
                        className={image.className}
                      />
                    ))
                    :
                    <>
                      <img
                        data-lazy=""
                        alt="Prospects frame"
                        src="https://www.mailmodo.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Fmailmodo%2Fimage%2Fupload%2Ff_auto%2Cq_100%2Fv1709151065%2Fstrapi%2FFrame_1110166605_2_561b26f6ea.png&w=750&q=75"
                        width="80%"
                        height="215"
                        className="mah-onmichannel-automation1 m-auto"
                      />
                    </>
                  }
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="w-full lg:w-3/5 rounded-xl py-10 px-8 md:py-12 md:px-10 mb-6 1bg-[#d5eefd] bg-[#ecf7f0]"
            >
              <div className="p-0">
                <div className="column-content left w-full relative z-[1]">
                  <span className="inline-block border border-gray-600 rounded-md text-sm py-1 px-4 mb-4">
                    {data?.["category-4"].name ? data?.["category-4"].name : <>Text placeholder</>}
                  </span>
                  <h2 className="text-3xl font-semibold tracking-[-.24px] mb-4 max-w-[480px]">
                    {data?.["category-4"].heading ? data?.["category-4"].heading : <>Assign only sales-ready leads to
                      the sales team</>}
                  </h2>
                  <p className="text-base mb-4 max-w-[410px]">
                    {data?.["category-4"].description ? data?.["category-4"].description :
                      <>
                        Rely on personalized support from platform migration
                        troubleshooting.
                      </>
                    }
                  </p>
                  <a className="mah-link hidden" href={data?.["category-4"]["learn-more"].href ? data?.["category-4"]["learn-more"].href : "#"}>
                    {data?.["category-4"]["learn-more"].text ? data?.["category-4"]["learn-more"].text : <>Learn more</>} <span>&nbsp;</span>
                  </a>
                </div>

                <div className="column-img-wrap w-full relative z-[1]">
                  <div className="column-img mt-10">
                    {data?.["category-4"]["prospects-frame-images"].length ?
                      data?.["category-4"]["prospects-frame-images"].map(image => (
                        <img
                          key={image.index}
                          data-lazy=""
                          alt="Prospects frame"
                          src={image.src}
                          width="80%"
                          height="215"
                          className={image.className}
                        />
                      ))
                      :
                      <>
                        <img
                          data-lazy=""
                          alt="Prospects frame"
                          src="https://www.zohowebstatic.com/sites/zweb/images/marketingautomation/home/mah-identify-stats.webp"
                          width="80%"
                          height="215"
                          className="mah-prospects-frame m-auto"
                        />
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
