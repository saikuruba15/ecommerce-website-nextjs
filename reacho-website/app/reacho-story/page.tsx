
import Head from "next/head";
import React from "react";
import { Metadata } from "next";

import HomeFooter from "@/components/home-footer";
import HomeNavbar from "@/components/home-navbar";
import "../home.css";
import Testimonials1 from "@/components/testmonials";
import Affordable from "@/components/affordable-crm";


export const metadata: Metadata = {
  title: "Pricing | Reacho",
  description:
    "Explore Reacho's Terms of Use to understand the guidelines, limitations, and legal considerations that govern the use of our ecommerce helpdesk services.",
};

const page = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="It all started with a simple question 'Do you guys have plans to build a customer support suite for eCommerce'"
        />
        <meta name="keywords" content="next.js, seo, meta tags" />
        <meta name="author" content="Your Name" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://example.com/styles.css" />
      </Head>
      <HomeNavbar />

      <div className="main_content">
        <div className="section-pricing pricing-v5-hero">
          <div className="container-fluid px-4 relative pricing-v5-hero-inner">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-[20px] text-center">
                <h2 className="pricing-v5-heading section-title mb-1">
                  Zero Fees. Zero Hassle.
                </h2>
                <p className="pricing-v5-subheading section-description text-center mb-5">
                  A powerful helpdesk and other eCommerce support tools – free for life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-v5-table-container">
          <div className="pricing-v5-curve-bg"></div>
          <div className="pricing-v5-monthly-or-annual-selector-container">
          </div>
          <div className="pricing-results-slider">
            <div className="pricing-calculator pricing-calculator--slider">
              <div className="pricing-calculator_blank js-pricing-blank">
                <div className="pricing-calculator_body">
                  <h5 className="pricing-calculator_amount">$0</h5>
                  <div className="pricing-calculator_period">
                    Your cost, every month
                  </div>
                </div>
                <p className="pricing-calculator_desc">
                  We believe nobody should have to pay to support their customers.
                </p>
                <a
                  href="https://app.reacho.com/signup"
                  className="cta-btn cta-btn--default cta-btn--huge js-signup"
                  data-track="Click"
                  data-category="Signup Button"
                  data-label="Calculator Free Plan"
                >
                  <span className="cta-btn_label">Get Started</span>
                  <span className="cta-btn_sub-label">
                    No credit card required
                  </span>
                </a>
              </div>
            </div>

            <div className="pricing-core-features">
              <h3>What do you get?</h3>
              <p>
                Just because it’s free doesn’t mean it’s basic. Here’s what you’ll get:
              </p>
              <ul>
                <li className="pricing-feature-check pricing-feature-check--core">
                  Omnichannel support
                </li>
                <li className="pricing-feature-check pricing-feature-check--core">
                  Shared unified inbox
                </li>
                <li className="pricing-feature-check pricing-feature-check--core">
                  Any eCommerce platform
                </li>
                <li className="pricing-feature-check pricing-feature-check--core">
                  In-depth analytics & revenue stats
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto p-4">
          <div className="max-w-[44rem] mx-auto font-light">
            <h1 className="lg:text-4xl text-3xl font-bold  text-center text-gray-900 lg:pt-16 lg:pb-14 py-10 mt-10">
              The Story Behind Reacho
            </h1>
            <section className="mb-12 max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-6">
              <p className="text-gray-700 pb-[20px]">
                It all started with a simple question:{" "}
                <span className="italic">
                  "Do you guys have plans to build a customer support suite
                  for eCommerce?"
                </span>
              </p>
              <img
                src="/assets/images/mail-ui.png"
                className="border rounded-xl p-6 my-4 mx-auto"
              />
              <p className="text-gray-700 pt-[20px] pb-4">
                At first, we thought it was just a one-off request. But the
                questions kept coming in. As the team behind EngageBay, used
                by over 200,000 businesses, we couldn't help but wonder why
                eCommerce brands were so eager for another customer support
                tool. After all, there’s already plenty out there, with
                Gorgias leading the way. What were we missing?
              </p>

              <p className="text-gray-700 font-medium text-xl py-3">
                Perspective
              </p>

              <p className="text-gray-700">
                When the truth hit us, it was shocking: eCommerce brands are
                spending thousands of dollars{" "}
                <span className="italic">every single month</span> for
                customer support software with a few built-in automations.
              </p>
              <p className="text-gray-700 text-base py-3">
                That's daylight robbery! 😅
              </p>

              <p className="text-gray-700 pb-3">
                It didn’t take long for us to decide. We got our best
                engineers together, gave them all the resources they needed
                (yes, including Ramen!), and started building Reacho from the
                ground up. After weeks of testing, it became clear that it was
                time for the legacy systems to make way for something better.
              </p>

              <p className="text-gray-700 py-3">
                <span className="font-medium text-base">
                  Why is Reacho free?
                </span>{" "}
                Because no business should be forced to pay for customer
                support software. EngageBay always provided free customer
                support tools, but Reacho is built exclusively for eCommerce
                stores — and it will stay free forever.
              </p>

              <p className="text-gray-700 py-3">
                We’ve built it with the same depth as some of the top tools
                out there like Gorgias, minus all the costly extras. Sure, we
                don’t have every integration yet, but we’re working on it,
                burning the midnight oil to make Reacho even better.
              </p>
              <p className="text-gray-700 pt-3">
                So, why pay for something that should be free? Give Reacho a
                try, and let us know what you think. We built it for you,
                after all. 🙂
              </p>
            </section>
          </div>
        </div>
      </div>
      {/* <Testimonials1 /> */}
      {/* <Affordable /> */}
      <HomeFooter />
    </div>
  );
};

export default page;
