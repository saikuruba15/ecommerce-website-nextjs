import React from 'react';

interface HeroSectionProps {
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    stats: Array<{
        value: string | number;
        label: string;
    }>;
    imageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
    stats,
    imageSrc,
}) => {
    return (
        <section className="bg-[#f9fafb] dark:text-gray-800 p-[80px_15px_80px]">
            <div className="container mx-auto">
                <div className="hero-block-one flex items-start text-center lg:text-start flex-col lg:flex-row pt-3 gap-x-12 gap-y-12 lg:gap-y-5">
                    {/* Left Content */}
                    <div className="flex flex-col items-start text-center lg:text-start">
                        <div>
                            <h1 className="hero-title mb-5 lg:pr-7 pt-8">{title}</h1>
                            <p className="hero-description mb-10 lg:pr-7">
                                {description}
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start pb-10">
                                <a
                                    rel="noopener noreferrer"
                                    href={primaryButtonLink}
                                    className="px-8 py-3 text-lg font-medium rounded-md bg-danger text-white"
                                >
                                    {primaryButtonText}
                                </a>
                                {secondaryButtonText && secondaryButtonLink && (
                                    <a
                                        rel="noopener noreferrer"
                                        href={secondaryButtonLink}
                                        className="px-8 py-3 text-lg font-light rounded border border-gray-800 text-gray-800 hidden"
                                    >
                                        {secondaryButtonText}
                                    </a>
                                )}
                            </div>
                            <div className="grid lg:grid-cols-2 lg:gap-y-[40px] gap-y-[10px] gap-x-[40px] border-t border-[#6f6f6f] lg:justify-start justify-center lg:w-[88%] w-full pt-5">
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                        <h2 className="percentage-number text-[#19191d] mt-4 mb-3 text-4xl sm:text-5xl font-semibold sm:leading-[3.4375rem]">
                                            {stat.value}
                                        </h2>
                                        <p className="text-[#6b6b6b] font-light text-base leading-[1.75rem] lg:w-[60%] w-full">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="flex justify-center items-start w-full pb-0 pl-0 lg:pl-[57px] relative">
                        <div className="pl-0 overflow-hidden">
                            <img
                                src={imageSrc}
                                alt="Hero Section"
                                className="object-contain h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
