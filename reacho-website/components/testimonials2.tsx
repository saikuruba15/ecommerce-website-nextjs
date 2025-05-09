import React, { useState, useEffect, useRef } from "react";

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

export default function Testimonials2() {
  const [active, setActive] = useState<number>(0);
  const [autorotateInterval, setAutorotateInterval] =
    useState<NodeJS.Timeout | null>(null);
  const autorotateTiming: number = 7000;
  const testimonials: Testimonial[] = [
    {
      img: "https://cruip-tutorials.vercel.app/fancy-testimonials-slider/testimonial-01.jpg",
      quote:
        "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: "Jessie J",
      role: "Acme LTD",
    },
    {
      img: "https://cruip-tutorials.vercel.app/fancy-testimonials-slider/testimonial-02.jpg",
      quote:
        "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: "Nick V",
      role: "Malika Inc.",
    },
    {
      img: "https://cruip-tutorials.vercel.app/fancy-testimonials-slider/testimonial-03.jpg",
      quote:
        "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: "Amelia W",
      role: "Panda AI",
    },
  ];

  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startAutorotate = () => {
      setAutorotateInterval(
        setInterval(() => {
          setActive((prevActive) => (prevActive + 1) % testimonials.length);
        }, autorotateTiming)
      );
    };

    startAutorotate();

    return () => {
      if (autorotateInterval) {
        clearInterval(autorotateInterval);
      }
    };
  }, []);

  const stopAutorotate = () => {
    if (autorotateInterval) {
      clearInterval(autorotateInterval);
    }
  };

  // const heightFix = () => {
  //   if (testimonialsRef.current) {
  //     testimonialsRef.current.style.height =
  //       testimonialsRef.current.children[active + 1]?.offsetHeight + "px";
  //   }
  // };
  const heightFix = () => {
    if (testimonialsRef.current) {
      const nextElement = testimonialsRef.current.children[active + 1];
      if (nextElement instanceof HTMLElement) {
        testimonialsRef.current.style.height = nextElement.offsetHeight + "px";
      }
    }
  };

  useEffect(() => {
    heightFix();
  }, [active]);
  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl mx-auto text-center">
              <div className="relative h-32">
                {/* Testimonial images */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
                  <div className="h-32 mask-image-linear-gradient">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 ${
                          index === active ? "-z-10" : "hidden"
                        }`}
                      >
                        <img
                          className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                          src={testimonial.img}
                          width="56"
                          height="56"
                          alt={testimonial.name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Testimonial text */}
              <div className="mb-9">
                <div
                  ref={testimonialsRef}
                  id="testimonials"
                  className="relative flex flex-col transition-all duration-300 delay-500 ease-in-out"
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-500 delay-200 order-first absolute ${
                        active === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                    >
                      <div className="text-2xl font-bold text-slate-900">
                        {testimonial.quote}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-wrap justify-center -m-1.5">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
                      active === index
                        ? "bg-indigo-500 text-white shadow-indigo-950/10"
                        : "bg-white hover:bg-indigo-100 text-slate-900"
                    }`}
                    onClick={() => {
                      setActive(index);
                      stopAutorotate();
                    }}
                  >
                    <span>{testimonial.name}</span>{" "}
                    <span
                      className={`text-${
                        active === index ? "indigo" : "slate"
                      }-300`}
                    >
                      -
                    </span>{" "}
                    <span>{testimonial.role}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
