"use client";
import React from 'react';
import HomeCta from "@/components/home-cta";
import HomeFooter from "@/components/home-footer";
import HomeNavbar from "@/components/home-navbar";
import "../home.css";

import { Metadata } from "next";
import Awards from '@/components/awards';
import Clients from '@/components/clients';
import SvgIcon from '@/components/common/SvgIcon';

// export const metadata: Metadata = {
//   title: "World’s First Free eCommerce Helpdesk | Reacho",
//   description:
//     "Upgrade from messy support systems to Reacho Helpdesk and enjoy organized, automated customer service. No limits, no costs.",
// };

const features = [
  {
    name: "Completely Free and Unlimited",
    description: "No hidden fees, user limits, or ticket caps—ever.",
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
    name: "eCommerce Focused",
    description:
      "Features specifically designed to meet the needs of online retailers.",
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
        <div className="container mx-auto">
          <div className="hero-block-one flex items-start text-center lg:text-start flex-col lg:flex-row pt-3 gap-x-12 gap-y-12 lg:gap-y-5">
            <div className="block w-full">
              <div className='hero-text-block'>
                <h1 className="hero-title mb-5 lg:pr-7 pt-8">
                  Spend 50% Less Time on Tickets
                </h1>
                <p className="hero-description mb-10 lg:pr-7">
                  Automate, organize, and deliver exceptional customer
                  service—for free!
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
                    <p className="ttext-[#6b6b6b] font-light text-base leading-[1.75rem] lg:w-[68%] w-full mb-1">

                      Savings in Support Software Cost
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-hero-banner flex justify-center items-center w-full pb-0 mt-5 pl-[57px] relative">
              <div
                className="z-[9] rounded-[20px] w-[42%] absolute bottom-[35px] left-0 overflow-hidden shadow-[0_4px_15px_5px_rgba(0,0,0,0.08)]"
                data-aos="fade-left"
              >
                <img src="/assets/images/helpdesk/helpdesk-hero-2.png" />
              </div>
              <div className="rounded-[20px] w-full pl-0 overflow-hidden">
                <img src="/assets/images/helpdesk/helpdesk-hero-1.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Clients />

      <section>
        <div className="relative items-center w-full px-5 py-12 lg:py-24 mx-auto lg:px-4 container">
          <div className="flex flex-col justify-center items-center gap-[20px] text-center sm:pb-4">
            <h2 className="section-title" data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100">
              Key Features of Reacho Helpdesk
            </h2>
            <p className="section-description text-center mb-5 max-w-5xl">
              Experience a streamlined, efficient support system with Reacho Help Desk's powerful features designed to automate and enhance your customer service operations.
            </p>
          </div>
          <div className="grid lg:grid-cols-[1fr_2fr] auto-cols-[1fr] gap-x-[30px] gap-y-[16px] grid-rows-auto w-full lg:mb-[30px] mb-[15px] mt-6 lg:flex-row-reverse">
            <div
              className="rounded-[20px] p-8 hover:bg-[#f2f8fc] hover:shadow-none shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all"
            >
              <SvgIcon name='automations' className="mb-5 h-10 w-10 " viewBox="0 0 50 50" />
              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none lg:text-xl text-gray-700">
                Support Automation
              </h1>
              <p className="mx-auto text-base text-gray-600 font-light">
                Automate repetitive tasks with smart workflows. Use canned
                responses, automated ticket assignments,
              </p>
            </div>
            <div className="flex items-center bg-gradient-to-r from-indigo-600 to-violet-600 border border-indigo-600 p-10 rounded-2xl">
              <div className="mx-auto flex flex-col lg:flex-row gap-10">
                <div className="max-w-xl text-3xl lg:col-span-7">
                  <h2 className="text-white text-xl lg:text-3xl font-semibold tracking-tight mb-4">
                    Unified Inbox
                  </h2>
                  <p className="text-base text-white font-light">
                    Manage all customer communications from a single dashboard.
                    Emails, chats, and social media messages are consolidated
                    for easy access and efficient handling.
                  </p>
                </div>
                <div className="w-full max-w-md lg:col-span-5 lg:my-auto flex lg:justify-end">
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
              className="rounded-[20px] p-8 hover:bg-[#f6fcf8] hover:shadow-none shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all"
            >
              <SvgIcon name='insights' className="mb-5 h-10 w-10 " viewBox="0 0 50 50" />
              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none lg:text-xl text-gray-700">
                Customer Insights
              </h1>

              <p className="mx-auto text-base  text-gray-600 font-light">
                Access detailed customer profiles, including order history and
                previous interactions, directly.
              </p>
            </div>
            <div
              className="rounded-[20px] p-8  hover:shadow-none shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all hover:bg-[#fff9f9]"
            >
              <SvgIcon name='collabrative' className="mb-5 h-10 w-10 " viewBox="0 0 50 50" />
              <h1 className="mx-auto mb-4 font-semibold leading-none  text-xl text-gray-700">
                Collaborative Tools
              </h1>

              <p className="mx-auto text-base text-gray-600 font-light">
                Enhance team collaboration with internal notes and ticket
                assignments. Ensure that every inquiry{" "}
              </p>
            </div>
            <div
              className="rounded-[20px] p-8 hover:shadow-none shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all hover:bg-[#f6fcf8]"
            >
              <SvgIcon name='analytics' className="mb-5 h-10 w-10 " viewBox="0 0 50 50" />

              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none lg:text-xl text-gray-700">
                Performance Analytics
              </h1>
              <p className="mx-auto text-base  text-gray-600 font-light">
                Monitor key support metrics like response times, resolution
                rates, and customer satisfaction scores.
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
        <div className="mx-auto py-12 lg:py-16 text-center lg:px-0 px-8">
          <div className="flex justify-center">
            <div className="lg:w-10/12 xl:w-9/12 2xl:w-8/12 mx-auto text-center">
              <h3 className="section-title mb-6">
                Revolutionize Your Customer Support Experience
              </h3>
              <p className="max-w-3xl mx-auto section-description">
                Reacho's Helpdesk is a powerful, yet completely free tool
                designed to simplify your customer support operations. Tailored
                for eCommerce brands that refuse to compromise on quality, our
                Helpdesk ensures you can provide top-notch support without
                worrying about escalating costs.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://app.reacho.com/signup"
                  className="border rounded-md bg-red-500 px-16 py-2.5 text-lg font-medium text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-12 pb-20">
        <div className="container">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div
              className="lg:mr-auto lg:pr-4"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="lg:max-w-lg">
                <h2 className="section-title">
                  Customer support made easy
                </h2>
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
                    src="/assets/images/home-page/customer-support/support1.png"
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

      <section className="container overflow-hidden">
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
              src="/assets/images/helpdesk/benifits-of-helpdesk.png"
            />
          </div>
          <div
            className="flex flex-col items-start gap-[35px]"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div>
              <h2 className="section-title text-start">
                Benefits of Using Our Helpdesk
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
                  Improve Response Times:
                </span>{" "}
                Handle customer inquiries swiftly with organized workflows and automation.
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
                  Enhance Customer Satisfaction:
                </span>{" "}
                Deliver consistent, high-quality support that exceeds customer expectations.
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
                  Reduce Workload:
                </span>{" "}
                Automate routine tasks to allow your team to focus on complex issues.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="container">
          <div className="flex flex-wrap mx-[-15px] items-center gap-y-10">
            <div
              className="xl:w-6/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="card rounded-2xl border-none !bg-[#edf2fc]">
                <figure>
                  <a href="#">
                    <img
                      src="/assets/images/helpdesk/support.png"
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
              <h2 className="section-title">
                Quality Support
              </h2>
              <p className="mt-6 section-description">
                Other platforms charge you more as your support volume grows,
                effectively penalizing you for your success. With Reacho, you
                can provide.
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
                  Competitive salaries
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
                  Flexible work hours
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
                  30 days of paid vacation
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
              <div className="card rounded-2xl border-none !bg-[#edf2fc]">
                <figure>
                  <a href="#">
                    <img
                      src="assets/images/helpdesk/support-movement.png"
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
              <h2 className="section-title">
                Support Movement
              </h2>
              <p className="mt-6 section-description">
                Hundreds of eCommerce brands have already transformed their
                customer service with Reacho's Helpdesk. Don't let costs hinder
                you from delivering.
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
                  Competitive salaries
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
                  Flexible work hours
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
                  30 days of paid vacation
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
