"use client";
import React, { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";

type Tab = "gorgias" | "zendesk" | "shopify";

const imageMap: Record<Tab, string> = {
  gorgias: "/assets/images/tab/gorgias-tab.png", // Image for "tab1"
  zendesk: "/assets/images/tab/zendesk-tab.png", // Image for "tab2"
  shopify: "/assets/images/tab/shopify-tab.png", // Image for "tab3"
};

const tabData: Record<
  Tab,
  { content: string; image: string; listItems: string[] }
> = {
  gorgias: {
    content: "Gorgias’s pricing may surprise you. Reacho helps you scale.",
    listItems: [
      "Gorgias’ usage-based pricing is hard to manage, while Reacho offers a free solution.",
      "Gorgias lacks detailed reporting, but Reacho provides customizable reports for better insights.",
      "Gorgias is easy to set up, but can be overwhelming to use.",
    ],
    image: "/assets/images/tab/gorgias.png",
  },
  zendesk: {
    content: "Zendesk is for everybody. Reacho is built for eCommerce.",
    listItems: [
      " Zendesk is pricey, with costly add-ons, while Reacho is free.",
      "Zendesk is not specifically tailored for eCommerce businesses, unlike Reacho.",
      "Zendesk’s interface is not the best. Reacho offers a simpler, more user-friendly experience.",
    ],
    image: "/assets/images/tab/zendesk.webp",
  },
  shopify: {
    content: "Shopify Inbox is basic. Go limitless with Reacho.",
    listItems: [
      "Shopify Inbox is for chats within Shopify. Reacho integrates email, social media, and SMS.",
      "Shopify Inbox lacks advanced tools. Reacho offers a full suite of sophisticated features.",
      "Shopify Inbox has only simple automations. Reacho offers complex workflows, free.",
    ],
    image: "/assets/images/tab/shopify.webp",
  },
};

export default function HomeTabSection() {
  const [activeTab, setActiveTab] = useState<Tab>("gorgias");

  return (
    <>
      {/*  Inerchanged the  tabs and images */}
      <section className="comparison-section pb-20 lg:pb-44">
        <div className="container mx-auto">
          <div className="w-full lg:pb-4 py-0">
            <div className="w-full pb-8 sm:pb-10 pt-6" data-aos="fade-up">
              <h2 className="section-title text-center">
                Why Reacho Beats the Competition
              </h2>
              <div className="section-description mt-6 mb-5 relative z-10 text-center">
                <p>
                  Reacho offers more features and flexibility than other
                  platforms. See how.
                </p>
              </div>
            </div>
            {/* Tab Buttons */}

            {/* Content and Image */}
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-full md:w-1/2 lg:pl-10 pl-0 order-2">
                <div className="flex border-b border-gray-300 w-full items-end mr-auto justify-start">
                  {Object.keys(tabData).map((tab) => (
                    <button
                      key={tab}
                      className={`text-tiny sm:text-base lg:py-6 lg:px-10 px-3 md:px-5 py-3 flex flex-col gap-y-2.5 sm:gap-y-4 items-center text-center font-normal border-b-[3px] border-transparent ${activeTab === tab
                        ? " text-[#004e96]  !border-[#004e96]"
                        : " text-[#7d8ba1]"
                        }`}
                      onClick={() => setActiveTab(tab as Tab)} // Type assertion to ensure tab is treated as a valid Tab
                    >
                      <img
                        src={imageMap[tab as Tab]}
                        alt={`${tab} icon`}
                        className="w-6 h-6 sm:w-8 sm:h-8 text-center rounded-md"
                      />{" "}
                      {/* Render the image */}
                      {`vs ${tab.charAt(0).toUpperCase() + tab.slice(1)}`}
                    </button>
                  ))}
                </div>
                <h5 className="my-6 md:my-8 text-xl sm:text-[2rem] font-medium leading-7 lg:leading-[2.4rem]">
                  {tabData[activeTab].content}
                </h5>
                <ul className="p-0 m-0 list-none">
                  {tabData[activeTab].listItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start mb-3.5 md:mb-8 text-sm sm:text-lg font-light leading-[1.45] gap-x-3 sm:gap-x-4"
                    >
                      <img
                        src="/assets/images/icons/blue-outline.svg"
                        loading="lazy"
                        alt="Checked Icon White"
                        className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 relative order-2 md:order-1 mt-8 md:mt-0">
                <img
                  src={tabData[activeTab].image}
                  alt={`${activeTab} image`}
                  className="w-full md:absolute md:top-0"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 87vw, 46vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
