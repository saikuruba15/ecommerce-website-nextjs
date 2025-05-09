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

const Supportfeatures = [
  {
    name: "Helpdesk",
    description:
      "Deliver outstanding support and build lasting customer trust.",
    href: "/helpdesk",
    class: "text-primary",
    btnicon: "bg-primary/10",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg342"
        version="1.1"
        viewBox="0 0 46 45"
      >
        <path d="M39.6,15.4h-1.2c-1-7.6-7.5-13.6-15.4-13.6S8.6,7.8,7.6,15.4h-1.2c-3,0-5.4,2.4-5.4,5.4v6.8c0,3,2.4,5.4,5.4,5.4h3.1c1.1,0,2-.9,2-2v-13.6c0-6.4,5.2-11.6,11.6-11.6s11.6,5.2,11.6,11.6v13.6c0,2.6-2.1,4.8-4.8,4.8h-1.8c-.8-2-2.7-3.4-5-3.4s-5.4,2.4-5.4,5.4,2.4,5.4,5.4,5.4,4.2-1.4,5-3.4h1.8c4.2,0,7.6-2.9,8.5-6.8h1.3c3,0,5.4-2.4,5.4-5.4v-6.8c0-3-2.4-5.4-5.4-5.4ZM7.4,29h-1.1c-.8,0-1.4-.6-1.4-1.4v-6.8c0-.8.6-1.4,1.4-1.4h1.1v9.6ZM23,39.1c-.8,0-1.4-.6-1.4-1.4s.6-1.4,1.4-1.4,1.4.6,1.4,1.4-.6,1.4-1.4,1.4ZM41,27.6c0,.8-.6,1.4-1.4,1.4h-1.1v-9.6h1.1c.8,0,1.4.6,1.4,1.4v6.8Z" />
      </svg>
    ),
  },
  {
    name: "Live Chat",
    description: "Engage instantly with customers to boost satisfaction.",
    href: "/livechat",
    class: "text-info",
    btnicon: "bg-info/10",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Capa_1"
        data-name="Capa 1"
        version="1.1"
        viewBox="0 0 45 45"
      >
        <path d="M9.03,26.687l-2.358.337c-.439.057-.87-.081-1.184-.395-.312-.312-.455-.742-.392-1.181l.523-3.658c.053-.369.001-.745-.148-1.086-1.926-4.394-.978-9.426,2.416-12.819,2.183-2.183,5.086-3.386,8.174-3.386s5.99,1.203,8.174,3.386c.736.736,1.368,1.564,1.879,2.459.546.958,1.767,1.293,2.728.748.96-.547,1.294-1.768.747-2.728-.687-1.206-1.536-2.318-2.525-3.307-2.938-2.939-6.846-4.558-11.002-4.558S7.996,2.119,5.058,5.058C.629,9.485-.705,15.986,1.581,21.768l-.445,3.115c-.238,1.673.332,3.383,1.524,4.575,1.014,1.015,2.402,1.578,3.823,1.578.25,0,.502-.018.753-.054l2.359-.337c1.094-.155,1.854-1.169,1.697-2.263-.156-1.093-1.171-1.85-2.263-1.696Z" />
        <path d="M43.419,34.649c2.286-5.782.952-12.283-3.477-16.711-6.065-6.065-15.937-6.067-22.003,0-2.939,2.939-4.558,6.847-4.558,11.002s1.619,8.063,4.558,11.002c2.996,2.997,6.941,4.576,10.971,4.576,1.925,0,3.87-.36,5.739-1.1l3.113.444c1.671.24,3.383-.329,4.578-1.524,1.193-1.194,1.763-2.905,1.522-4.575l-.444-3.114ZM39.382,34.672l.522,3.659c.062.438-.081.868-.392,1.18-.312.312-.739.458-1.183.394l-3.658-.522c-.37-.053-.745-.002-1.086.147-4.396,1.929-9.425.979-12.819-2.415-2.183-2.184-3.386-5.086-3.386-8.174s1.203-5.99,3.386-8.174c2.254-2.253,5.213-3.38,8.173-3.38s5.921,1.127,8.174,3.38c3.394,3.394,4.342,8.425,2.415,12.819-.149.341-.2.717-.147,1.086Z" />
        <path d="M22.161,27.246c-.936,0-1.695.759-1.695,1.695s.759,1.695,1.695,1.695,1.695-.759,1.695-1.695-.759-1.695-1.695-1.695Z" />
        <path d="M28.941,27.246c-.936,0-1.695.759-1.695,1.695s.759,1.695,1.695,1.695,1.695-.759,1.695-1.695-.759-1.695-1.695-1.695Z" />
        <path d="M35.72,27.246c-.936,0-1.695.759-1.695,1.695s.759,1.695,1.695,1.695,1.695-.759,1.695-1.695-.759-1.695-1.695-1.695Z" />
      </svg>
    ),
  },
  {
    name: "Automation",
    description: "Streamline your marketing with personalized emails and SMS.",
    href: "/marketing-automation",
    class: "text-success",
    btnicon: "bg-success/10",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg594"
        version="1.1"
        viewBox="0 0 45 45"
      >
        <path d="M22.5,44.5c-3.69,0-6.723-2.87-6.982-6.496-1.022-.459-1.992-1.017-2.904-1.669h-.118c-3.26,1.54-7.221.341-9.052-2.836v-.003c-1.836-3.192-.865-7.254,2.138-9.291-.114-1.134-.114-2.272,0-3.406-1.397-.943-2.397-2.341-2.838-3.985-.485-1.807-.237-3.694.698-5.314.935-1.62,2.444-2.779,4.251-3.264,1.646-.442,3.357-.275,4.875.465.924-.667,1.91-1.236,2.95-1.704.259-3.625,3.292-6.496,6.982-6.496s6.722,2.87,6.981,6.494c1.04.466,2.026,1.034,2.953,1.701,1.515-.739,3.225-.905,4.872-.463,1.807.485,3.315,1.644,4.251,3.264,1.845,3.198.873,7.262-2.14,9.298.113,1.133.113,2.271,0,3.405,1.396.943,2.396,2.341,2.838,3.985.484,1.807.236,3.693-.698,5.313s-2.444,2.779-4.251,3.265c-1.645.442-3.356.276-4.874-.465-.926.668-1.911,1.238-2.95,1.706-.26,3.625-3.292,6.496-6.982,6.496ZM12.978,31.466l1.074.919c1.219,1.042,2.603,1.841,4.112,2.372l1.335.471v2.271c0,1.654,1.346,3,3,3s3-1.346,3-3v-2.271l1.335-.471c1.508-.532,2.892-1.332,4.111-2.377l1.075-.921,1.972,1.14c.693.401,1.502.508,2.277.298.774-.207,1.422-.704,1.822-1.398.401-.695.507-1.505.299-2.279-.207-.774-.704-1.422-1.398-1.822l-1.963-1.132.255-1.389c.29-1.58.29-3.182,0-4.761l-.256-1.388,1.963-1.133c1.435-.828,1.928-2.667,1.101-4.101-.827-1.434-2.67-1.927-4.101-1.1l-1.966,1.134-1.074-.917c-1.221-1.042-2.605-1.839-4.115-2.37l-1.337-.47v-2.272c0-1.654-1.346-3-3-3s-3,1.346-3,3v2.27l-1.334.471c-1.511.534-2.894,1.333-4.112,2.376l-1.077.922-1.972-1.143c-.692-.399-1.5-.505-2.275-.298-.775.208-1.422.705-1.823,1.4-.401.694-.507,1.503-.299,2.278s.705,1.422,1.399,1.823l1.963,1.132-.255,1.389c-.291,1.58-.291,3.182,0,4.761l.255,1.389-1.963,1.132c-1.426.827-1.919,2.668-1.096,4.102.807,1.396,2.576,1.9,3.992,1.156l.448-.255,1.628-.938ZM22.499,31.167c-4.779,0-8.667-3.888-8.667-8.667s3.888-8.667,8.667-8.667,8.667,3.888,8.667,8.667-3.888,8.667-8.667,8.667ZM22.499,17.833c-2.573,0-4.667,2.094-4.667,4.667s2.094,4.667,4.667,4.667,4.667-2.094,4.667-4.667-2.094-4.667-4.667-4.667Z" />
      </svg>
    ),
  },
  {
    name: "Knowledge base",
    description:
      "Empower customers with easy access to self-service resources.",
    href: "/knowledge-base",
    class: "text-danger",
    btnicon: "bg-danger/10",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg342"
        version="1.1"
        viewBox="0 0 46 45"
      >
        <g id="g352">
          <g id="g358">
            <g id="path360">
              <path d="M26.4,38.1h-6.8c-1.1,0-2-.9-2-2v-2.6c-4.1-2-6.8-6.2-6.8-10.9,0-6.7,5.5-12.2,12.2-12.2s12.2,5.5,12.2,12.2-2.7,8.9-6.8,10.9v2.6c0,1.1-.9,2-2,2ZM21.6,34.1h2.8v-2c0-.8.5-1.6,1.3-1.9,3.3-1.1,5.4-4.2,5.4-7.7s-3.7-8.2-8.2-8.2-8.2,3.7-8.2,8.2,2.2,6.6,5.4,7.7c.8.3,1.3,1,1.3,1.9v2Z" />
            </g>
          </g>
          <g id="g362">
            <g id="path364">
              <path d="M23,7.9c-1.1,0-2-.9-2-2v-3.4c0-1.1.9-2,2-2s2,.9,2,2v3.4c0,1.1-.9,2-2,2Z" />
            </g>
          </g>
          <g id="g366">
            <g id="path368">
              <path d="M6.4,24.5h-3.4c-1.1,0-2-.9-2-2s.9-2,2-2h3.4c1.1,0,2,.9,2,2s-.9,2-2,2Z" />
            </g>
          </g>
          <g id="g370">
            <g id="path372">
              <path d="M43,24.5h-3.4c-1.1,0-2-.9-2-2s.9-2,2-2h3.4c1.1,0,2,.9,2,2s-.9,2-2,2Z" />
            </g>
          </g>
          <g id="g374">
            <g id="path376">
              <path d="M11,12.5c-.5,0-1-.2-1.4-.6l-2.4-2.4c-.8-.8-.8-2,0-2.8.8-.8,2-.8,2.8,0l2.4,2.4c.8.8.8,2,0,2.8-.4.4-.9.6-1.4.6Z" />
            </g>
          </g>
          <g id="g378">
            <g id="path380">
              <path d="M35,12.5c-.5,0-1-.2-1.4-.6-.8-.8-.8-2,0-2.8l2.4-2.4c.8-.8,2-.8,2.8,0,.8.8.8,2,0,2.8l-2.4,2.4c-.4.4-.9.6-1.4.6Z" />
            </g>
          </g>
          <g id="g382">
            <g id="path384">
              <path d="M26.4,44.5h-6.8c-1.1,0-2-.9-2-2s.9-2,2-2h6.8c1.1,0,2,.9,2,2s-.9,2-2,2Z" />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
];

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

export default function HomeNavbar() {
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
                <Popover className="nav-item nav-item-dropdown relative">
                  <PopoverButton className="nav-link">
                    <span>Features</span>
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                  </PopoverButton>

                  <PopoverPanel className="absolute left-1/2 z-10 mt-7 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                    <div className="w-screen max-w-sm flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
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
                                <a
                                  href={item.href}
                                  className="block text-base font-medium text-gray-900 hover:underline underline-offset-4"
                                >
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
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
                </Popover>

                <Popover className="nav-item nav-item-dropdown">
                  <PopoverButton className="nav-link">
                    Platforms
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <Popover.Panel className="megamenu">
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
                  </Popover.Panel>
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
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                      {company.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm font-normal leading-6 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </Popover.Panel>
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
                href="https://app.reacho.com/login"
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
