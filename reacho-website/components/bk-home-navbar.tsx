"use client";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  ArrowRightIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Email marketing",
    description: "Build better relationships",
    href: "/email-marketing",
    class: "bg-light-primary",
    btnicon: "bg-primary/10",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 45 45"
      >
        <g id="Email_Marketing">
          <g>
            <path d="M22.5,34.5c-0.9,0-1.8-0.2-2.7-0.6L8.3,28.8c-0.8-0.3-1.1-1.2-0.8-2c0.3-0.8,1.2-1.1,2-0.8L21,31.2c0.9,0.4,2,0.4,2.9,0    l11.5-5.1c0.8-0.3,1.6,0,2,0.8c0.3,0.8,0,1.6-0.8,2l-11.5,5.1C24.3,34.3,23.4,34.5,22.5,34.5z" />
          </g>
          <g>
            <path d="M29.3,24.3c-0.8,0-1.5-0.7-1.5-1.5c0-2-1.6-3.6-3.6-3.6h-6.8c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6h6.8c2,0,3.6-1.6,3.6-3.6    c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v20.3C30.8,23.7,30.1,24.3,29.3,24.3z M17.4,9.1c-2,0-3.6,1.6-3.6,3.6s1.6,3.6,3.6,3.6h6.8    c1.3,0,2.6,0.4,3.6,1.1V8c-1,0.7-2.3,1.1-3.6,1.1H17.4z" />
          </g>
          <g>
            <path d="M32.7,14.2h-3.4c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h3.4c0.8,0,1.5,0.7,1.5,1.5S33.5,14.2,32.7,14.2z" />
          </g>
          <g>
            <path d="M19.1,26c-0.8,0-1.5-0.7-1.5-1.5v-6.8c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v6.8C20.6,25.4,19.9,26,19.1,26z" />
          </g>
          <g>
            <path d="M37.4,44H7.6C4,44,1,41,1,37.4V24.5c0-3.6,3-6.6,6.6-6.6c0.8,0,1.5,0.7,1.5,1.5s-0.6,1.5-1.5,1.5c-2.1,0-3.7,1.6-3.7,3.6    v12.9c0,2,1.6,3.6,3.6,3.6h29.8c2,0,3.6-1.6,3.6-3.6V24.5c0-2-1.6-3.6-3.6-3.6h-1.4c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h1.4    c3.6,0,6.6,3,6.6,6.6v12.9C44,41,41,44,37.4,44z" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "SMS marketing",
    description: "Text your customers around",
    href: "/sms-marketing",
    class: "bg-light-info",
    btnicon: "bg-info/10",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="svg753"
        x="0px"
        y="0px"
        viewBox="0 0 45 45"
      >
        <g id="g759" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
          <g id="g761">
            <g>
              <defs>
                <rect
                  id="SVGID_1_"
                  x="-324.5"
                  y="153.8"
                  width="682.7"
                  height="682.7"
                />
              </defs>

              <g id="g763">
                <g id="g769" transform="translate(126,492)">
                  <g id="path771">
                    <path d="M-108.9-13h-8.8c-4.1,0-7.5,3.4-7.5,7.5v17.3c0,4.1,3.4,7.5,7.5,7.5h0.4c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1h-0.4        c-2.9,0-5.2-2.3-5.2-5.2V-5.5c0-2.9,2.3-5.2,5.2-5.2h8.8c2.9,0,5.2,2.3,5.2,5.2v2.1c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1        v-2.1C-101.5-9.6-104.8-13-108.9-13z" />
                  </g>
                </g>
                <g id="g773" transform="translate(491.9946,378.8999)">
                  <g id="path775">
                    <path d="M-480.8,113.6c-0.1,0-0.3,0-0.4,0.1c-0.4,0.2-0.7,0.6-0.7,1l0,9.3c0,2.2,0.8,4.3,2.4,5.9s3.6,2.4,5.9,2.4h6.5        c2.2,0,4.3-0.9,5.9-2.4c1.6-1.6,2.4-3.7,2.4-5.9v-2.3c0-4.5-3.8-8.2-8.3-8.2c0,0,0,0,0,0h-6.5c0,0,0,0,0,0        c-1.3,0-2.5,0.3-3.7,0.9c-0.8,0.4-1.8,0.3-2.5-0.4l-0.1-0.1C-480.3,113.7-480.5,113.6-480.8,113.6z M-478.4,116.9        c0.7,0,1.3-0.2,2-0.5c0.8-0.4,1.7-0.6,2.7-0.6c0,0,0,0,0,0h6.5c0,0,0,0,0,0c3.3,0,6,2.7,6,5.9v2.3c0,0,0,0,0,0        c0,1.6-0.6,3.1-1.7,4.3c-1.1,1.1-2.6,1.8-4.3,1.8h-6.5c-1.6,0-3.1-0.6-4.3-1.8c-1.1-1.1-1.8-2.7-1.7-4.3l0-7.3        C-479.3,116.8-478.8,116.9-478.4,116.9z" />
                  </g>
                </g>
                <g id="g777" transform="translate(400,396)">
                  <g id="path779">
                    <path d="M-374,106.9h-9c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1h9c0.6,0,1.1-0.5,1.1-1.1        C-372.8,107.4-373.4,106.9-374,106.9z" />
                  </g>
                </g>
                <g id="g781" transform="translate(340,326)">
                  <g id="path783">
                    <path d="M-317.8,172.4h-5.2c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h5.2c0.6,0,1.1-0.5,1.1-1.1S-317.2,172.4-317.8,172.4z" />
                  </g>
                </g>
                <g id="g785" transform="translate(216,110)">
                  <g id="path787">
                    <path d="M-201.7,375.8L-201.7,375.8c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6S-201.7,376.7-201.7,375.8" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Push notifications",
    description: "Instantly retarget your customers",
    href: "/push-notifications",
    class: "bg-light-success",
    btnicon: "bg-success/10",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="svg159"
        x="0px"
        y="0px"
        viewBox="0 0 45 45"
      >
        <g id="g165" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
          <g id="g167">
            <g>
              <defs>
                <rect
                  id="SVGID_1_"
                  x="-324.5"
                  y="153.8"
                  width="682.7"
                  height="682.7"
                />
              </defs>

              <g id="g169">
                <g id="g175" transform="translate(376,213.1035)">
                  <g id="path177">
                    <path d="M-347.8,271H-373v1.1c0,1.7,0.9,2.7,1.6,3.3c0.6,0.6,0.9,1,0.9,1.7v8.4c0,4.1,2.4,7.7,6.2,9.3l1,0.4l0.9-2.1l-1-0.4        c-2.9-1.2-4.8-4-4.8-7.2v-8.4c0-1.7-0.9-2.7-1.6-3.3c-0.2-0.2-0.4-0.4-0.6-0.6h19.9c-0.1,0.2-0.3,0.4-0.6,0.6        c-0.7,0.7-1.6,1.6-1.6,3.3v3.2h2.2v-3.2c0-0.8,0.3-1.1,0.9-1.7c0.7-0.7,1.6-1.6,1.6-3.3V271z" />
                  </g>
                </g>
                <g id="g179" transform="translate(456,392)">
                  <g id="path181">
                    <path d="M-432.8,104.3c-4.1,0-7.5,3.4-7.5,7.5c0,4.1,3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5C-425.3,107.6-428.6,104.3-432.8,104.3z         M-432.8,117c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2C-427.5,114.7-429.9,117-432.8,117z" />
                  </g>
                </g>
                <g id="g183" transform="translate(356,432)">
                  <g id="path185">
                    <rect x="-334.3" y="68.4" width="3" height="6.8" />
                  </g>
                </g>
                <g id="g187" transform="translate(276,100)">
                  <g id="path189">
                    <path d="M-260.4,379c-2,0-3.7,1.6-3.7,3.7v2.5h2.2v-2.5c0-0.8,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4v2.5h2.2v-2.5        C-256.7,380.6-258.4,379-260.4,379z" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Product reviews",
    description: "Email & SMS automations to ask",
    href: "/product-reviews",
    class: "bg-light-danger",
    // btnicon: { color: "red" },
    btnicon: "bg-danger/10",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 45 45"
      >
        <g>
          <g>
            <path d="M39.2,16.5l-3.6-1.9L32,16.5L29.9,15l0.7-4l-2.9-2.8l0.8-2.6l4-0.6l1.8-3.6l2.7,0L38.7,5l4,0.6l0.8,2.6L40.7,11l0.7,4    L39.2,16.5z M35.6,11.3l2.3,1.2l-0.4-2.5l1.8-1.8l-2.5-0.4l-1.1-2.3l-1.1,2.3l-2.5,0.4l1.8,1.8l-0.4,2.5L35.6,11.3z" />
          </g>
          <g>
            <path d="M5.8,16.5L3.7,15l0.7-4L1.5,8.2l0.8-2.6l4-0.6l1.8-3.6h2.7L12.5,5l4,0.6l0.8,2.6L14.5,11l0.7,4L13,16.5l-3.6-1.9L5.8,16.5    z M5.7,8.2l1.8,1.8l-0.4,2.5l2.3-1.2l2.3,1.2l-0.4-2.5l1.8-1.8l-2.5-0.4L9.4,5.5L8.3,7.8L5.7,8.2z" />
          </g>
          <g>
            <g>
              <path d="M28.4,43.6H20l-6.6-2H3.9V27.1h6.2l6.9-6.5c0.9-1,1.5-2.3,1.5-3.6v-4.9h3.3c2.6,0,4.7,2.2,4.7,4.9c0,1.3-0.2,2.7-0.6,3.9     h4.4c2.2,0,4,1.8,4,4c0,0.7-0.2,1.4-0.6,2c0.8,0.7,1.2,1.7,1.2,2.9c0,1.1-0.4,2-1.2,2.8c0,0-0.1,0.1-0.1,0.1     c0.4,0.6,0.6,1.3,0.6,2c0,1.1-0.4,2-1.2,2.8c-0.3,0.3-0.6,0.5-1,0.7c0.2,0.4,0.3,0.9,0.3,1.4c0,1.1-0.4,2-1.2,2.8     C30.5,43.2,29.5,43.6,28.4,43.6z M20.4,40.6h8c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7c0-0.5-0.4-1-1-1v-3h1.9     c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7c0-0.5-0.4-1-1-1v-3H31c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7     c0-0.5-0.4-1-1-1l-0.7,0l0-3c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7c0-0.5-0.4-1-1-1h-9.1l1.1-2.2     c0.7-1.4,1.1-3.1,1.1-4.8c0-0.9-0.6-1.9-1.7-1.9h-0.3V17c0,2.1-0.8,4.1-2.4,5.7l-7.8,7.4H6.9v8.5h6.9L20.4,40.6z" />
            </g>
            <g>
              <rect x="9.2" y="28.6" width="3" height="11.5" />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
];

const recentPosts = [
  {
    id: 1,
    title: "Marketing automation",
    href: "/marketing-automation",
    imageUrl: "/assets/images/menu/marketing-automation.png",
    description:
      "Grow your audience and extend your reach by collecting contact details from.",
  },
  {
    id: 2,
    title: "Helpdesk",
    href: "/helpdesk",
    imageUrl: "/assets/images/menu/helpdesk.png",
    description:
      "Save time and boost your sales by using pre-built automations that run.",
  },
  {
    id: 3,
    title: "Live chat",
    href: "/livechat",
    imageUrl: "/assets/images/menu/livechat.png",
    description:
      "Grow your audience and extend your reach by collecting contact visitors.",
  },
];

const integrationsLogos = [
  {
    href: "#",
    src: "/assets/images/menu/integrations/shopify.png",
    alt: "SavvyCal",
    class: "bg-light-success",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/shopifyplus.png",
    alt: "Statamic",
    class: "bg-light-warning",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/woo-commerce.png",
    alt: "Statamic",
    class: "bg-light-violet",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/adobe.png",
    alt: "Transistor",
    class: "bg-light-danger",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/salesforce.png",
    alt: "Statamic",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/bigcommerce.png",
    alt: "Tuple",
    class: "bg-light-primary",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/prestashop.png",
    alt: "Tuple",
    class: "bg-light-pink",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/os-commerce.png",
    alt: "Reform",
    class: "bg-light-emerald",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/ecwid.png",
    alt: "SavvyCal",
    class: "bg-light-sky",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/opencart.png",
    alt: "Transistor",
    class: "bg-light-cyan",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/wix.png",
    alt: "Statamic",
    class: "bg-light-info",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/square.png",
    alt: "Statamic",
    class: "bg-light-sky",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/cs-cart.png",
    alt: "Laravel",
    class: "bg-light-primary",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/x-cart.png",
    alt: "Statamic",
    class: "bg-light-orange",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/shoplaza.png",
    alt: "Statamic",
    class: "bg-light-danger",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/volusion.png",
    alt: "Statamic",
    class: "bg-light-purple",
  },

  {
    href: "#",
    src: "/assets/images/menu/integrations/shiftshop.png",
    alt: "Laravel",
    class: "bg-light-primary",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/bigcartel.png",
    alt: "Reform",
    class: "bg-light-violet",
  },

  {
    href: "#",
    src: "/assets/images/menu/integrations/squarespace.png",
    alt: "Statamic",
    class: "bg-light-info hover:bg-light-info/95",
  },
  {
    href: "#",
    src: "/assets/images/menu/integrations/nopc.png",
    alt: "Statamic",
  },
  // {
  //   href: "#",
  //   src: "/assets/images/menu/integrations/wordpress.png",
  //   alt: "Statamic",
  // },
];

const featuresCallsToAction = [
  { name: "See all features", href: "#", icon: ArrowRightIcon },
  { name: "Book a Demo", href: "#", icon: PlayCircleIcon },
];

const products = [
  {
    name: "Email marketing",
    description: "Get a better understanding of your traffic",
    href: "/email-marketing",
    icon: ChartPieIcon,
  },
  {
    name: "SMS marketing",
    description: "Speak directly to your customers",
    href: "/sms-marketing",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Push notifications",
    description: "Your customers’ data will be safe and secure",
    href: "/push-notifications",
    icon: FingerPrintIcon,
  },
  {
    name: "Product reviews",
    description: "Connect with third-party tools",
    href: "/product-reviews",
    icon: SquaresPlusIcon,
  },
  {
    name: "Marketing automation",
    description: "Build strategic funnels that will convert",
    href: "/marketing-automation",
    icon: ArrowPathIcon,
  },
  {
    name: "Helpdesk",
    description: "Build strategic funnels that will convert",
    href: "/helpdesk",
    icon: ArrowPathIcon,
  },
  {
    name: "Live chat",
    description: "Build strategic funnels that will convert",
    href: "/livechat",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "About us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Support", href: "#" },
  { name: "Press", href: "#" },
  { name: "Blog", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BkHomeNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="container-fluid px-4 sm:px-6 lg:px-8">
        <div className="navbar-container">
          <nav className="navbar-wrapper" aria-label="Global">
            <div className="navbar-grid">
              <a href="/" className="navbar-brand">
                <span className="sr-only">Reacho</span>
                <img
                  className="h-7 w-auto"
                  src="/assets/images/reacho-logo.svg"
                  alt="Logo"
                />
              </a>

              <PopoverGroup className="navbar-nav">
                <Popover className="nav-item nav-item-dropdown">
                  <PopoverButton className="nav-link">
                    Features
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <PopoverPanel className="megamenu">
                    <div className="megamenu-body !p-10">
                      <div className="flex-1">
                        <div className="feature-submenu-links1 relative grid grid-cols-2 gap-3.5 md:grid-cols-4">
                          {features.map((item) => (
                            <>
                              <div
                                key={item.name}
                                className={`${item.class} group relative flex gap-x-3 rounded-xl p-4 text-sm leading-6`}
                              >
                                <div
                                  className={`mt-0 flex h-12 w-12 flex-none items-center justify-center rounded-full ${item.btnicon}`}
                                >
                                  <span className="h-5 w-5 fill-current">
                                    {item.icon}
                                  </span>
                                </div>
                                <div className="flex-auto">
                                  <a
                                    href={item.href}
                                    className="block text-base font-medium"
                                  >
                                    {item.name}
                                    <span className="absolute inset-0" />
                                  </a>
                                  <p className="mt-1 text-gray-500 text-tiny font-light">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                        {/* <h5 className="text-gray-400 uppercase text-tiny font-normal tracking-[2.5px] pb-4 pl-3">
                          GET YOUR SALES ROLLING WITH Reacho
                        </h5> */}

                        <hr className="h-px mt-8 mb-4 bg-gray-100 border-0 dark:bg-gray-700" />

                        <div className="grid grid-cols-1 gap-6 sm:gap-4 lg:grid-cols-3">
                          <h3 className="sr-only">Recent posts</h3>

                          {recentPosts.map((post) => (
                            <article
                              key={post.id}
                              className="relative isolate border border-transparent hover:!bg-blue-50 rounded-xl transition delay-75 p-3 flex flex-col gap-x-8 gap-y-2 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                            >
                              <h4 className="mt-0 mb-1 text-base font-medium text-gray-700">
                                <a href={post.href}>
                                  <span className="absolute inset-0" />
                                  {post.title}
                                </a>
                              </h4>
                              <p className="mb-8 text-gray-500 text-tiny leading-[18px] font-light">
                                {post.description}
                              </p>

                              <div className="relative1 flex-none">
                                <img
                                  alt=""
                                  src={post.imageUrl}
                                  className="aspect-[2/1] sm:aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:max-w-80 sm:h-32 lg:h-auto"
                                // sm:aspect-[16/9]
                                />
                                {/* <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" /> */}
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="megamenu-footer">
                      <a
                        href="#"
                        className="flex items-center gap-x-2 p-1 text-sm font-medium leading-6 group text-indigo-600 hover:text-indigo-500"
                      >
                        See all features
                        <ArrowRightIcon className="w-4 h-4 group-hover:text-indigo-500"></ArrowRightIcon>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-x-1.5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-normal text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Book a Demo
                      </a>
                    </div>
                  </PopoverPanel>
                </Popover>

                <Popover className="nav-item nav-item-dropdown">
                  <PopoverButton className="nav-link">
                    Integrations
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <PopoverPanel className="megamenu">
                    <div className="megamenu-body !p-10">
                      <div className="flex-1 pr-10">
                        <h5 className="text-gray-400 uppercase text-tiny font-normal tracking-[2.5px] pb-4">
                          Reacho BUILT FOR
                        </h5>
                        <div className="integrations-grid-logos grid grid-cols-2 gap-3.5 md:grid-cols-5">
                          {integrationsLogos.map((logo, index) => (
                            <div className="integrations-logos-wrap">
                              <a
                                key={index}
                                href={logo.href}
                                className="border border-gray-200 hover:bg-gray-50"
                              >
                                <img
                                  alt={logo.alt}
                                  src={logo.src}
                                  loading="lazy"
                                  width="183"
                                  height="80"
                                  className="w-full"
                                />
                              </a>
                            </div>
                          ))}
                        </div>

                        {/* <div className="integrations-grid-logos grid grid-cols-2 gap-3.5 md:grid-cols-5">
                          {integrationsLogos.map((logo, index) => (
                            <div className="integrations-logos-wrap">
                              <a
                                key={index}
                                href={logo.href}
                                className={`${logo.class} transform transition-all duration-300 hover:scale-105`}
                              >
                                <img
                                  alt={logo.alt}
                                  src={logo.src}
                                  loading="lazy"
                                  width="183"
                                  height="80"
                                  className="w-full"
                                />
                              </a>
                            </div>
                          ))}
                        </div> */}
                      </div>
                      <div className="flex-1 max-w-64 bg-gray-50 -my-10 -mx-10 px-6 py-4 rounded-e-xl">
                        <h6 className="text-gray-400 uppercase text-tiny font-normal tracking-[2.5px] mb-5 pt-5">
                          Features
                        </h6>
                        <ul className="space-y-6">
                          <li>
                            <a
                              href="javascript:;"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Free
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Basic
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Growth
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Pro
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Premier
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="megamenu-footer">
                      <a
                        href="#"
                        className="flex items-center gap-x-2 p-1 text-sm font-medium leading-6 group text-indigo-600 hover:text-indigo-500"
                      >
                        See all features
                        <ArrowRightIcon className="w-4 h-4 group-hover:text-indigo-500"></ArrowRightIcon>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-x-1.5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-normal text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Book a Demo
                      </a>
                    </div>
                  </PopoverPanel>
                </Popover>
                {/* <a href="#" className="nav-link">
                  Marketing
                </a>
                <a href="#" className="nav-link">
                  Service
                </a>
                <a href="#" className="nav-link">
                  Pricing
                </a> */}

                {/* <Popover className="relative">
                  <Popover.Button className="flex items-center gap-x-1 text-sm font-normal leading-6 text-gray-900">
                    Company
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                      {company.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm font-normal leading-6 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </PopoverPanel>
                  </Transition>
                </Popover> */}
              </PopoverGroup>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="hidden lg:flex lg:flex-1 items-center lg:justify-end gap-x-2">
              <a
                href="https://app.reacho.com/signup"
                className="rounded-xl bg-white px-4 py-2.5 text-sm font-normal text-gray-900 hover:text-red-500"
              >
                Login
                {/* Log in <span aria-hidden="true">&rarr;</span> */}
              </a>
              <a
                href="https://app.reacho.com/signup"
                className="flex items-center gap-x-1.5 rounded-xl bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign Up <span aria-hidden="true">→</span>
              </a>
            </div>
          </nav>
          <Dialog
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.51 p-1.51 pl-1 outline-none">
                  <span className="sr-only">Reacho</span>
                  <img
                    className="h-7 w-auto"
                    src="/assets/images/reacho-logo.svg"
                    alt="Logo"
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-sm sm:text-base font-normal leading-7 text-gray-900 hover:bg-gray-50">
                            Features
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...products, ...callsToAction].map((item) => (
                              <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-sm sm:text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Integrations
                    </a>
                    {/* <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Marketing
                    </a> */}

                    {/* <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50">
                            Company
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {company.map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure> */}
                  </div>
                  <div className="py-6 space-y-2">
                    <a
                      href="https://app.reacho.com/signup"
                      className="flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-normal border border-danger text-red-500 hover:bg-red-500"
                    >
                      Login
                      {/* Log in <span aria-hidden="true">&rarr;</span> */}
                    </a>
                    <a
                      href="https://app.reacho.com/signup"
                      className="flex items-center justify-center gap-x-1.5 rounded-xl border border-red-500 bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Sign Up <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
