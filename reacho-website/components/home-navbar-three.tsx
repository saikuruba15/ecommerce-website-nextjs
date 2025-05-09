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
  ArrowLongRightIcon,
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
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
];
const featuresCallsToAction = [
  { name: "See all features", href: "#", icon: ArrowRightIcon },
  { name: "Book a Demo", href: "#", icon: PlayCircleIcon },
];

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
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

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur">
      <div className="container-fluid px-4 sm:px-6 lg:px-8">
        <div className="navbar-container">
          <nav
            className="flex items-center justify-between px-3 h-[65px]"
            aria-label="Global"
          >
            <div className="flex items-center gap-x-12">
              <a href="/" className="-m-1.51 p-1.51 pl-1 outline-none">
                <span className="sr-only">Reacho</span>
                <img
                  className="h-7 w-auto"
                  src="/assets/images/reacho-logo.svg"
                  alt="Logo"
                />
              </a>

              <PopoverGroup className="hidden lg:flex lg:gap-x-7">
                <Popover className="relative">
                  <PopoverButton className="flex items-center gap-x-0 text-sm font-normal leading-6 text-gray-900 focus:outline-none">
                    Features
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-3xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4 grid grid-cols-4 gap-x-6 sm:gap-x-8">
                        {features.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-4 rounded-lg p-2 text-sm leading-7 hover:bg-gray-50"
                          >
                            <item.icon
                              className="h-5 w-5 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-normal text-gray-900 hover:text-indigo-600"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              {/* <p className="mt-1 text-gray-600">
                                {item.description}
                              </p> */}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3">
                        <a
                          href="#"
                          className="flex items-center gap-x-2 p-3 text-sm font-medium leading-6 group text-indigo-600 hover:text-indigo-500"
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
                  </Transition>
                </Popover>

                <Popover className="relative">
                  <PopoverButton className="flex items-center gap-x-0 text-sm font-normal leading-6 text-gray-900 focus:outline-none">
                    Integrations
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-3xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4 grid grid-cols-2 gap-x-6 sm:gap-x-8">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon
                                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-normal text-gray-900 hover:text-indigo-600"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-normal leading-6 text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon
                              className="h-5 w-5 flex-none text-gray-400"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </PopoverPanel>
                  </Transition>
                </Popover>
                <a
                  href="#"
                  className="text-sm font-normal leading-6 text-gray-900"
                >
                  Marketing
                </a>
                <a
                  href="#"
                  className="text-sm font-normal leading-6 text-gray-900"
                >
                  Service
                </a>
                <a
                  href="#"
                  className="text-sm font-normal leading-6 text-gray-900"
                >
                  Pricing
                </a>

                {/* <Popover className="relative">
                  <PopoverButton className="flex items-center gap-x-1 text-sm font-normal leading-6 text-gray-900">
                    Company
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </PopoverButton>

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
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50">
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
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Integrations
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Marketing
                    </a>

                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50">
                            Company
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {company.map((item) => (
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
                  </div>
                  <div className="py-6 space-y-2">
                    <a
                      href="https://app.reacho.com/signup"
                      className="flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-normal text-gray-900 hover:text-red-500"
                    >
                      Login
                      {/* Log in <span aria-hidden="true">&rarr;</span> */}
                    </a>
                    <a
                      href="https://app.reacho.com/signup"
                      className="flex items-center justify-center gap-x-1.5 rounded-xl bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
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
