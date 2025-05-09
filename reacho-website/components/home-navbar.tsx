"use client";
import {useState } from "react";
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
import useHoverDropdown from "./hooks/useHoverDropdown";
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
import EngageBayScript from "@/app/third-party-scripts/engagebay";
import SvgIcon from "./common/SvgIcon";

import Link from "next/link";

const Supportfeatures = [
  {
    name: "Helpdesk",
    description:
      "Deliver outstanding support and build lasting customer trust.",
    href: "/helpdesk",
    class: "text-primary",
    btnicon: "bg-primary/10",
    icon: (<SvgIcon name="helpDesk" />
    ),
  },
  {
    name: "Live Chat",
    description: "Engage instantly with customers to boost satisfaction.",
    href: "/livechat",
    class: "text-info",
    btnicon: "bg-info/10",
    icon: <SvgIcon name="liveChat" />,
  },
  {
    name: "Automation",
    description: "Let the software solve the tickets for you.",
    href: "/marketing-automation",
    class: "text-success",
    btnicon: "bg-success/10",
    icon: <SvgIcon name="automation" />,
  },
  {
    name: "Knowledge base",
    description:
      "Empower customers with easy access to self-service resources.",
    href: "/knowledge-base",
    class: "text-danger",
    btnicon: "bg-danger/10",
    icon: <SvgIcon name="knowledgeBase" />,
  },
];

// const features = [
//   {
//     name: "Email marketing",
//     description: "Build better relationships",
//     href: "/email-marketing",
//     class: "bg-light-primary",
//     btnicon: "bg-primary/10",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         version="1.1"
//         id="Capa_1"
//         x="0px"
//         y="0px"
//         viewBox="0 0 45 45"
//       >
//         <g id="Email_Marketing">
//           <g>
//             <path d="M22.5,34.5c-0.9,0-1.8-0.2-2.7-0.6L8.3,28.8c-0.8-0.3-1.1-1.2-0.8-2c0.3-0.8,1.2-1.1,2-0.8L21,31.2c0.9,0.4,2,0.4,2.9,0    l11.5-5.1c0.8-0.3,1.6,0,2,0.8c0.3,0.8,0,1.6-0.8,2l-11.5,5.1C24.3,34.3,23.4,34.5,22.5,34.5z" />
//           </g>
//           <g>
//             <path d="M29.3,24.3c-0.8,0-1.5-0.7-1.5-1.5c0-2-1.6-3.6-3.6-3.6h-6.8c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6h6.8c2,0,3.6-1.6,3.6-3.6    c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v20.3C30.8,23.7,30.1,24.3,29.3,24.3z M17.4,9.1c-2,0-3.6,1.6-3.6,3.6s1.6,3.6,3.6,3.6h6.8    c1.3,0,2.6,0.4,3.6,1.1V8c-1,0.7-2.3,1.1-3.6,1.1H17.4z" />
//           </g>
//           <g>
//             <path d="M32.7,14.2h-3.4c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h3.4c0.8,0,1.5,0.7,1.5,1.5S33.5,14.2,32.7,14.2z" />
//           </g>
//           <g>
//             <path d="M19.1,26c-0.8,0-1.5-0.7-1.5-1.5v-6.8c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v6.8C20.6,25.4,19.9,26,19.1,26z" />
//           </g>
//           <g>
//             <path d="M37.4,44H7.6C4,44,1,41,1,37.4V24.5c0-3.6,3-6.6,6.6-6.6c0.8,0,1.5,0.7,1.5,1.5s-0.6,1.5-1.5,1.5c-2.1,0-3.7,1.6-3.7,3.6    v12.9c0,2,1.6,3.6,3.6,3.6h29.8c2,0,3.6-1.6,3.6-3.6V24.5c0-2-1.6-3.6-3.6-3.6h-1.4c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h1.4    c3.6,0,6.6,3,6.6,6.6v12.9C44,41,41,44,37.4,44z" />
//           </g>
//         </g>
//       </svg>
//     ),
//   },
//   {
//     name: "SMS marketing",
//     description: "Text your customers around",
//     href: "/sms-marketing",
//     class: "bg-light-info",
//     btnicon: "bg-info/10",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         version="1.1"
//         id="svg753"
//         x="0px"
//         y="0px"
//         viewBox="0 0 45 45"
//       >
//         <g id="g759" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
//           <g id="g761">
//             <g>
//               <defs>
//                 <rect
//                   id="SVGID_1_"
//                   x="-324.5"
//                   y="153.8"
//                   width="682.7"
//                   height="682.7"
//                 />
//               </defs>

//               <g id="g763">
//                 <g id="g769" transform="translate(126,492)">
//                   <g id="path771">
//                     <path d="M-108.9-13h-8.8c-4.1,0-7.5,3.4-7.5,7.5v17.3c0,4.1,3.4,7.5,7.5,7.5h0.4c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1h-0.4        c-2.9,0-5.2-2.3-5.2-5.2V-5.5c0-2.9,2.3-5.2,5.2-5.2h8.8c2.9,0,5.2,2.3,5.2,5.2v2.1c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1        v-2.1C-101.5-9.6-104.8-13-108.9-13z" />
//                   </g>
//                 </g>
//                 <g id="g773" transform="translate(491.9946,378.8999)">
//                   <g id="path775">
//                     <path d="M-480.8,113.6c-0.1,0-0.3,0-0.4,0.1c-0.4,0.2-0.7,0.6-0.7,1l0,9.3c0,2.2,0.8,4.3,2.4,5.9s3.6,2.4,5.9,2.4h6.5        c2.2,0,4.3-0.9,5.9-2.4c1.6-1.6,2.4-3.7,2.4-5.9v-2.3c0-4.5-3.8-8.2-8.3-8.2c0,0,0,0,0,0h-6.5c0,0,0,0,0,0        c-1.3,0-2.5,0.3-3.7,0.9c-0.8,0.4-1.8,0.3-2.5-0.4l-0.1-0.1C-480.3,113.7-480.5,113.6-480.8,113.6z M-478.4,116.9        c0.7,0,1.3-0.2,2-0.5c0.8-0.4,1.7-0.6,2.7-0.6c0,0,0,0,0,0h6.5c0,0,0,0,0,0c3.3,0,6,2.7,6,5.9v2.3c0,0,0,0,0,0        c0,1.6-0.6,3.1-1.7,4.3c-1.1,1.1-2.6,1.8-4.3,1.8h-6.5c-1.6,0-3.1-0.6-4.3-1.8c-1.1-1.1-1.8-2.7-1.7-4.3l0-7.3        C-479.3,116.8-478.8,116.9-478.4,116.9z" />
//                   </g>
//                 </g>
//                 <g id="g777" transform="translate(400,396)">
//                   <g id="path779">
//                     <path d="M-374,106.9h-9c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1h9c0.6,0,1.1-0.5,1.1-1.1        C-372.8,107.4-373.4,106.9-374,106.9z" />
//                   </g>
//                 </g>
//                 <g id="g781" transform="translate(340,326)">
//                   <g id="path783">
//                     <path d="M-317.8,172.4h-5.2c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h5.2c0.6,0,1.1-0.5,1.1-1.1S-317.2,172.4-317.8,172.4z" />
//                   </g>
//                 </g>
//                 <g id="g785" transform="translate(216,110)">
//                   <g id="path787">
//                     <path d="M-201.7,375.8L-201.7,375.8c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6S-201.7,376.7-201.7,375.8" />
//                   </g>
//                 </g>
//               </g>
//             </g>
//           </g>
//         </g>
//       </svg>
//     ),
//   },
//   {
//     name: "Push notifications",
//     description: "Instantly retarget your customers",
//     href: "/push-notifications",
//     class: "bg-light-success",
//     btnicon: "bg-success/10",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         version="1.1"
//         id="svg159"
//         x="0px"
//         y="0px"
//         viewBox="0 0 45 45"
//       >
//         <g id="g165" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
//           <g id="g167">
//             <g>
//               <defs>
//                 <rect
//                   id="SVGID_1_"
//                   x="-324.5"
//                   y="153.8"
//                   width="682.7"
//                   height="682.7"
//                 />
//               </defs>

//               <g id="g169">
//                 <g id="g175" transform="translate(376,213.1035)">
//                   <g id="path177">
//                     <path d="M-347.8,271H-373v1.1c0,1.7,0.9,2.7,1.6,3.3c0.6,0.6,0.9,1,0.9,1.7v8.4c0,4.1,2.4,7.7,6.2,9.3l1,0.4l0.9-2.1l-1-0.4        c-2.9-1.2-4.8-4-4.8-7.2v-8.4c0-1.7-0.9-2.7-1.6-3.3c-0.2-0.2-0.4-0.4-0.6-0.6h19.9c-0.1,0.2-0.3,0.4-0.6,0.6        c-0.7,0.7-1.6,1.6-1.6,3.3v3.2h2.2v-3.2c0-0.8,0.3-1.1,0.9-1.7c0.7-0.7,1.6-1.6,1.6-3.3V271z" />
//                   </g>
//                 </g>
//                 <g id="g179" transform="translate(456,392)">
//                   <g id="path181">
//                     <path d="M-432.8,104.3c-4.1,0-7.5,3.4-7.5,7.5c0,4.1,3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5C-425.3,107.6-428.6,104.3-432.8,104.3z         M-432.8,117c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2C-427.5,114.7-429.9,117-432.8,117z" />
//                   </g>
//                 </g>
//                 <g id="g183" transform="translate(356,432)">
//                   <g id="path185">
//                     <rect x="-334.3" y="68.4" width="3" height="6.8" />
//                   </g>
//                 </g>
//                 <g id="g187" transform="translate(276,100)">
//                   <g id="path189">
//                     <path d="M-260.4,379c-2,0-3.7,1.6-3.7,3.7v2.5h2.2v-2.5c0-0.8,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4v2.5h2.2v-2.5        C-256.7,380.6-258.4,379-260.4,379z" />
//                   </g>
//                 </g>
//               </g>
//             </g>
//           </g>
//         </g>
//       </svg>
//     ),
//   },
//   {
//     name: "Product reviews",
//     description: "Email & SMS automations to ask",
//     href: "/product-reviews",
//     class: "bg-light-danger",
//     btnicon: "bg-danger/10",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         version="1.1"
//         id="Layer_1"
//         x="0px"
//         y="0px"
//         viewBox="0 0 45 45"
//       >
//         <g>
//           <g>
//             <path d="M39.2,16.5l-3.6-1.9L32,16.5L29.9,15l0.7-4l-2.9-2.8l0.8-2.6l4-0.6l1.8-3.6l2.7,0L38.7,5l4,0.6l0.8,2.6L40.7,11l0.7,4    L39.2,16.5z M35.6,11.3l2.3,1.2l-0.4-2.5l1.8-1.8l-2.5-0.4l-1.1-2.3l-1.1,2.3l-2.5,0.4l1.8,1.8l-0.4,2.5L35.6,11.3z" />
//           </g>
//           <g>
//             <path d="M5.8,16.5L3.7,15l0.7-4L1.5,8.2l0.8-2.6l4-0.6l1.8-3.6h2.7L12.5,5l4,0.6l0.8,2.6L14.5,11l0.7,4L13,16.5l-3.6-1.9L5.8,16.5    z M5.7,8.2l1.8,1.8l-0.4,2.5l2.3-1.2l2.3,1.2l-0.4-2.5l1.8-1.8l-2.5-0.4L9.4,5.5L8.3,7.8L5.7,8.2z" />
//           </g>
//           <g>
//             <g>
//               <path d="M28.4,43.6H20l-6.6-2H3.9V27.1h6.2l6.9-6.5c0.9-1,1.5-2.3,1.5-3.6v-4.9h3.3c2.6,0,4.7,2.2,4.7,4.9c0,1.3-0.2,2.7-0.6,3.9     h4.4c2.2,0,4,1.8,4,4c0,0.7-0.2,1.4-0.6,2c0.8,0.7,1.2,1.7,1.2,2.9c0,1.1-0.4,2-1.2,2.8c0,0-0.1,0.1-0.1,0.1     c0.4,0.6,0.6,1.3,0.6,2c0,1.1-0.4,2-1.2,2.8c-0.3,0.3-0.6,0.5-1,0.7c0.2,0.4,0.3,0.9,0.3,1.4c0,1.1-0.4,2-1.2,2.8     C30.5,43.2,29.5,43.6,28.4,43.6z M20.4,40.6h8c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7c0-0.5-0.4-1-1-1v-3h1.9     c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7c0-0.5-0.4-1-1-1v-3H31c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7     c0-0.5-0.4-1-1-1l-0.7,0l0-3c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7c0-0.5-0.4-1-1-1h-9.1l1.1-2.2     c0.7-1.4,1.1-3.1,1.1-4.8c0-0.9-0.6-1.9-1.7-1.9h-0.3V17c0,2.1-0.8,4.1-2.4,5.7l-7.8,7.4H6.9v8.5h6.9L20.4,40.6z" />
//             </g>
//             <g>
//               <rect x="9.2" y="28.6" width="3" height="11.5" />
//             </g>
//           </g>
//         </g>
//       </svg>
//     ),
//   },
// ];

// const products = [
//   {
//     name: "Email marketing",
//     description: "Get a better understanding of your traffic",
//     href: "/email-marketing",
//     icon: ChartPieIcon,
//   },
//   {
//     name: "SMS marketing",
//     description: "Speak directly to your customers",
//     href: "/sms-marketing",
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: "Push notifications",
//     description: "Your customers’ data will be safe and secure",
//     href: "/push-notifications",
//     icon: FingerPrintIcon,
//   },
//   {
//     name: "Product reviews",
//     description: "Connect with third-party tools",
//     href: "/product-reviews",
//     icon: SquaresPlusIcon,
//   },
//   {
//     name: "Marketing automation",
//     description: "Build strategic funnels that will convert",
//     href: "/marketing-automation",
//     icon: ArrowPathIcon,
//   },
//   {
//     name: "Helpdesk",
//     description: "Build strategic funnels that will convert",
//     href: "/helpdesk",
//     icon: ArrowPathIcon,
//   },
//   {
//     name: "Live chat",
//     description: "Build strategic funnels that will convert",
//     href: "/livechat",
//     icon: ArrowPathIcon,
//   },
// ];

const integrationsData = [
  {
    name: "Shopify",
    description:
      "Integrate with Shopify, the world's leading e-commerce platform",
    imageSrc: "/assets/images/menu/brands/shopify.webp",
    link: "/shopify-platform",
    install: "installed",
  },
  {
    name: "WooCommerce",
    description: "Effortlessly sync your website data such as your contacts",
    imageSrc: "/assets/images/menu/brands/woocom.png",
    link: "/woocommerce-platform",
    install: "installed",
  },
  {
    name: "PrestaShop",
    description: "Our integration with QuickBooks lets you manage",
    imageSrc: "/assets/images/menu/brands/prestashop.webp",
    link: "/prestashop-platform",
    install: "installed",
  },
  {
    name: "BigCommerce",
    description: "The openness and power of the BigCommerce platform",
    imageSrc: "/assets/images/menu/brands/bigcommerce.webp",
    link: "/bigcommerce-platform",
    install: "installed",
  },
  {
    name: "Ecwid",
    description: "Elevate e-commerce with EngageBay & ECWID integration",
    imageSrc: "/assets/images/menu/brands/ecwid.webp",
    link: "/ecwid-platform",
    install: "installed",
  },
  {
    name: "Wix",
    description:
      "Connect with Wix, the trusted platform for building websites.",
    imageSrc: "/assets/images/integrations-logos/wix.svg",
    link: "/wix-platform",
    install: "installed",
  },
  {
    name: "Shoplazza",
    description: "Smarter Support for Shoplazza Sellers",
    imageSrc: "/assets/images/integrations-logos/shoplazza.svg",
    link: "/shoplazza-platform",
    install: "installed",
  },
  // {
  //   name: "Adobe",
  //   description: "Optimize sales & marketing, improving CRM",
  //   imageSrc: "/assets/images/menu/brands/adobe.webp",
  //   link: "#",
  //   install: "coming soon",
  // },
  {
    name: "Salesforce",
    description: "Optimize sales & marketing, improving CRM",
    imageSrc: "/assets/images/menu/brands/salesforce.webp",
    link: "#",
    install: "coming soon",
  },
  // {
  //   name: "OsCommerce",
  //   description: "Build an online e-commerce store from scratch",
  //   imageSrc: "/assets/images/menu/brands/oscommerce.webp",
  //   link: "#",
  // },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const router = useRouter();
  return (
    <header className="navbar-header navbar-header-full">
      <div className="navbar-container">
        <div className="container">
          <nav className="navbar-wrapper" aria-label="Global">
            <div className="navbar-grid">
              <a href="/" className="navbar-brand">
                <span className="sr-only">Reacho</span>
                <img
                  className="h-7 w-auto"
                  src="/assets/images/reacho-logo.svg"
                  alt="Logo"
                />
                <p className="text-xs italic font-light text-gray-500">
                  Product of EngageBay
                </p>
              </a>

              <PopoverGroup className="navbar-nav">
                <Popover as="div" className="nav-item nav-item-dropdown relative">
                  {({ open, close }) => {
                    const { isOpen, handleMouseEnter, handleMouseLeave, containerRef } = useHoverDropdown();
                    // Combine click and hover states
                    const showDropdown = open || isOpen;
                    
                    return (
                      <div 
                        ref={containerRef}
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                      >
                        <PopoverButton className="nav-link">
                          <span>Features</span>
                          <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                        </PopoverButton>

                        {showDropdown && (
                          <PopoverPanel static className="absolute left-1/2 z-10 mt-6 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                    <div className="w-screen max-w-sm flex-auto overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-lg">
                      <div className="p-4">
                        {Supportfeatures.map((item) => (
                          <>
                            <div
                              key={item.name}
                              className={`group relative flex items-center gap-x-4 rounded-lg p-3 text-sm leading-6 ${item.class}`}
                            >
                              <div
                                className={`mt-0 flex items-center h-12 w-12 flex-none justify-center rounded-lg  ${item.btnicon}`}
                              >
                                <span className="h-5 w-5 fill-current">
                                  {item.icon}
                                </span>
                              </div>
                              <div className="flex-auto">
                                <Link
                                  href={item.href}
                                  className="block text-base font-medium text-gray-900 hover:underline underline-offset-4"
                                >
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </Link>
                                <p className="mt-0 text-gray-500 text-tiny leading-snug font-light">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </PopoverPanel>
                        )}
                      </div>
                    );
                  }}
                </Popover>

                <Popover as="div" className="nav-item nav-item-dropdown">
                  {({ open, close }) => {
                    const { isOpen, handleMouseEnter, handleMouseLeave, containerRef } = useHoverDropdown();
                    // Combine click and hover states
                    const showDropdown = open || isOpen;
                    
                    return (
                      <div 
                        ref={containerRef}
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                      >
                        <PopoverButton className="nav-link ">
                          Platforms
                          <ChevronDownIcon
                            className="h-5 w-5 flex-none "
                            aria-hidden="true"
                          />
                        </PopoverButton>
                        
                        {showDropdown && (
                          <PopoverPanel static className="absolute left-1/3 z-10 mt-6 flex w-screen max-w-max lg:max-w-3xl -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                    <div className="md:mx-6 lg:mx-8 md:bg-white md:rounded-2xl md:shadow-lg dark:md:bg-neutral-800">
                      {/* Grid */}
                      <div className="pt-2 md:pt-0 grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-0">
                        <div className="col-span-12 md:p-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-y-1 sm:gap-x-3">
                            {integrationsData.map((integration, index) => (
                              <div key={index} className="flex flex-col">
                                <Link
                                  className="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                  href={integration.link}
                                  // target="_parent"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src={integration.imageSrc}
                                    alt={`${integration.name} Logo`}
                                    className={`${integration.name === "WooCommerce" ? "w-10 h-10" : "h-8 w-8"}`}
                                  />
                                  <div className="grow">
                                    <p className="font-medium text-base text-gray-800 dark:text-neutral-200">
                                      {integration.name}
                                    </p>
                                    <p className="mt-0 text-gray-500 text-tiny leading-snug font-light dark:text-neutral-500">
                                      {integration.description}
                                    </p>
                                    {integration.install !== "installed" && (
                                      <div className="flex">
                                        <p className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ml-auto">
                                          {integration.install}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="grid divide-x divide-gray-900/5 bg-gray-50 text-center rounded-2xl rounded-t-none">
                        <Link
                          href="/platforms"
                          className="text-base font-medium text-primary hover:bg-gray-100 rounded-2xl rounded-t-none p-4"
                        >
                          See all Platforms
                        </Link>
                      </div>
                    </div>
                  </PopoverPanel>
                        )}
                      </div>
                    );
                  }}
                </Popover>

                {/* <Popover className="nav-item nav-item-dropdown">
                  <PopoverButton className="nav-link ">
                    Platforms
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none "
                      aria-hidden="true"
                    />
                  </PopoverButton>
                  <PopoverPanel className="megamenu">
                    <div className="megamenu-body !p-10">
                      <div className="flex-1">
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
                      </div>
                      <div className="flex-1 max-w-64 bg-gray-50 -my-10 -mx-10 px-6 py-4 rounded-e-xl hidden">
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
                </Popover> */}
                <div className="nav-item hidden">
                  <Link
                    href="/reacho-story"
                    className="text-sm nav-link hover:text-primary"
                  >
                    Why Free?
                  </Link>
                </div>
                <div className="nav-item">
                  <Link
                    href="/pricing"
                    className="text-sm nav-link hover:text-primary"
                  >
                    Pricing
                  </Link>
                </div>
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
              <Link
                href="https://app.reacho.com/login"
                className="rounded-xl bg-white px-4 py-2.5 text-sm font-normal text-gray-900 hover:text-red-500"
              >
                Login

              </Link>
              <Link
                href="https://app.reacho.com/signup"
                className="flex items-center gap-x-1.5 rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <span>Sign Up</span><span aria-hidden="true">→</span>
              </Link>
              {/* <GetEarlyAccessButton /> */}
              {/* {typeof window !== "undefined" &&
                (window as any) &&
                !(
                  (window as any)?.location?.pathname == "/get-early-access"
                ) && (
                  <button
                    onClick={() =>
                      ((window as any).location.pathname = "/get-early-access")
                    }
                    className="flex items-center gap-x-1.5 rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hidden"
                  >
                    <span>Get Early Access</span>
                    <span aria-hidden="true">→</span>
                  </button>
                )} */}
            </div>
          </nav>
          <Dialog
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 lg:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3 text-sm sm:text-base font-normal leading-7 text-gray-900 hover:text-primary hover:bg-gray-100">
                            Features
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-1 space-y-1.5">
                            {/* {[...products, ...callsToAction].map( */}
                            {[...Supportfeatures].map((item) => (
                              <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-5 pr-3 text-sm font-normal leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="h-4 w-4 fill-current">
                                    {item.icon}
                                  </span>
                                  <span>{item.name}</span>
                                </span>
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3 text-sm sm:text-base font-normal leading-7 text-gray-900 hover:text-primary hover:bg-gray-100">
                            Platforms
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-1 space-y-1.5">
                            {[...integrationsData].map((item) => (
                              <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.link}
                                className="block rounded-lg py-2 pl-5 pr-3 text-sm font-normal leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                <span className="flex items-center gap-3">
                                  <img
                                    src={item.imageSrc}
                                    alt={`${item.name} Logo`}
                                    className="w-5 h-5"
                                  />
                                  <span>{item.name}</span>
                                </span>
                              </DisclosureButton>
                            ))}
                            <div className="grid text-center pt-2">
                              <Link
                                href="/platforms"
                                className="btn btn-outline-danger text-sm font-medium"
                              >
                                See all Platforms
                              </Link>
                            </div>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    <Link
                      href="/reacho-story"
                      className="-mx-3 block rounded-lg px-3 py-2 text-sm sm:text-base font-normal leading-7 text-gray-900 hover:text-primary hover:bg-gray-50 hidden"
                    >
                      Why Free?
                    </Link>
                    <Link
                      href="/pricing"
                      className="text-sm nav-link hover:text-primary"
                    >
                      Pricing
                    </Link>
                  </div>
                  <div className="py-6 space-y-2">
                    {/* <a
                      href="https://app.reacho.com/signup"
                      className="flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-normal border border-danger text-red-500 hover:bg-red-500"
                    >
                      Login

                    </a>
                    <a
                      href="https://app.reacho.com/signup"
                      className="flex items-center justify-center gap-x-1.5 rounded-xl border border-red-500 bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Sign Up <span aria-hidden="true">→</span>
                    </a> */}
                    <Link
                      href="https://app.reacho.com/signup"
                      className="flex items-center justify-center gap-x-1.5 rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Get Early Access
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
      <EngageBayScript />
    </header>
  );
}
