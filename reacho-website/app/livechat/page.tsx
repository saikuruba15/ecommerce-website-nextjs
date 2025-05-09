"use client";
import React from "react";
import HomeCta from "@/components/home-cta";
import HomeFooter from "@/components/home-footer";
import HomeNavbar from "@/components/home-navbar";
import "../home.css";

import { Metadata } from "next";
import Clients from "@/components/clients";
import Awards from "@/components/awards";
import SvgIcon from "@/components/common/SvgIcon";

// export const metadata: Metadata = {
//   title: " World’s First Free eCommerce Live Chat | Reacho",
//   description:
//     "Connect with customers instantly using Reacho Live Chat. Increase engagement and boost sales with unlimited, free live chat support.",
// };

const features = [
  {
    name: " Unlimited, Real-Time Chats",
    description:
      "Chat with unlimited customers without any restrictions and close more deals.",
    icon: () => {
      return (
        <>
          <img
            src="/assets/images/icons/fill-ouline.svg"
            alt=""
            className="w-8 h-8 inline"
          />
        </>
      );
    },
  },
  {
    name: "Tailored for Growth",
    description:
      "Built for eCommerce with easy setup and advanced security to keep conversations safe.",
    icon: () => {
      return (
        <>
          <img
            src="/assets/images/icons/fill-ouline.svg"
            alt=""
            className="w-8 h-8 inline"
          />
        </>
      );
    },
  },

];

const page = () => {
  return (
    <div>
      <HomeNavbar />
      <section className="bg-[#f9fafb] dark:text-gray-800 lg:p-[80px_15px_80px] p-[80px_0px_80px]">
        <div className="container">
          <div className="hero-block-one flex items-start text-center lg:text-start flex-col lg:flex-row pt-3 gap-x-12 gap-y-12 lg:gap-y-5">
            <div className="block w-full">
              <div className='hero-text-block'>
                <h1 className="hero-title mb-5 lg:pr-7 pt-8">
                  Resolve Queries Instantly
                </h1>
                <p className="hero-description mb-10 lg:pr-7">
                  Instant, real-time connections that elevate your eCommerce game for free!
                </p>

                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start  pb-10">
                  <a
                    rel="noopener noreferrer"
                    href="https://app.reacho.com/signup"
                    className="px-8 py-3 text-base font-medium rounded-md bg-danger text-white"
                  >
                    Get Started
                  </a>
                </div>
                <div className="stability-block flex flex-col lg:flex-row lg:gap-y-[40px] gap-5 gap-x-[40px] border-t border-[#6f6f6f] sm:justify-start w-full sm:w-[88%] pt-5">
                  <div className='stability-percentage-block mt-1'>
                    <h2 className="percentage-number text-[#19191d] mt-4 mb-3 text-4xl sm:text-5xl font-semibold sm:leading-[3.4375rem]">
                      41%
                    </h2>
                    <p className="text-[#6b6b6b] font-light text-base leading-[1.75rem] lg:w-[68%] w-full mb-1">
                      Reduction in Ticket Volume{" "}
                    </p>
                  </div>
                  <div className='count-number-block'>
                    <h2 className="count text-[#19191d] mt-4 mb-3 text-4xl sm:text-5xl font-semibold sm:leading-[3.4375rem]">
                      100%
                    </h2>
                    <p className="text-[#6b6b6b] font-light text-base leading-[1.75rem] lg:w-[68%] w-full mb-1">

                      Savings in Support Software Cost
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="live-chat-image">
              <div className="sm:w-auto lg:w-full rounded-tl-[120px]">
                <img
                  src="/assets/images/livechat/hero1.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 56vw, (max-width: 991px) 54vw, (max-width: 1439px) 26vw, 347.671875px"

                  alt="Banner Girl Image"
                  className="object-cover rounded-tl-[120px]"
                />

              </div>
              <div className="flex flex-col items-start w-full ml-0 md:-ml-[66px] gap-5 sm:pt-3 lg:pt-0">
                <div className="rounded-xl shadow-[9px_0_20px_rgba(0,0,0,0.1)]" data-aos="fade-left" data-aos-duration="1000">        
                  <img
                    src="/assets/images/livechat/livechat-02.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 94vw, (max-width: 767px) 52vw, (max-width: 991px) 50vw, (max-width: 1439px) 25vw, 323.328125px"
                    alt="Banner Image One"
                    className="float-image rounded-lg lg:h-52 sm:h-full"
                  />
                </div>
                <div className="rounded-xl shadow-[9px_0_20px_rgba(0,0,0,0.1)]" data-aos="fade-left" data-aos-duration="1500">
                  <img
                    src="/assets/images/livechat/livechat-01.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 94vw, (max-width: 767px) 52vw, (max-width: 991px) 50vw, (max-width: 1439px) 25vw, 323.328125px"
                    alt="Banner Image One"
                   className="float-image rounded-lg lg:h-52 sm:h-full"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Clients />
      <section>
        <div className="relative items-center w-full px-5 py-12 lg:py-24 mx-auto lg:px-4 container">
          <div className="flex flex-col justify-center items-center gap-[20px] text-center">
            <h2 className="section-title" data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100">
              Cut Response Time by 60% with Reacho Live Chat
            </h2>
            <p className="section-description text-center mb-5 max-w-5xl">
              With Reacho, turn every conversation into an opportunity while cutting response times. Connect instantly with customers and leave a lasting impression.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] auto-cols-[1fr] gap-x-[30px] gap-y-[16px] grid-rows-auto w-full lg:mb-[30px] mb-[15px] mt-6 lg:flex-row-reverse">
            <div
              className="rounded-[20px] pt-[50px] pb-[40px] px-[30px] hover:bg-[#f2f8fc] hover:shadow-none shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all"
            >
              <svg className="h-10 w-10 mb-5"

                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="svg879"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"

                xmlSpace="preserve"
              >
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\t.st0{fill:#FFFFFF;filter:url(#Adobe_OpacityMaskFilter);}\n\t.st1{fill:#FFFFFF;}\n\t.st2{mask:url(#custom_00000161630948486725485490000003385436059610934173_);}\n\t.st3{clip-path:url(#SVGID_00000070081769818853592830000008929166298284923265_);}\n"
                  }}
                />
                <defs>
                  <filter
                    id="Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x="2.5"
                    y="2.5"

                  >
                    <feColorMatrix
                      type="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
                    />
                  </filter>
                </defs>
                <mask
                  maskUnits="userSpaceOnUse"
                  x="2.5"
                  y="2.5"
                  width={45}
                  height={45}
                  id="custom_00000161630948486725485490000003385436059610934173_"
                >
                  <rect
                    id="bg_00000036214208678877143470000010381988192620709248_"
                    x="-316.3"
                    y="-316.3"
                    className="st0"
                    width="682.7"
                    height="682.7"
                  />
                  <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                    <path
                      id="path901_00000181069762655435310170000011607836321271573650_"
                      className="st1"
                      d="M43.7,493.3c0-13.8-11.2-25-25-25    s-25,11.2-25,25s11.2,25,25,25S43.7,507.1,43.7,493.3"
                    />
                    <path
                      id="path905_00000103949043637577975280000007648822996310331011_"
                      className="st1"
                      d="M143.8,493.3c0-13.8-11.2-25-25-25    s-25,11.2-25,25s11.2,25,25,25S143.8,507.1,143.8,493.3"
                    />
                    <path
                      id="path909_00000177476798978637389470000003814136373227580579_"
                      className="st1"
                      d="M-56.3,493.3c0-13.8-11.2-25-25-25    s-25,11.2-25,25s11.2,25,25,25S-56.3,507.1-56.3,493.3"
                    />
                  </g>
                </mask>
                <g className="st2">
                  <g id="g885" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                    <g id="g887">
                      <g>
                        <defs>
                          <rect id="SVGID_1_" x="-3.7" y="470.8" width={45} height={45} />
                        </defs>
                        <clipPath id="SVGID_00000012471900231762623420000016755815348311162009_">
                          <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
                        </clipPath>
                        <g
                          id="g889"
                          style={{
                            clipPath:
                              "url(#SVGID_00000012471900231762623420000016755815348311162009_)"
                          }}
                        >
                          <g id="g895" transform="translate(256,492)">
                            <g id="path897">
                              <path d="M-252.8-15.1c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.3,0.5-0.2,0.8l2.3,7c-1.5,2.5-2.3,5.4-2.3,8.3         c0,9,7.3,16.3,16.3,16.3s16.3-7.3,16.3-16.3s-7.3-16.3-16.3-16.3c-2.9,0-5.8,0.8-8.3,2.3l-7-2.3         C-252.7-15-252.7-15.1-252.8-15.1z M-245.5-11.2c0.1,0,0.3,0,0.4-0.1c2.3-1.5,5.1-2.2,7.8-2.2c8.2,0,14.8,6.6,14.8,14.8         s-6.6,14.8-14.8,14.8s-14.8-6.6-14.8-14.8c0-2.8,0.8-5.5,2.2-7.8c0.1-0.2,0.1-0.4,0.1-0.6l-1.9-5.9l5.9,1.9         C-245.6-11.2-245.6-11.2-245.5-11.2z" />
                            </g>
                          </g>
                          <g id="g899" transform="translate(281,256)">
                            <g id="path901_00000111179245579326863980000012982084801040925856_">
                              <path d="M-260.6,237.3c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6S-260.6,238.2-260.6,237.3" />
                            </g>
                          </g>
                          <g id="g903" transform="translate(381,256)">
                            <g id="path905_00000107547052702098141260000008394320725275311001_">
                              <path d="M-354,237.3c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6S-354,238.2-354,237.3" />
                            </g>
                          </g>
                          <g id="g907" transform="translate(181,256)">
                            <g id="path909_00000047764705933261570500000002131636406321219765_">
                              <path d="M-167.2,237.3c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6S-167.2,238.2-167.2,237.3" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none lg:text-xl text-gray-700">
                Customizable Chat Widget
              </h1>
              <p className="mx-auto text-base  text-gray-600 font-light">
                Make it yours! Match the chat style to your brand with custom colors, fonts, and personalized messages.
              </p>
            </div>
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 border border-indigo-600 py-16 sm:py-24 lg:py-14 rounded-2xl">
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
                <div className="max-w-xl text-3xl lg:col-span-7">
                  <h2 className="text-white text-3xl font-semibold tracking-tight mb-4">
                    Real-Time Communication
                  </h2>
                  <p className="text-base text-white font-light">
                    Offer immediate assistance to your customers, reducing wait times and increasing satisfaction.
                  </p>
                </div>
                <div className="w-full max-w-md lg:col-span-5 lg:pt-2 lg:my-auto flex lg:justify-end justify-center">
                  <a
                    rel="noopener noreferrer"
                    href="https://app.reacho.com/signup"
                    className="px-8 py-3 text-lg font-medium rounded-md bg- bg-white"
                  >
                    Try Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 lg:gap-9 gap-4 mx-auto lg:grid-cols-3">
            <div
              className="rounded-[20px] pt-[50px] pb-[40px] px-[30px]  hover:shadow-none shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all hover:bg-[#f6fcf8]"

            >
              <svg className="h-10 w-10 mb-5"
                // xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="svg3159"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                // style={{ enableBackground: "new 0 0 50 50" }}
                xmlSpace="preserve"
              >
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\t.st0{clip-path:url(#SVGID_00000087380946400103974640000001689925178399809936_);}\n"
                  }}
                />
                <g id="g3165" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                  <g id="g3167">
                    <g>
                      <defs>
                        <rect id="SVGID_1_" x="-3.8" y="470.8" width={45} height={45} />
                      </defs>
                      <clipPath id="SVGID_00000154409161529294228420000001625659126564840349_">
                        <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
                      </clipPath>
                      <g
                        id="g3169"
                        style={{
                          clipPath:
                            "url(#SVGID_00000154409161529294228420000001625659126564840349_)"
                        }}
                      >
                        <g id="g3175" transform="translate(397.0017,199.084)">
                          <g id="path3177">
                            <path d="M-370.2,285.8c-0.7,0-1.5,0.3-2,0.8c-0.3,0.3-0.3,0.8,0,1.1s0.8,0.3,1.1,0c0.5-0.5,1.4-0.5,1.9,0        c0.5,0.5,0.5,1.4,0,1.9l-0.2,0.2c0,0,0,0,0,0l-6.5,6.6c-0.1,0.1-0.3,0.1-0.5,0l-1.1-1.1c-1.3-1.3-3.4-1.3-4.7,0        c-0.6,0.6-1,1.5-1,2.4c0,0.9,0.4,1.7,1,2.4l6.1,5.9c3.3,3.3,8.7,3.3,12,0c3.3-3.3,3.3-8.7,0-12l-3.8-3.6        c0.8-1.1,0.7-2.7-0.3-3.7C-368.7,286.1-369.5,285.8-370.2,285.8z M-376.3,298c0.5,0,0.9-0.2,1.3-0.5l6-6l3.8,3.6        c2.7,2.7,2.7,7.2,0,9.9c-2.7,2.7-7.2,2.7-9.9,0l-6.1-5.9c-0.4-0.3-0.5-0.8-0.6-1.3c0-0.5,0.2-0.9,0.5-1.3        c0.7-0.7,1.9-0.7,2.6,0l1.1,1.1C-377.2,297.9-376.7,298-376.3,298z" />
                          </g>
                        </g>
                        <g id="g3179" transform="translate(277.325,131.5)">
                          <g id="path3181">
                            <path d="M-253.7,350.3c-0.8,0-1.5,0.3-2.1,0.9l-1.8,1.8c-0.3,0.3-0.3,0.8,0,1.1s0.8,0.3,1.1,0l1.8-1.8c0.6-0.6,1.5-0.6,2.1,0        c0.3,0.3,0.4,0.7,0.4,1.1c0,0.4-0.2,0.8-0.4,1.1l-1.9,1.9c-0.3,0.3-0.3,0.8,0,1.1s0.8,0.3,1.1,0l1.9-1.9        c0.6-0.6,0.9-1.3,0.9-2.1s-0.3-1.6-0.9-2.1C-252.2,350.6-253,350.3-253.7,350.3z" />
                          </g>
                        </g>
                        <g id="g3183" transform="translate(262.2254,394.8506)">
                          <g id="path3185">
                            <path d="M-256.1,96.8c-0.2,0-0.4,0.1-0.5,0.2l-0.9,0.9c-3.5,3.5-3.5,9.1,0,12.6c3.5,3.5,9.1,3.5,12.6,0l2.4-2.4        c0.3-0.3,0.3-0.8,0-1.1s-0.8-0.3-1.1,0l-2.4,2.4c-2.9,2.9-7.6,2.9-10.5,0c-2.9-2.9-2.9-7.6,0-10.5l0.9-0.9        c0.3-0.3,0.3-0.8,0-1.1C-255.7,96.8-255.9,96.8-256.1,96.8z" />
                          </g>
                        </g>
                        <g id="g3187" transform="translate(149.2337,78.7012)">
                          <g id="path3189">
                            <path d="M-135.9,401.4c-0.8,0-1.6,0.3-2.2,0.9l0.5,0.6l-0.5-0.5c-0.6,0.6-0.9,1.3-0.9,2.2c0,0.8,0.3,1.6,0.9,2.2l1.2,1.2        c0.6,0.6,1.3,0.9,2.2,0.9c0.8,0,1.6-0.3,2.2-0.9c0.6-0.6,0.9-1.4,0.9-2.2c0-0.8-0.3-1.6-0.9-2.2l-1.2-1.2        C-134.3,401.7-135.1,401.4-135.9,401.4z M-134.7,407.2c-0.4,0-0.8-0.2-1.1-0.5l-1.2-1.2c-0.3-0.3-0.5-0.7-0.5-1.1        c0-0.4,0.2-0.8,0.5-1.1c0,0,0,0,0,0l0,0c0.6-0.6,1.6-0.6,2.2,0l1.2,1.2c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1        C-133.9,407.1-134.3,407.2-134.7,407.2z" />
                          </g>
                        </g>
                        <g id="g3191" transform="translate(98.6785,127.7315)">
                          <g id="path3193">
                            <path d="M-88.6,355.6c-0.8,0-1.6,0.3-2.2,0.9l0,0c-1.2,1.2-1.2,3.1,0,4.3l3,3c1.2,1.2,3.1,1.2,4.3,0c0.6-0.6,0.9-1.4,0.9-2.2        c0-0.8-0.3-1.6-0.9-2.2l-3-3C-87.1,355.9-87.8,355.6-88.6,355.6z M-89.8,357.6L-89.8,357.6c0.6-0.6,1.6-0.6,2.2,0l3,3        c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1c-0.6,0.6-1.6,0.6-2.2,0l-3-3C-90.4,359.2-90.4,358.2-89.8,357.6z" />
                          </g>
                        </g>
                        <g id="g3195" transform="translate(48.8865,177.5235)">
                          <g id="path3197">
                            <path d="M-42.1,309.1c-0.8,0-1.6,0.3-2.2,0.9l0.5,0.6l-0.5-0.5c-0.6,0.6-0.9,1.3-0.9,2.2c0,0.8,0.3,1.6,0.9,2.2l1.8,1.8        c1.2,1.2,3.1,1.2,4.3,0c0.6-0.6,0.9-1.4,0.9-2.2c0-0.8-0.3-1.6-0.9-2.2L-40,310C-40.6,309.4-41.3,309.1-42.1,309.1z         M-40.4,315.5c-0.4,0-0.8-0.2-1.1-0.4l-1.8-1.8c-0.3-0.3-0.5-0.7-0.5-1.1c0-0.4,0.2-0.8,0.5-1.1l0,0l0,0        c0.6-0.6,1.6-0.6,2.2,0l1.8,1.8c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1C-39.5,315.4-40,315.5-40.4,315.5z" />
                          </g>
                        </g>
                        <g id="g3199" transform="translate(216.3596,95.4893)">
                          <g id="path3201">
                            <path d="M-196,383.1c-0.8,0-1.5,0.3-2.1,0.9l-2.7,2.7c-0.3,0.3-0.3,0.8,0,1.1s0.8,0.3,1.1,0l2.7-2.7c0.6-0.6,1.5-0.6,2.1,0        c0.6,0.6,0.6,1.5,0,2.1c-0.3,0.3-0.3,0.8,0,1.1s0.8,0.3,1.1,0c1.2-1.2,1.2-3.1,0-4.3C-194.4,383.4-195.2,383.1-196,383.1z" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none lg:text-xl text-gray-700">
                Responsive Auto-Greetings
              </h1>

              <p className="mx-auto text-base text-gray-600 font-light">
                Set up automated messages to welcome visitors or respond to
                common inquiries. This ensures prompt engagement even when your
                team is busy.
              </p>
            </div>
            <div
              className="rounded-[20px] pt-[50px] pb-[40px] px-[30px]  hover:shadow-none shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all hover:bg-[#fff9f9]"

            >
              <svg className="mb-5 h-10 w-10"
                // xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="svg1428"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                // style={{ enableBackground: "new 0 0 50 50" }}
                xmlSpace="preserve"
              >
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\t.st0{clip-path:url(#SVGID_00000124855893890102626020000015444951911284911283_);}\n"
                  }}
                />
                <g id="g1434" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                  <g id="g1436">
                    <g>
                      <defs>
                        <rect id="SVGID_1_" x="-3.8" y="470.8" width={45} height={45} />
                      </defs>
                      <clipPath id="SVGID_00000102527169582167664620000004810951480818306475_">
                        <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
                      </clipPath>
                      <g
                        id="g1438"
                        style={{
                          clipPath:
                            "url(#SVGID_00000102527169582167664620000004810951480818306475_)"
                        }}
                      >
                        <g id="g1444" transform="translate(331,332)">
                          <g id="path1446">
                            <path d="M-312.3,160.6c-3.1,0-5.7,2.6-5.7,5.7s2.6,5.7,5.7,5.7c3.1,0,5.7-2.6,5.7-5.7S-309.1,160.6-312.3,160.6z         M-312.3,170.5c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2C-308.1,168.6-309.9,170.5-312.3,170.5z" />
                          </g>
                        </g>
                        <g id="g1448" transform="translate(256,14.5)">
                          <g id="path1450">
                            <path d="M-237.3,462.1L-237.3,462.1c-0.2,0-0.4,0.1-0.6,0.3c-0.5,0.5-11.1,13.3-11.1,21.4c0,6.4,5.2,11.6,11.6,11.6        c6.4,0,11.6-5.2,11.6-11.6c0-8.1-10.6-20.9-11.1-21.4C-236.8,462.2-237,462.1-237.3,462.1z M-237.3,493.9        c-5.6,0-10.1-4.5-10.1-10.1c0-6.5,7.9-16.9,10.1-19.7c2.2,2.8,10.1,13.2,10.1,19.7C-227.1,489.3-231.7,493.9-237.3,493.9z" />
                          </g>
                        </g>
                        <g id="g1452" transform="translate(256,257)">
                          <g id="path1454">
                            <path d="M-237.3,233.6c-0.4,0-0.8,0.3-0.8,0.8v2c0,0.4,0.3,0.8,0.8,0.8c0.4,0,0.8-0.3,0.8-0.8v-2        C-236.5,233.9-236.8,233.6-237.3,233.6z" />
                          </g>
                        </g>
                        <g id="g1456" transform="translate(151,332)">
                          <g id="path1458">
                            <path d="M-137.2,165.5h-2c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h2c0.4,0,0.8-0.3,0.8-0.8S-136.8,165.5-137.2,165.5z" />
                          </g>
                        </g>
                        <g id="g1460" transform="translate(256,437)">
                          <g id="path1462">
                            <path d="M-237.3,65.5c-0.4,0-0.8,0.3-0.8,0.8v2c0,0.4,0.3,0.8,0.8,0.8c0.4,0,0.8-0.3,0.8-0.8v-2        C-236.5,65.8-236.8,65.5-237.3,65.5z" />
                          </g>
                        </g>
                        <g id="g1464" transform="translate(331,332)">
                          <g id="path1466">
                            <path d="M-305.3,165.5h-2c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h2c0.4,0,0.8-0.3,0.8-0.8S-304.9,165.5-305.3,165.5z" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>

              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none lg:text-xl text-gray-700">
                Visitor Tracking and Insights
              </h1>

              <p className="mx-auto text-base text-gray-600 font-light">
                Monitor visitor behavior in real-time. See which pages they're
                viewing and tailor your support to their interests, enhancing
                personalization.
              </p>
            </div>
            <div
              className="rounded-[20px] pt-[50px] pb-[40px] px-[30px]  hover:shadow-none shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all hover:bg-[#f6fcf8]"

            >
              <svg className="mb-5 h-10"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                // style={{ enableBackground: "new 0 0 50 50" }}
                xmlSpace="preserve"
              >
                <g id="Smartphone">
                  <g>
                    <path d="M25.4,48.5c0,0-11.1,0-11.1,0c-1.3,0-2.5-0.5-3.4-1.4L2.9,39c-1.4-1.4-1.8-3.5-1-5.3l4-9.4c0.2-0.6,0.6-1.1,1-1.5    c1.3-1.3,3.3-1.8,5.1-1.1l8.8,3.3l4.9-4.9c0.9-0.9,2.1-1.4,3.4-1.4c1.3,0,2.5,0.5,3.4,1.4c1.9,1.9,1.9,4.9,0,6.8l-12,12h4.8    c2.7,0,4.8,2.2,4.8,4.8S28.1,48.5,25.4,48.5z M10.3,23.3c-0.7,0-1.5,0.3-2,0.8c-0.3,0.3-0.5,0.6-0.6,0.9l-4,9.4    c-0.5,1.1-0.2,2.3,0.6,3.1l8.1,8.1c0.5,0.5,1.2,0.8,2,0.8l11.1,0c1.5,0,2.8-1.3,2.8-2.8s-1.3-2.8-2.8-2.8h-7.3    c-0.4,0-0.8-0.2-0.9-0.6s-0.1-0.8,0.2-1.1l13.7-13.7c1.1-1.1,1.1-2.9,0-4c-1.1-1.1-2.9-1.1-4,0l-5.4,5.4c-0.3,0.3-0.7,0.4-1.1,0.2    l-9.4-3.6C11,23.4,10.7,23.3,10.3,23.3z" />
                  </g>
                  <g>
                    <path d="M39.9,48.5h-3.8c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.8c3.7,0,6.6-3,6.6-6.6V10.1c0-3.7-3-6.6-6.6-6.6H29.2c-3.7,0-6.6,3-6.6,6.6    v4.8c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4.8c0-4.8,3.9-8.6,8.6-8.6h10.7c4.8,0,8.6,3.9,8.6,8.6v29.7C48.5,44.6,44.7,48.5,39.9,48.5z" />
                  </g>
                  <g>
                    <path d="M36.1,11.1H33c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.1c0.6,0,1,0.4,1,1S36.7,11.1,36.1,11.1z" />
                  </g>
                </g>
              </svg>

              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none lg:text-xl text-gray-700">
                Mobile-Friendly Interface
              </h1>
              <p className="mx-auto text-base text-gray-600 font-light">
                Stay connected with customers on any device. Reacho Live Chat is
                optimized for desktops, tablets, and mobile phones, ensuring
                consistent support across platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background:
            "linear-gradient(270deg, #e9ecff, #fffbfb 49.93%, #f4eded)",
        }}
        className="relative bg-fixed bg-opacity-50"
      >
        <div className="mx-auto py-16 md:py-16 text-center lg:px-0 px-8">
          <div className="flex justify-center">
            <div className="lg:w-11/12 xl:w-9/12 w-full 2xl:w-8/12 mx-auto text-center">
              <h3 className="section-title mb-6 w-full lg:!text-[2.8rem]">
                Customer Service, Without the Waiting Room
              </h3>
              <p className="max-w-3xl mx-auto section-description">
                With Reacho's Live Chat, interact with your website visitors when they need assistance. Provide real-time support that resolves queries quickly, builds trust, and encourages customers to complete their purchases.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://app.reacho.com/signup"
                  className="border rounded-md bg-red-500 px-16 py-2.5 text-lg font-medium text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-white pb-20 pt-20">
        <div className="mx-auto container sm:px-4 lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div
              className="lg:mr-auto lg:pr-4"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="lg:max-w-lg">
                <div className="lg:text-start text-center">
                  <h2 className="section-title">
                    Lightning-fast Connections
                  </h2>
                  <p className="section-description mt-5 mb-5">
                    Engage your customers instantly with live chat tools designed to drive sales and improve shopping experiences.
                  </p>
                </div>
                <div className="mt-10">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex gap-[17px] items-start pb-6 mb-3"
                    >
                      <div className="flex justify-center items-center w-[45px] mt-0.5 relative">
                        <feature.icon aria-hidden="true" />
                      </div>
                      <div className="flex flex-col items-stretch w-full z-[2] gap-y-3.5 gap-x-[25px]">
                        <h6 className="font-medium text-xl">{feature.name}</h6>
                        <p className="text-lg font-light text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end w-full ml-auto">
              <div className="customer-support-feature-hero-banner relative pl-[60px]">
                <div className="customer-support-girl-image w-full">
                  <img
                    src="/assets/images/home-page/customer-support/customer-support-4.png"
                    loading="lazy"
                    alt="support"
                    className="feature-hero-banner-girl-image"
                  />
                </div>
                <div
                  className="active-user"
                  data-aos="fade-left"
                  data-aos-duration="400"
                >
                  <img
                    src="/assets/images/home-page/customer-support/livechat.png"
                    alt="Week Performence"
                    className="actie-user-image shadow-[0px_0px_30px_rgb(0_0_0_/_30%)]"
                  />
                </div>
                <div
                  className="week-performence"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <img
                    src="/assets/images/home-page/customer-support/email.png"
                    alt="Week Performence"
                    className="week-performence-image shadow-[0px_0px_30px_rgb(0_0_0_/_30%)]"
                  />
                </div>
                <div
                  className="professional-support-image"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <img
                    src="/assets/images/home-page/customer-support/helpdesk.png"
                    alt="Week Performence"
                    className="professional-support shadow-[0px_0px_30px_rgb(0_0_0_/_30%)]"
                  />
                </div>
                <div
                  className="order-value"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <img
                    src="/assets/images/home-page/customer-support/push-notification.png"
                    alt="Week Performence"
                    className="order-value-image shadow-[0px_0px_30px_rgb(0_0_0_/_30%)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-20 bg-[#daf0fe] rounded-[20px] auto-rows-auto p-16 lg:px-20 px-6">
          <div
            className="text-start"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <img
              className="opacity-100"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              src="/assets/images/livechat/Benefits-of-Using-Our-Live-Chat.png"
            />
          </div>
          <div
            className="flex flex-col items-start gap-[35px]"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div>
              <h2 className="section-title">
                What Sets Our Live Chat Apart?
              </h2>
            </div>
            <div className="business-check-list">
              <div className="business-checklist-icon-block">
                <img
                  src="https://cdn.prod.website-files.com/64180342570b0dc26c6fd2d1/641818253f148e19a12ff378_Group%201948.svg"
                  loading="lazy"
                  alt="Blue Checked"
                />
              </div>
              <p className="business-paragraph-list text-gray-600 font-light">
                <span className="text-span-two">
                  Secret to Happier Customers:
                </span>{" "}
                Engage customers immediately with real-time chat, reducing wait times and boosting satisfaction.
              </p>
            </div>
            <div className="business-check-list">
              <div className="business-checklist-icon-block">
                <img
                  src="https://cdn.prod.website-files.com/64180342570b0dc26c6fd2d1/641818253f148e19a12ff378_Group%201948.svg"
                  loading="lazy"
                  alt="Blue Checked"
                />
              </div>
              <p className="business-paragraph-list text-gray-600 font-light">
                <span className="text-span-two">
                  Boost Customer Loyalty:
                </span>{" "}
                Provide personalized, high-quality support that turns casual visitors into loyal customers.
              </p>
            </div>

            <div className="business-check-list">
              <div className="business-checklist-icon-block">
                <img
                  src="https://cdn.prod.website-files.com/64180342570b0dc26c6fd2d1/641818253f148e19a12ff378_Group%201948.svg"
                  loading="lazy"
                  alt="Blue Checked"
                />
              </div>
              <p className="business-paragraph-list text-gray-600 font-light">
                <span className="text-span-two">
                  Lighten Your Team’s Load:
                </span>{" "}
                Use automated greetings and canned responses to handle common queries, so your team can focus on more complex interactions.
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white pb-20 pt-20 lg:py-32">
        <div className="container">
          <div className="flex flex-wrap mx-[-15px] items-center gap-y-10">
            <div
              className="xl:w-6/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="card rounded-2xl border-none">
                <figure>
                  <a href="#">
                    <img
                      src="/assets/images/livechat/stop-paying-for-quality-support.png"
                      alt="image"
                      className="rounded-2xl"
                    />
                  </a>
                </figure>
              </div>
            </div>

            <div
              className="xl:w-5/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mr-auto"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Effortless Communication
              </h2>
              <p className="mt-6 text-xl font-light leading-8 text-gray-600">
                Other platforms make it complex to manage customer inquiries, slowing down response times. With Reacho, you can offer:
              </p>

              <ul
                role="list"
                className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-lg leading-8 text-gray-600 font-light sm:grid-cols-1"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-7 text-danger"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Real-time responses
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-7 text-danger"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Personalized greetings
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-7 text-danger"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Easy file sharing
                </li>
              </ul>
              <div className="mt-10 flex items-center">
                <a
                  href="https://app.reacho.com/signup"
                  className="px-8 py-3 text-base font-normal btn btn-danger"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white pb-20 lg:pt-0 lg:pb-28">
        <div className="container">
          <div className="flex flex-wrap mx-[-15px] items-center gap-y-10">
            <div
              className="xl:w-6/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="card rounded-2xl border-none">
                <figure>
                  <a href="#">
                    <img
                      src="/assets/images/livechat/join-the-movement-towards-free.png"
                      alt="image"
                      className="rounded-2xl"
                    />
                  </a>
                </figure>
              </div>
            </div>

            <div
              className="xl:w-5/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full ml-auto"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Smooth Integration
              </h2>
              <p className="mt-6 text-xl font-light leading-8 text-gray-600">
                Some tools don’t work well with your existing setup, adding friction to your workflow. With Reacho, you can integrate to get:
              </p>

              <ul
                role="list"
                className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-lg leading-8 text-gray-600 font-light sm:grid-cols-1"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-7 text-danger"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Instant access to order history
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-7 text-danger"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Cross-platform messaging
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-7 text-danger"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Unified customer profiles
                </li>
              </ul>
              <div className="mt-10 flex items-center">
                <a
                  href="https://app.reacho.com/signup"
                  className="px-8 py-3 text-base font-normal btn btn-danger"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Awards />

      <HomeCta />
      <HomeFooter />
    </div>
  );
};

export default page;