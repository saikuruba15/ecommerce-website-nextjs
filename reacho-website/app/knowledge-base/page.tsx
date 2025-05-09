
import React from "react";
import HomeCta from "@/components/home-cta";
import HomeFooter from "@/components/home-footer";
import HomeNavbar from "@/components/home-navbar";
import "../home.css";

import { Metadata } from "next";
import Awards from "@/components/awards";
import Clients from "@/components/clients";


export const metadata: Metadata = {
    title: "World’s First Free eCommerce Knowledge Base | Reacho",
    description:
        "Provide customers with instant answers through Reacho Knowledge Base. Reduce support requests with a self-service solution that’s easy to manage.",
};

const features = [
    {
        name: "Unlimited Articles, Instant Access",
        description: "Customers can browse without restrictions—get them the information they need, anytime.",
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
        name: "User-Friendly and Protected",
        description:
            "Easily create and organize your content with a simple interface, backed by strong data security.",
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
                                <h1 className="hero-title mt-[20px] mb-[36px]">
                                    Unlock the Power of Self-Service
                                </h1>
                                <p className="hero-description mb-10 lg:pr-7 ">
                                    How does ‘zero wait time’ sound? Let your customers resolve issues on their own—for free
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
                                    <img
                                        src="/assets/images/knowledge-base/image-hero.png"
                                        alt=""
                                        className="w-full"
                                        sizes="(max-width: 479px) 81vw, (max-width: 767px) 74vw, (max-width: 991px) 778px, (max-width: 1051px) 74vw, (max-width: 1439px) 31vw, 417.375px"
                                    />
                                </div>
                                <div
                                    className="rounded-[20px] w-1/3 absolute top-[90px] left-0 overflow-hidden"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                    data-aos-delay="100"
                                >
                                    <img src="/assets/images/knowledge-base/image-hero-top.png" />
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
                        Free Your Team’s Hands

                    </h2>
                    <p className="section-description text-center max-w-4xl mx-auto !text-white ">
                        Reacho’s Knowledge Base gives your customers instant answers while your team takes a breather–for free.
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
                                Content Management
                            </h1>

                            <p className="mx-auto text-base">
                                Keep content fresh—add, update, or remove articles in just a few clicks.</p>
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
                                All-in-One Solution
                            </h1>

                            <p className="mx-auto text-base">
                                Part of Reacho’s support system—integrate with Reacho’s helpdesk, live chat, and automation tools.
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
                                Purpose-Built
                            </h1>

                            <p className="mx-auto text-base">
                                Reacho is built from the ground up for eCommerce businesses. Say goodbye to generic tools.</p>
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
                            <h3 className="section-title mb-6">
                                A Self-Service Revolution
                            </h3>
                            <p className="text-lg max-w-3xl mx-auto section-description">
                                Reacho’s Helpdesk is the only tool for delivering fast, efficient support completely free. Built for eCommerce brands that demand excellence, Reacho helps you offer seamless, scalable support.


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
                <div className="mx-auto container">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
                        <div
                            className="lg:mr-auto lg:pr-4"
                            data-aos="fade-up"
                            data-aos-duration="500"
                        >
                            <div className="lg:max-w-lg">
                                <div className="lg:text-start text-center">
                                    <h2 className="section-title">
                                        Why Choose Reacho Knowledge Base?
                                    </h2>
                                    <p className="section-description">
                                        Give your customers instant answers while you grow without limits or added costs.
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
                                                <p className="font-light text-gray-600">
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
                                        src="/assets/images/home-page/customer-support/support3.png"
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
            <section className="container px-4 mx-auto pb-24 overflow-hidden">
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
                            src="/assets/images/knowledge-base/benifits-of-knowledge-base.png"
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
                                What Sets Our Knowledge Base Apart?
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
                                    Faster Resolutions:
                                </span>{" "}
                                Provide immediate access to solutions, cutting down response times and frustration.
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
                                    Boost Customer Confidence:
                                </span>{" "}
                                When customers can easily find answers, their confidence in your brand skyrockets.
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
            <section className="mt-[200px] mb-0 px-[15px] pb-[150px] pt-[20px] block hidden">
                <div className="reacho-home-page-free-main-block home-two-footer home-three bg-image">
                    <div className="reacho-home-page-footer-text-block">
                        <h2 className="reacho-home-page-heading">
                            Experience the world’s first eCommerce support automation platform
                        </h2>
                    </div>
                    <div className="reacho-home-page-footer-button-block">
                        <p className="reacho-footer-button-paragraph text-xl text-gray-600 font-light">
                            Maximize your team’s potential with automated support workflows that save time, boost efficiency, and scale effortlessly.

                        </p>
                        <div className="reacho-home-page-button-block-two">
                            <a
                                data-w-id="006aa733-6714-cb4f-c4f8-9c83a98aff75"
                                href="/demo"
                                className="!bg-white !text-gray-700 reacho-home-page-trial-button home-four-start-free-trial trial-button-two w-inline-block"
                            >
                                <div className="trail-text-one home-four-text text-two">
                                    Start Now
                                </div>
                            </a>
                            <a className="reacho-home-page-trial-button feature-button home-four-feature contact-us-button w-inline-block">
                                <div className=" text-white trail-text-one home-four-text-two contact-us-text">
                                    Contact Us
                                </div>
                            </a>
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