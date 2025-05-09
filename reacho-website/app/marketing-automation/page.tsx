
import React from "react";
import HomeCta from "@/components/home-cta";
import HomeFooter from "@/components/home-footer";
import HomeNavbar from "@/components/home-navbar";
import "../home.css";


import { Metadata } from "next";
import Awards from "@/components/awards";
import Clients from "@/components/clients";


export const metadata: Metadata = {
  title: "World’s First Free eCommerce Support Automation | Reacho",
  description:
    "Streamline and automate your eCommerce support with Reacho’s powerful automation features for free!",
};

const features = [
  {
    name: " Workflows That Work for You",
    description: "From ticket assignments to quick replies, let automation handle the busywork.",
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
    name: "Integrated, Limitless Support",
    description:
      "Automate across email, chat, and social platforms with no extra costs or limits.",
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
      <section className="bg-[#f9fafb] dark:text-gray-800 lg:p-[80px_15px_80px] py-[80px] overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 auto-rows-auto gap-x-[10px] gap-y-[20px] lg:pt-[50px] pt-30">
            <div className="flex flex-col items-start text-center lg:text-start">
              <div>
                <h1 className="hero-title mb-5 lg:pr-7 pt-8">
                  Cut 80% of Repetitive Tasks
                </h1>
                <p className="hero-description mb-10 lg:pr-7 ">
                  Automate your support with Reacho’s advanced workflows for free!
                </p>

                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start  pb-10">
                  <a
                    rel="noopener noreferrer"
                    href="https://app.reacho.com/signup"
                    className="px-8 py-3 text-lg font-medium rounded-md bg-danger text-white"
                  >
                    Get Started
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-light rounded border border-gray-800 text-gray-800 hidden"
                  >
                    Our Features
                  </a>
                </div>
                <div className="grid lg:grid-cols-2 lg:gap-y-[40px] gap-y-[10px] gap-x-[40px] border-t border-[#6f6f6f] lg:justify-start justify-center lg:w-[88%] w-full pt-5">
                  <div>
                    <h2 className="percentage-number text-[#19191d] mt-4 mb-3 text-4xl sm:text-5xl font-semibold sm:leading-[3.4375rem]">
                      41%
                    </h2>
                    <p className="text-[#6b6b6b]  font-light text-base leading-[1.75rem] lg:w-[60%] w-full">
                      Reduction in Ticket Volume{" "}
                    </p>
                  </div>
                  <div>
                    <h2 className="percentage-number text-[#19191d] mt-4 mb-3 text-4xl sm:text-5xl font-semibold sm:leading-[3.4375rem]">
                      100%{" "}
                    </h2>
                    <p className="text-[#6b6b6b] font-light text-base leading-[1.75rem] lg:w-[60%] w-full">
                      {" "}
                      Savings in Support Software Cost
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-start w-full pb-0 l:pl-[57px] pl-0 relative">
              <div className="help-desk-banner relative">
                <div className="help-desk-image">
                  <img src="/assets/images/automation/hero.png" alt="" className="w-full" sizes="(max-width: 479px) 81vw, (max-width: 767px) 74vw, (max-width: 991px) 778px, (max-width: 1051px) 74vw, (max-width: 1439px) 31vw, 417.375px" />
                </div>
                <div className="rounded-[20px] w-[47%] absolute border left-auto right-0 bottom-0 overflow-hidden aos-init" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">

                  <img src="/assets/images/automation/hero1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Clients />
      <section className="bg-[#3F53D8]">
        <div className="relative items-center w-full px-5 py-16 mx-auto md:px-4 container">
          <h2
            className="section-title !text-white  mb-5 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Meet Your Newest Agent: Reacho

          </h2>
          <p className="pb-4  section-description text-center max-w-4xl mx-auto !text-white font-light">
            Let Reacho handle routine interactions. Let your team focus on what matters—delighting your customers.
          </p>
          <div className="grid w-full grid-cols-1 gap-4 lg:gap-9 mx-auto lg:grid-cols-3 py-10 font-light">
            <div
              className="rounded-[20px] text-center pt-[50px] pb-[40px] px-[30px] bg-[#5F70E3] block shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:bg-[#fff9f9] text-white hover:text-gray-800"
              style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08)" }}
            >
              <img
                className="mb-5 mx-auto"
                src="/assets/images/marketing.svg"
              />
              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none lg:text-xl">
                Omni-channel Automation
              </h1>

              <p className="mx-auto text-base">
                Handle customer inquiries in one place—automate tasks, stay synced, keep it simple.</p>
            </div>
            <div
              className="rounded-[20px] pt-[50px] pb-[40px] px-[30px]  bg-[#5F70E3] hover:bg-[#f2f8fc] text-center text-white hover:text-gray-800"
              style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08)" }}
            >
              <img
                className="mb-5 mx-auto"
                src="/assets/images/marketing1.svg"
              />
              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none lg:text-xl">
                Smart Workflows
              </h1>

              <p className="mx-auto text-base">
                Offer real-time support with smart workflows. Get automated replies and instant ticket routing with zero delays.
              </p>
            </div>
            <div
              className="rounded-[20px] pt-[50px] pb-[40px] px-[30px] hover:bg-[#f6fcf8] bg-[#5F70E3] text-center text-white hover:text-gray-800"
              style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08)" }}
            >
              <img
                className="mb-5 mx-auto"
                src="/assets/images/marketing2.svg"
              />
              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none lg:text-xl">
                Easy to Scale
              </h1>

              <p className="mx-auto text-base">
                Use detailed customer insights to personalize automated replies and build trust with every interaction.</p>
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
        <div className="mx-auto py-16 text-center lg:px-0 px-8">
          <div className="flex justify-center">
            <div className="lg:w-10/12 xl:w-9/12 2xl:w-8/12 mx-auto text-center">
              <h3 className="section-title  mb-6">
                World’s #1 Free eCommerce Support Automation
              </h3>
              <p className="section-description">
                Reacho Automation gives you the power to automate support workflows without the cost. Built for eCommerce brands that refuse to compromise, Reacho scales with your business for free.

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

      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto container px-4">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div
              className="lg:mr-auto lg:pr-4"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="lg:max-w-lg">
                <div className="lg:text-start text-center">
                  <h2 className="section-title">
                    Workflows That Work for You
                  </h2>
                  <p className="section-description mt-5 mb-5">
                    Automate routine tasks, save time and keep your customer service sharp across all platforms.
                  </p>
                </div>
                <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                </dl>
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
            <div className="flex items-start justify-end w-full ml-auto">
              <div className="customer-support-feature-hero-banner relative pl-[60px]">
                <div className="customer-support-girl-image w-full">
                  <img
                    src="/assets/images/home-page/customer-support/support2.png"
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
      <section className="container overflow-hidden mx-auto px-4 lg:pb-24 pb-20">
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
              src="/assets/images/automation/benefits-of-automation.png"
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
                Benefits of Using Our Automation
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
                  Save Time:
                </span>{" "}
                Automate routine support tasks and focus on more complex customer interactions.
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
                  Boost Efficiency:
                </span>{" "}
                Streamline your processes and reduce the time spent managing tickets.
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
                  Personalize support:
                </span>{" "}
                Automate responses while maintaining personalized, thoughtful customer service.
              </p>
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