"use client";
import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const navigation = [
  { name: "Features", href: "/" },
  { name: "Integrations", href: "#" },
  { name: "Marketing", href: "#" },
  { name: "Service", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function HomeNavbarTwo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
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

              <div className="hidden lg:flex lg:gap-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-normal text-gray-900 hover:text-red-500"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
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
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5 outline-none">
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
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-sm font-normal leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6 space-y-2">
                    <a
                      href="https://app.reacho.com/signup"
                      className="flex items-center justify-center rounded-xl text-red-500 border border-red-500 bg-white hover:bg-red-500 hover:text-white px-4 py-2.5 text-sm font-medium"
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
