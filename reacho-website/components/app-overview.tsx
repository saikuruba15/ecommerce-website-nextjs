"use client";
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import {
  AcademicCapIcon,
  BellIcon,
  BriefcaseIcon,
  CalculatorIcon,
  ChartBarIcon,
  ChatBubbleLeftEllipsisIcon,
  CircleStackIcon,
  CogIcon,
  DocumentChartBarIcon,
  DocumentTextIcon,
  HandRaisedIcon,
  PhoneArrowDownLeftIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

// Define an array of objects for the appList
const appList = [
  {
    name: "default",
    icon: <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/1JmNRUD3PnpVshQ9mhokoB/badb4592cfea4673f343d145baab0b4b/pre-built_reports.webp?&q=90&w=1512",
  },
  {
    name: "Unified Inbox",
    icon: <BellIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/6ntXe4YLoBfuUbvltLhhTt/a5a92491ac4b133bc48971f8b772c0d6/workload_management.webp?&q=90&w=1512",
  },
  {
    name: "Send Emails",
    icon: <AcademicCapIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/5TPhCZhKSPK3NjX5DTkXI7/f7af90b0f3693dfa291a59c257f46ff8/macros.webp?&q=90&w=1512",
  },
  {
    name: "Send SMS",
    icon: <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/2AQzA2JYkR7opXSAv1Rsyn/e89be94d6a028e2483639d06a150bd48/workflows_for_fin.webp?&q=90&w=1512",
  },
  {
    name: "WhatsApp Messaging",
    icon: <CircleStackIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/6ntXe4YLoBfuUbvltLhhTt/a5a92491ac4b133bc48971f8b772c0d6/workload_management.webp?&q=90&w=1512",
  },
  {
    name: "Help Desk",
    icon: <UserIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/5TPhCZhKSPK3NjX5DTkXI7/f7af90b0f3693dfa291a59c257f46ff8/macros.webp?&q=90&w=1512",
  },
  {
    name: "Live Chat",
    icon: <HandRaisedIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/2AQzA2JYkR7opXSAv1Rsyn/e89be94d6a028e2483639d06a150bd48/workflows_for_fin.webp?&q=90&w=1512",
  },
  {
    name: "Surveys",
    icon: <DocumentTextIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/6ntXe4YLoBfuUbvltLhhTt/a5a92491ac4b133bc48971f8b772c0d6/workload_management.webp?&q=90&w=1512",
  },
  {
    name: "Flows",
    icon: <ChartBarIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/5TPhCZhKSPK3NjX5DTkXI7/f7af90b0f3693dfa291a59c257f46ff8/macros.webp?&q=90&w=1512",
  },
  {
    name: "Automation",
    icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/2AQzA2JYkR7opXSAv1Rsyn/e89be94d6a028e2483639d06a150bd48/workflows_for_fin.webp?&q=90&w=1512",
  },
  {
    name: "Popups",
    icon: <PhoneArrowDownLeftIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/6ntXe4YLoBfuUbvltLhhTt/a5a92491ac4b133bc48971f8b772c0d6/workload_management.webp?&q=90&w=1512",
  },
  {
    name: "Forms",
    icon: <CalculatorIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/5TPhCZhKSPK3NjX5DTkXI7/f7af90b0f3693dfa291a59c257f46ff8/macros.webp?&q=90&w=1512",
  },
  {
    name: "Lists",
    icon: <BriefcaseIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/2AQzA2JYkR7opXSAv1Rsyn/e89be94d6a028e2483639d06a150bd48/workflows_for_fin.webp?&q=90&w=1512",
  },
  {
    name: "Segmentation",
    icon: <CogIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/6ntXe4YLoBfuUbvltLhhTt/a5a92491ac4b133bc48971f8b772c0d6/workload_management.webp?&q=90&w=1512",
  },
  {
    name: "Products",
    icon: <DocumentChartBarIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/5TPhCZhKSPK3NjX5DTkXI7/f7af90b0f3693dfa291a59c257f46ff8/macros.webp?&q=90&w=1512",
  },
  {
    name: "Reports",
    icon: <BriefcaseIcon className="h-5 w-5" />,
    image:
      "https://images.ctfassets.net/xny2w179f4ki/2AQzA2JYkR7opXSAv1Rsyn/e89be94d6a028e2483639d06a150bd48/workflows_for_fin.webp?&q=90&w=1512",
  },
];

export default function AppOverview() {
  const [hoveredImage, setHoveredImage] = useState<string>("default");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const listRef = useRef<(HTMLLIElement | null)[]>([]);

  const handleMouseEnter = (imageKey: string) => {
    setHoveredImage(imageKey);
  };

  const handleMouseLeave = () => {
    setHoveredImage("default");
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
            10
          );
          setActiveIndex(index);
          setHoveredImage(entry.target.getAttribute("data-image") || "default");
        }
      });
    }, options);

    listRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      listRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="bg-[#f4f6fa]">
      <div className="container max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-6">
        <div className="w-full max-w-5xl mx-auto pb-20" data-aos="fade-up">
          <h2 className="text-3xl sm:text-6xl !leading-tight mb-5 md:mb-8 font-bold text-center">
            One Software, Multiple Benefits to Grow Your Business
          </h2>
          <div className="font-light relative z-10 text-base sm:text-xl leading-tight text-center">
            <p>
              We have compiled superior features to track your customer journey, helping you grow your business and enhance the customer experience.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-[0_4px_94px_0_rgba(17,3,98,.09)] p-6 sm:p-10 rounded-2xl flex flex-col sm:flex-row gap-x-0 relative items-start">
          {/* Sidebar List */}
          <div className="w-full md:max-w-md order-1 mb-4 md:mb-0">
            <ul>
              {appList.slice(1).map((item, index) => (
                <li
                  key={index}
                  ref={(el: any) => (listRef.current[index] = el)}
                  data-index={index}
                  data-image={item.name}
                  className={clsx(
                    "list-item py-4 bg-white text-gray-500 shadow-[0_4px_24px_0_rgba(17,3,98,.01)] border-b border-gray-100 mb-0 px-4 cursor-pointer border-l-4 border-l-transparent hover:border-l-gray-300",
                    {
                      "!shadow-none !border-l-indigo-600 !text-indigo-600 !bg-indigo-50":
                        activeIndex === index,
                    }
                  )}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-2 min-w-0 flex-1">
                      <span>{item.icon}</span>
                      <div className="overflow-hidden text-ellipsis whitespace-nowrap font-normal text-base">
                        <span>{item.name}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Sticky Image Container */}
          <div className="w-full sticky bottom-3 z-10 order-1 mb-0 md:w-2/3 md:order-2 md:top-[70px] lg:top-[90px]">
            <div className="aspect-[4/4] w-4/5 h-4/5 sm:w-full sm:h-full bg-gray-900 overflow-hidden">
              <img
                src={appList.find((item) => item.name === hoveredImage)?.image}
                alt={hoveredImage}
                loading="lazy"
                width="1400"
                height="1400"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
