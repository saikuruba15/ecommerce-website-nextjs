import React from "react";

export default function HomeAutomation() {
    return (
        <div className="relative overflow-hidden px-6 lg:px-8 py-16 sm:py-32 bg-gray-50">
            {/* <div className="absolute top-0 z-0 object-cover object-center w-full h-full">
        <img
          src="/assets/images/home-automation-bg.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div> */}
            <div className="relative w-full max-w-6xl mx-auto">
                <div className="pb-14 sm:pb-20 text-center" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-6xl !leading-tight mb-5 md:mb-8 font-bold">
                        Marketing Automation For 10x Growth
                    </h2>
                    <div className="font-light relative z-10 text-base sm:text-xl !leading-8 xl:px-32">
                        <p>
                            Harness the power of customer behavior insights to skyrocket your sales. Our marketing automation drives a 10X growth by tailoring campaigns to your store's unique data.
                        </p>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    className="relative mx-auto flex min-h-[250px] w-full sm:items-center gap-5 gap-y-6 rounded-xl sm:min-h-[400px] md:min-h-[561px]"
                >
                    <div className="absolute inset-0 w-full">
                        <img
                            src="/assets/images/automation06.png"
                            alt=""
                            className="h-full w-full rounded-xl object-cover object-center"
                        />
                    </div>
                    <div className="relative mx-auto w-full pl-10 pt-10 sm:pl-44 sm:pt-44 pb-4 pr-4 sm:pb-8 sm:pr-8">
                        <img
                            className="w-full h-full rounded-xl"
                            src="/assets/images/home-automation.png"
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
