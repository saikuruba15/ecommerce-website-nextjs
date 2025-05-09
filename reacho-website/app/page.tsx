"use client";
import { useState } from "react";
import HeroBannerTwo from "@/components/hero-banner-two";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import HomeCta from "@/components/home-cta";
import HomeFooter from "@/components/home-footer";
import HomeNavbar from "@/components/home-navbar";
import React from "react";
import "./home.css";
import { CheckIcon } from "@heroicons/react/24/outline";
import HomeIntegrations from "@/components/home-integrations";
import { Metadata } from "next";
import Clients from "@/components/clients";
import HomeTabSection from "@/components/home-tab-section";
import SupportCards from "@/components/support-cards";
import Awards from "@/components/awards";
import Affordable from "@/components/affordable-crm";
import Testimonials1 from "@/components/testmonials";
import { useReferral } from "@/components/util/useReferral";

type Frequency = {
  value: string;
  label: string;
  priceSuffix: string;
};

type Tier = {
  name: string;
  id: string;
  href: string;
  price: { [key: string]: string } | string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
};

const frequencies: Frequency[] = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

const tiers: Tier[] = [
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$15", annually: "$144" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
      "Marketing automations",
      "Custom reporting tools",
      "1-hour, dedicated support",
    ],
    featured: false,
    cta: "Buy plan",
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$30", annually: "$288" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
      "1-hour, dedicated support time",
      "Custom reporting tools",
    ],
    featured: true,
    cta: "Buy plan",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: "Custom",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support time",
      "Marketing automations",
      "Custom reporting tools",
      "Custom reporting tools",
    ],
    featured: false,
    cta: "Contact sales",
  },
];

const features = [
  {
    name: "Unified Multi-Channel Support",
    description:
      "Simplified customer service with email, SMS, and push notifications in one platform.",
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
    name: "24/7 Customer Support Access",
    description:
      "With a helpdesk, live chat, and knowledge base, Reacho enables instant support whenever customers need it.",
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
  //   {
  //     name: "Personalized Support",
  //     description:
  //       "Access customer histories and order details right within each ticket.",
  //     icon: () => {
  //       return (
  //         <>
  //           <img
  //             src="https://cdn.prod.website-files.com/64180342570b0dc26c6fd2d1/64242aa6285dcdad5eb144c5_Orange%20Checked.svg"
  //             alt=""
  //             className="w-6 h-6 inline"
  //           />
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     name: "Collaborative Tools",
  //     description:
  //       "Assign tickets and collaborate with your team for seamless resolutions.",
  //     icon: () => {
  //       return (
  //         <>
  //           <img
  //             src="https://cdn.prod.website-files.com/64180342570b0dc26c6fd2d1/64242aa6285dcdad5eb144c5_Orange%20Checked.svg"
  //             alt=""
  //             className="w-6 h-6 inline"
  //           />
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     name: "Purpose-Built for eCommerce",
  //     description:
  //       "Designed to handle the complexities of online retail, like order issues, returns, and shipping inquiries.",
  //     icon: () => {
  //       return (
  //         <>
  //           <img
  //             src="https://cdn.prod.website-files.com/64180342570b0dc26c6fd2d1/64242aa6285dcdad5eb144c5_Orange%20Checked.svg"
  //             alt=""
  //             className="w-6 h-6 inline"
  //           />
  //         </>
  //       );
  //     },
  //   },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Support() {
  const [frequency, setFrequency] = useState<Frequency>(frequencies[0]);
  useReferral();
  return (
    <div className="home-page">
      <HomeNavbar />
      <section className="reacho-home-page-hero-section home-four-hero-section">
        <div className="container flex items-center">
          <div className="reacho-home-page-hero-section-main-block home-four-hero-main-block">
            <div className="reacho-home-page-hero-image-block home-four-hero-image-block">
              <div
                className="home-two-banner-main-image"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <img
                  src="/assets/images/home-page/hero-1.webp"
                  alt="Ticket" loading="lazy"
                  className="rounded-xl shadow-lg object-contain"
                />
              </div>
              <div
                className="emails-image"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <img
                  src="/assets/images/home-page/hero-2.webp"
                  alt="Automated emails screen" loading="lazy"
                  className="rounded-xl shadow-lg object-contain"
                />
              </div>
            </div>
            <div className="reacho-home-page-hero-caption-block home-four-hero-caption">
              <div className="text-center">
                <span className="badge text-sm lg:text-base bg-primary bg-opacity-10 text-primary mb-4 px-4 uppercase">
                  All-in-One
                </span>
              </div>
              <h1
                className="hero-title mb-5 text-left"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                eCommerce Support. Solved.
              </h1>
              <p
                className="hero-description text-left"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Elevate your customer service with unlimited agents, tickets,
                chats, and a smart knowledge base—all at zero cost.
              </p>

              <div className="search-filter-form md:w-10/12 mt-10">
                <form
                  action="https://app.reacho.com/signup"
                  className="h-[56px] lg:h-[64px] relative shadow-[0_30px_50px_rgba(7,21,36,0.12)] m-[0_auto] rounded-full bg-white border-2 border-danger"
                >
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="w-full h-full text-sm lg:text-base font-light p-[0_120px_0_15px] lg:p-[0_165px_0_20px] rounded-full border-none focus:!ring-0 focus:!border-[none] focus:outline-none"
                  />
                  <button className="flex items-center justify-center px-3 lg:px-0 text-tiny lg:text-sm lg:w-[150px] absolute transition-all duration-[0.3s] ease-in-out rounded-full right-[3px] inset-y-[3px] text-white font-medium bg-red-500 hover:bg-black">
                    Get Started
                  </button>
                </form>
              </div>

              {/* <div className="flex space-x-4 pt-10">
                <button className="btn btn-outline-light lg:px-6 lg:py-3 lg:text-base border border-gray-700">
                  Our Features
                </button>
                <button className="btn btn-primary lg:px-6 lg:py-3 lg:text-base">
                  Try Free Trial
                </button>
              </div> */}
              <div className="pt-8 lg:pt-10 flex items-center">
                {/* <!-- Profile Images --> */}
                <div className="flex -space-x-2 pr-4 gap-x-6 items-center">
                  <a href="/shopify-platform">
                    <img
                      src="https://cdn5.engagebay.com/assets/img/integrations/shopify.webp"
                      className="w-7 h-auto"
                      alt="User 1"
                    />
                  </a>
                  <a href="/prestashop-platform">
                    <img
                      src="https://files.reacho.com/images/integrations/icons/prestashop.webp"
                      className="w-7 h-auto"
                      alt="User 2"
                    />
                  </a>
                  <a href="/woocommerce-platform">
                    <img
                      src="https://cdn5.engagebay.com/assets/img/integrations/woocommerce.webp"
                      className="w-7 h-aut"
                      alt="User 3"
                    />
                  </a>
                  <a href="/platforms" className="text-sm">
                    & More
                  </a>
                </div>
                {/* <p className=" text-gray-800 font-medium text-lg">150M+ Active user</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>



      <Clients />
      <Affordable />
      <Awards />


      <section className="lg:pb-[120px] pb-0 my-6 lg:my-0">
        <div className="container relative">
          <div className="flex flex-col justify-center items-center bg-[#fef7f1] rounded-[40px] p-8 lg:p-[110px_90px_80px_90px] gap-[5px] lg:mt-[-50px] mt-0">
            <div className="flex flex-col justify-center items-center gap-[20px] text-center">
              <h2 className="section-title">
                We Help You Focus on Your Customers
              </h2>
              <p className="section-description text-center mb-5">
                Manage live chats, track tickets, and give customers the answers
                they need with an intuitive knowledge base.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-x-[50px] gap-y-[16px] justify-items-center items-start w-full lg:mb-[-460px] mb-0 lg:max-w-[1090px] lg:mx-auto mt-4">
              <div
                className="helpdesk-image"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <img src="/assets/images/home-page/helpdesk.webp" />
              </div>
              <div
                className="helpdesk-image"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <img src="/assets/images/home-page/livechat.webp" />
              </div>
              <div
                className="helpdesk-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src="/assets/images/home-page/knowledgebase.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mt-[340px] mt-6 mb-0 pt-[150px] pb-16 lg:pb-28 overflow-hidden">
        <div className="container mt-8 lg:mt-0">
          <div className="reacho-home-page-free-main-block home-two-footer home-three bg-image">
            <div className="reacho-home-page-footer-text-block">
              <h2 className="reacho-home-page-heading w-11/12">
                Ready to catch the new wave?
              </h2>
            </div>
            <div className="reacho-home-page-footer-button-block">
              <p className="reacho-footer-button-paragraph text-lg lg:text-xl leading-8">
                Unlike other platforms that increase costs as your business
                grows, Reacho remains free and unlimited. Provide quality
                support without the fear of growing fees.
              </p>
              <div className="reacho-home-page-button-block-two">
                <a
                  data-w-id="006aa733-6714-cb4f-c4f8-9c83a98aff75"
                  href="https://app.reacho.com/signup"
                  className="!bg-white !text-gray-700 reacho-home-page-trial-button home-four-start-free-trial trial-button-two w-inline-block"
                >
                  <div className="trail-text-one home-four-text text-two">
                    Get Started
                  </div>
                </a>
                <a href="/contact-us" className="reacho-home-page-trial-button feature-button home-four-feature contact-us-button w-inline-block">
                  <div className=" text-white trail-text-one home-four-text-two contact-us-text">
                    Contact Us
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white pb-12 lg:pb-20">
        <div className="container">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div
              className="lg:mr-auto lg:pr-4"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="lg:max-w-lg">
                <h2 className="section-title">Customer support made easy</h2>
                <p className="section-description mt-5 mb-5">
                  Let us help you with free, unlimited tickets and agents. This
                  way, you get to focus on revenue growth.
                </p>
                <div className="mt-10">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex flex-col sm:flex-row gap-[17px] items-start pb-6 lg:mb-3"
                    >
                      <div className="flex justify-start sm:justify-center items-center w-[45px] mt-0.5 relative">
                        <feature.icon aria-hidden="true" />
                      </div>
                      <div className="flex flex-col items-stretch w-full z-[2] gap-y-2 sm:gap-y-3.5 gap-x-[25px]">
                        <h6 className="font-medium text-lg sm:text-xl">{feature.name}</h6>
                        <p className="text-base sm:text-lg font-light text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end w-full ml-auto">
              <div className="customer-support-feature-hero-banner relative sm:pl-[60px]">
                <div className="customer-support-girl-image w-full">
                  <img
                    src="/assets/images/home-page/customer-support/support.png"
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



      <SupportCards />

      <HomeTabSection />
      <Testimonials1 />

      <HomeIntegrations />

      <HomeCta />

      <HomeFooter />
    </div>
  );
}
