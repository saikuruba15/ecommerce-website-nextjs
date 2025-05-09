import React from "react";

const products = [
  {
    id: 1,
    name: "Email Marketing",
    href: "#",
    description:
      "Craft engaging, personalized emails that capture attention and drive action.",
    imageSrc: "/assets/images/feedback.png",
    imageAlt: "Image",
  },
  {
    id: 2,
    name: "SMS Marketing",
    href: "#",
    description:
      "Directly engage with customers through targeted text messages and initiate meaningful conversations.",
    imageSrc: "/assets/images/changelog.png",
    imageAlt: "Image",
  },
  {
    id: 3,
    name: "Marketing Automation",
    href: "#",
    description:
      "Automate your marketing campaigns to save time and increase efficiency, ensuring no customer is left behind.",
    imageSrc: "/assets/images/product-roadmap.png",
    imageAlt: "Image",
  },
  {
    id: 4,
    name: "Web Forms",
    href: "#",
    description:
      "Easily create custom forms to capture leads, gather feedback, and engage users directly on your site.",
    imageSrc: "/assets/images/changelog.png",
    imageAlt: "Image",
  },
  {
    id: 5,
    name: "WhatsApp Marketing",
    href: "#",
    description:
      "Extend your reach by connecting with customers on one of the world’s most popular messaging platforms.",
    imageSrc: "/assets/images/feedback.png",
    imageAlt: "Image",
  },
  {
    id: 6,
    name: "Push Notifications",
    href: "#",
    description:
      "Keep your audience informed and engaged with timely, relevant notifications right to their devices.",
    imageSrc: "/assets/images/changelog.png",
    imageAlt: "Image",
  },
  {
    id: 7,
    name: "Chat",
    href: "#",
    description:
      "Offer real-time support and boost customer satisfaction with instant, on-site chat solutions.",
    imageSrc: "/assets/images/product-roadmap.png",
    imageAlt: "Image",
  },
  {
    id: 8,
    name: "Helpdesk",
    href: "#",
    description:
      "Manage customer queries and support tickets efficiently from one central platform, improving response times and customer happiness.",
    imageSrc: "/assets/images/changelog.png",
    imageAlt: "Image",
  },
];

// Section component
export default function Services() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl animate-gradient bg-[length:200%_auto]">
            Accelerate growth with powerful tools for seamless marketing and
            support management
          </h2>
          <p className="mt-4 text-gray-500">
            Dive into a world of possibilities with Reacho's versatile marketing
            and support tools and connect with your audience effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-6 mt-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white card-lift"
            >
              <div className="flex flex-1 flex-col space-y-2 p-6">
                <h3 className="text-2xl font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500 lg:pr-10">
                  {product.description}
                </p>
                <div className="flex flex-1 flex-row justify-start hidden">
                  <button
                    type="button"
                    className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      Explore more
                      <svg
                        className="cta__arrow w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M9.45215 12.1953L8.56152 11.3203L11.4365 8.44531H1.32715V7.19531H11.4365L8.57715 4.32031L9.45215 3.44531L13.8271 7.82031L9.45215 12.1953Z"
                          fill="#313438"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-60 ml-6">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
