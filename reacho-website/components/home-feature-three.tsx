"use client";
import React, { Fragment } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const tabs = [
  {
    name: "Design",
    icon: "https://deski-tailwindcss.ibthemespro.com/images/icon/105.svg",
    features: [
      {
        name: "Motation Tracking",
        description:
          "From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.",
        imageSrc:
          "https://deski-tailwindcss.ibthemespro.com/images/media/img_81.png",
        imageAlt:
          "Maple organizer base with slots, supporting white polycarbonate trays of various sizes.",
        rippleText: "Track Human faces",
      },
    ],
  },
  {
    name: "Material",
    icon: "https://deski-tailwindcss.ibthemespro.com/images/icon/106.svg",
    features: [
      {
        name: "Keyframing",
        description:
          "From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.",
        imageSrc:
          "https://deski-tailwindcss.ibthemespro.com/images/media/img_92.png",
        imageAlt:
          "Walnut organizer base with pen, sticky note, phone, and bin.",
        rippleText: "keyframing experience",
      },
    ],
  },
  {
    name: "Considerations",
    icon: "https://deski-tailwindcss.ibthemespro.com/images/icon/107.svg",
    features: [
      {
        name: "Audio Ducking",
        description:
          "From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.",
        imageSrc:
          "https://deski-tailwindcss.ibthemespro.com/images/media/img_93.png",
        imageAlt: "Walnut organizer base with white utensils.",
        rippleText: "Audio track down",
      },
    ],
  },
  {
    name: "Included",
    icon: "https://deski-tailwindcss.ibthemespro.com/images/icon/108.svg",
    features: [
      {
        name: "Color Matching",
        description:
          "From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.",
        imageSrc:
          "https://deski-tailwindcss.ibthemespro.com/images/media/img_94.png",
        imageAlt:
          "Walnut organizer system on black leather desk mat on top of white desk.",
        rippleText: "Take the color",
      },
    ],
  },
  {
    name: "Material",
    icon: "https://deski-tailwindcss.ibthemespro.com/images/icon/109.svg",
    features: [
      {
        name: "4K Editing Support",
        description:
          "From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.",
        imageSrc:
          "https://deski-tailwindcss.ibthemespro.com/images/media/img_95.png",
        imageAlt: "Walnut organizer base with pen, sticky note attachment.",
        rippleText: "Edit videos at up to 4K",
      },
    ],
  },
  {
    name: "Considerations",
    icon: "https://deski-tailwindcss.ibthemespro.com/images/icon/110.svg",
    features: [
      {
        name: "Noise Removal",
        description:
          "From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.",
        imageSrc:
          "https://deski-tailwindcss.ibthemespro.com/images/media/img_96.png",
        imageAlt:
          "Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.",
        rippleText: "Remove unwanted noise",
      },
    ],
  },
  {
    name: "Included",
    icon: "https://deski-tailwindcss.ibthemespro.com/images/icon/111.svg",
    features: [
      {
        name: "Picture in Picture (PIP)",
        description:
          "From its medieval origins to the digital earn everything there is to know about the ubi lorem ipsum passage.",
        imageSrc:
          "https://deski-tailwindcss.ibthemespro.com/images/media/img_97.png",
        imageAlt:
          "Walnut organizer system on black leather desk mat on top of white desk.",
        rippleText: "Layer multiple video clips",
      },
    ],
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeFeatureThree() {
  return (
    <>
      <div className="fancy-feature-eighteen md:mt-0 sm:mt-20 xsm:mt-20  relative z-[1] pt-[120px] pb-[150px] px-[15px] bg-[#f3f8ff] scroll-target">
        <div className="container">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-9/12 xl:basis-9/12 lg:w-9/12 lg:basis-9/12 md:w-full md:basis-full sm:w-full sm:basis-full  xsm:w-full xsm:basis-full relative px-[15px] m-auto">
              <div className="title-style-eight text-center" data-aos="fade-up">
                <h2 className="text-6xl font-semibold leading-[1.1em]">
                  Build with <br className="hidden lg:block" /> 800+ Stunning
                  Effects
                </h2>
                <p className="font-light text-[24px] text-black pt-8">
                  Rotate, merge, trim, split, crop and flip videos with a modern
                  &amp; simple ui
                </p>
              </div>
            </div>
          </div>
        </div>

        <TabGroup>
          <div className="-mx-4 flex overflow-x-auto sm:mx-0">
            <div className="flex-auto px-4 sm:px-0 container mt-6 mb-10">
              <TabList
                className="space-x-10 nav nav-tabs justify-center mt-[90px] mb-[70px] mx-0 border-[none] flex flex-wrap md:m-[50px_0_40px] sm:m-[50px_0_40px] xsm:m-[50px_0_40px]"
                data-aos="fade-up"
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? "border-indigo-5001 text-indigo-600 bg-white shadow"
                          : "border-[none]",
                        "relative w-[90px] h-[90px] mx-[22px] my-2.5 p-2.5 rounded-[15px] flex items-center flex-col justify-center focus:outline-none"
                      )
                    }
                  >
                    <img
                      src={tab.icon}
                      alt="icon"
                      className="current tran3s"
                    ></img>
                    {/* {tab.name} */}
                  </Tab>
                ))}
              </TabList>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <TabPanels as={Fragment}>
              {tabs.map((tab) => (
                <TabPanel
                  key={tab.name}
                  className="space-y-16 pt-10 lg:pt-0 6tab-content max-w-[1450px] shadow-[0_40px_100px_rgba(14,33,44,0.05)] overflow-hidden m-[0_auto] rounded-[20px] bg-white"
                >
                  {tab.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex flex-wrap  no-gutters mx-0 items-center"
                    >
                      <div className="xl:w-6/12 xl:basis-6/12 lg:w-6/12 lg:basis-6/12 md:w-6/12 md:basis-6/12 sm:w-full sm:basis-full  xsm:w-full xsm:basis-full relative px-0">
                        <div className="img-holder relative">
                          <img
                            src={feature.imageSrc}
                            alt={feature.imageAlt}
                            className="object-cover object-center"
                          />
                          <div className="ripple-box  w-[385px] h-40 text-white text-[28px] font-medium absolute -translate-x-2/4 -translate-y-2/4 border-[3px] border-solid border-white left-2/4 top-2/4 before:content-[''] before:absolute before:w-[3px] before:h-10 before:left-[-3px] before:-top-10 after:content-[''] after:absolute after:w-10 after:h-[3px] after:top-[-3px] after:-left-10 before:bg-white after:bg-white flex items-center justify-center xsm:w-4/5 h-[70%] xsm:text-[20px] xsm:bg-[#00000033]">
                            <p className=" text-[24px] leading-[1.83em]">
                              {feature.rippleText}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="xl:w-6/12 xl:basis-6/12 lg:w-6/12 lg:basis-6/12 md:w-6/12 md:basis-6/12 sm:w-full sm:basis-full  xsm:w-full xsm:basis-full relative px-0">
                        <div className="text-wrapper px-20 py-10">
                          <h4 className="text-[38px] font-semibold pb-8">
                            {feature.name}
                          </h4>
                          <p className="text-[26px] leading-[1.83em] text-black font-light">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </div>
        </TabGroup>
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/175.svg"
          alt=""
          className="shapes shape-right absolute z-[-1] w-[13.35%] animate-[fade-in_1.5s_infinite_linear] right-0 bottom-[4%]"
        />
        <img
          src="https://deski-tailwindcss.ibthemespro.com/images/shape/176.svg"
          alt=""
          className="shapes shape-left absolute z-[-1] w-[13%] animate-[fade-in-rev_1.5s_infinite_linear] left-0 bottom-[8%]"
        />
      </div>
    </>
  );
}
