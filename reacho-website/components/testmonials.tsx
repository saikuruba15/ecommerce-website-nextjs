"use client";
import * as React from "react";
// import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    name: "Santiago B.",
    position: "Southern Europe Director",
    image: "https://cdn5.engagebay.com/img/testimonials/santiago.webp",
    feedback:
      "A full-featured marketing platform. With this, you have all you need to get started and succeed. Having all in one platform make any marketer job much easier.",
    icon: "/assets/images/testimonails/arrow.png",
  },
  {
    name: "Hongkiat L.",
    position: "Editor-in-chief",
    image: "https://cdn5.engagebay.com/img/testimonials/hongkiat.webp",
    feedback:
      "EngageBay has everything I need when it comes to managing customer relations and sales activities. The features I most frequently use are automation for sending emails, managing.",
    icon: "/assets/images/testimonails/arrow.png",
  },
  {
    name: "Leonardo W.",
    position: "Founder, Wolff Consultoria",
    image: "https://cdn5.engagebay.com/img/testimonials/leonard.webp",
    feedback:
      "Engagebay works pretty well with my business. I was using ActiveCampaign but the costs were adding up quite quickly. I tried other platforms but the automation sequence offered .",
    icon: "/assets/images/testimonails/arrow.png",
  },
  {
    name: "Shawn L.",
    position: "Marketing Manager",
    image: "https://cdn5.engagebay.com/img/testimonials/shawn.webp",
    feedback:
      "The software is easy to set up and implement. I feel EngageBay is quickly becoming a marketing automation competitor to the premium SAAS offerings.",
    icon: "/assets/images/testimonails/arrow.png",
  },
  // Add more testimonials here as needed
];
const Testimonials1 = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <section
        className="pt-14 pb-32 lg:pb-44 lg:mb-16 mb-0 overflow-hidden mx-auto"
        style={{
          background:
            "linear-gradient(299deg, rgba(79, 70, 229) 49%, rgba(139, 92, 246) 100%)",
        }}
      >
        {/* bg-[#f8fafd] */}
        {/* bg-gradient-to-tr from-violet-600 to-indigo-600 */}
        <div className="container rounded-xl mx-auto">
          <div className="pt-16 flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-y-0 lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto relative">
            <div className="lg:w-11/12 w-full h-[400px] lg:h-[530px] md:h-[500px] absolute top-0  !bg-[#f5f6ff] rounded-[24px] "></div>
            <div className="w-10/12 lg:w-2/5 lg:pl-16 sm:pl-2 relative">
              <div className="absolute -top-11 sm:top-[-30px] right-0 testimonial">
                <svg viewBox="0 0 154 107" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#4f46e5" />{" "}
                      {/* indigo-600 */}
                      <stop offset="100%" stopColor="#a855f7" />{" "}
                      {/* violet-600 */}
                    </linearGradient>
                  </defs>
                  <path
                    d="M34.3953 106.695C23.1642 106.695 14.6238 103.069 8.77431 95.8152C2.92476 88.5618 0 79.3195 0 68.0883C0 55.9213 2.45679 45.2751 7.37041 36.1498C12.284 27.0245 18.3676 19.5371 25.621 13.6876C32.6404 7.83807 39.4259 3.27541 45.9774 -0.000350952L51.5929 7.37009C45.5094 9.94389 39.7769 13.4536 34.3953 17.8993C29.0137 22.3449 24.6851 27.0246 21.4093 31.9382C18.1336 37.0858 16.4957 41.9994 16.4957 46.679C16.4957 48.3169 16.9637 49.3698 17.8996 49.8378C18.6015 50.5397 19.5375 50.8907 20.7074 50.8907C21.8773 50.8907 23.8661 50.0718 26.6739 48.4339C29.2477 46.796 33.4594 45.9771 39.3089 45.9771C47.2643 45.9771 54.0498 48.4339 59.6653 53.3475C65.2809 58.2611 68.0887 65.5146 68.0887 75.1078C68.0887 83.7651 65.1639 91.1355 59.3144 97.2191C53.4648 103.537 45.1585 106.695 34.3953 106.695ZM119.682 106.695C108.451 106.695 99.9102 103.069 94.0606 95.8152C88.2111 88.5618 85.2863 79.3195 85.2863 68.0883C85.2863 55.9213 87.7431 45.2751 92.6567 36.1498C97.5704 27.0245 103.654 19.5371 110.907 13.6876C117.927 7.83807 124.712 3.27541 131.264 -0.000350952L136.879 7.37009C130.796 9.94389 125.063 13.4536 119.682 17.8993C114.3 22.3449 109.971 27.0246 106.696 31.9382C103.42 37.0858 101.782 41.9994 101.782 46.679C101.782 48.3169 102.25 49.3698 103.186 49.8378C103.888 50.5397 104.824 50.8907 105.994 50.8907C107.164 50.8907 109.152 50.0718 111.96 48.4339C114.534 46.796 118.746 45.9771 124.595 45.9771C132.551 45.9771 139.336 48.4339 144.952 53.3475C150.567 58.2611 153.375 65.5146 153.375 75.1078C153.375 83.7651 150.45 91.1355 144.601 97.2191C138.751 103.537 130.445 106.695 119.682 106.695Z"
                    fill="url(#gradient1)"
                  />
                </svg>
              </div>
              <h2 className="text-2xl lg:text-[40px] font-bold text-gray-900 lg:leading-[3.25rem] leading-6 mb-4 lg:pt-44 pt-0 lg:mb-4 sm:my-6 ">
                Our Customers
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600 block">
                  {" "}
                  Love Us!
                </span>
              </h2>
              <p className="sm:py-3 text-base text-gray-600">
                See what the most active users of EngageBay have to say about
                it.
              </p>
            </div>
            <div className="w-full lg:w-3/5 grid  gap-8 lg:gap-10">
              <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full max-w-full min-w-full testimonial-slider"
              >
                <CarouselContent>
                  {testimonialsData.map((testimonial, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/2 shrink-0"
                    >
                      <div
                        key={index}
                        className="group bg-white rounded-2xl p-6 border border-[#F0F0F0] transform transition-transform shadow-sm cursor-pointer"
                      >
                        <div className="flex items-center gap-5">
                          <img
                            className="rounded-full object-cover w-12 h-12"
                            src={testimonial.image}
                            alt={`${testimonial.name}`}
                            width={48}
                            height={48}
                          />
                          <div className="grid gap-1">
                            <h5 className="text-gray-900 font-semibold text-xl">
                              {testimonial.name}
                            </h5>
                            <span className="text-sm leading-4 text-gray-500">
                              {testimonial.position}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between flex-1 min-h-[310px] max-h-[310px]">
                          <p className="text-base text-gray-500 leading-6 min-h-24   pb-10 pt-8">
                            {testimonial.feedback}
                          </p>
                          <div className="flex items-center">
                            <a
                              href="https://app.reacho.com/signup"
                              className="text-[#731DCF] text-base font-semibold cursor-pointer"
                            >
                              Sign Up
                            </a>
                            <img
                              className="rounded-full object-cover w-6 h-6 pl-2"
                              src={testimonial.icon}
                              alt={`${testimonial.name}`}
                              width={16}
                              height={16}
                            />
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="testimonial-slider-actions">
                  <CarouselPrevious className="mr-3" />
                  <CarouselNext className="ml-3" />
                </div>
              </Carousel>
            </div>
          </div>
          {/* <div className="mt-24 flex flex-row justify-center">
                        <div className="m-2 w-10 h-10 bg-white rounded-full cursor-pointer flex items-center justify-center shadow-lg transition duration-300">
                            <svg
                                width={8}
                                height={14}
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.70711 0.292893C7.31658 -0.0976311 6.68342 -0.0976311 6.29289 0.292893L0.292892 6.29289C-0.0976324 6.68342 -0.0976324 7.31658 0.292892 7.70711L6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071C8.09763 13.3166 8.09763 12.6834 7.70711 12.2929L2.41421 7L7.70711 1.70711C8.09763 1.31658 8.09763 0.683418 7.70711 0.292893Z"
                                    fill="#212121"
                                />
                            </svg>
                        </div>

                    </div> */}
        </div>
      </section>
      {/* <Carousel className="w-full ml-20 max-w-xs">
                <CarouselContent>
                    {testimonialsData.map((testimonial, index) => (
                        <CarouselItem key={index}>
                            <div key={index} className="group bg-white rounded-2xl p-6 border border-gray-100">
                                <div className="flex items-center gap-5">
                                    <img className="rounded-full object-cover w-12 h-12" src={testimonial.image} alt={`${testimonial.name}`} width={48} height={48} />
                                    <div className="grid gap-1">
                                        <h5 className="text-gray-900 font-semibold text-xl">{testimonial.name}</h5>
                                        <span className="text-sm leading-6 text-gray-500">{testimonial.position}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between flex-1 lg:h-[280px] h-auto">
                                    <p className="text-base text-gray-500 leading-6 min-h-24 py-10">{testimonial.feedback}</p>
                                    <div className="flex items-center">
                                        <p className="text-[#731DCF] text-base font-semibold">Start Selling Online</p>
                                        <img className="rounded-full object-cover w-7 h-7" src={testimonial.icon} alt={`${testimonial.name}`} width={16} height={16} />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>

                    ))}

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel> */}
    </>
  );
};

export default Testimonials1;
