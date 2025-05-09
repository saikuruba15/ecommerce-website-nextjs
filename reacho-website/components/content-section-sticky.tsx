import React, { useEffect, useRef, useState } from "react";

export interface ContentItem {
  index: number;
  label: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
}

const defaultData: ContentItem[] = [
  {
    index: 0,
    label: "Creative automation",
    title: "Creative Scaling Solved",
    description:
      "Scale your creative production and streamline marketing-design team collaboration. Remove tedious tasks such as producing, resizing or versioning assets for different markets and get back time to be creative genius. Create stunning on-brand ads automatically adjusted for all channels.",
    buttonText: "Discover Creative Studio",
    buttonLink: "#",
    imageSrc:
      "https://cdn.prod.website-files.com/635b7fcaa4466902de288cbc/6512a27a3df3c3541eb95717_hp%20asset%201%20final.webp",
  },
  {
    index: 1,
    label: "Dynamic product ads",
    title: "Product-led creative",
    description:
      "Move from simple DPAs. Connect your product feed and use Hunch’s AI-powered tools to build enhanced product-focused images and videos. Test up to 20 different on-brand or seasonal templates per catalog. Take your enriched catalogs and use it on Facebook, Instagram, Snapchat, Pinterest, and TikTok.",
    buttonText: "Learn how to enhance DPAs",
    buttonLink: "#",
    imageSrc:
      "https://cdn.prod.website-files.com/635b7fcaa4466902de288cbc/6512a27bfb827a21aa7ca89f_hp%20asset%202%20final.webp",
  },
  {
    index: 2,
    label: "Media Automation",
    title: "Creative & Media Powerhouse",
    description:
      "Automation goes beyond just creatives. Run localized campaigns with Hunch on Facebook, Instagram, and Snapchat. Streamline the campaign launch process with automated workflows and real-time syncing. Say goodbye to interruptions during family meals due to campaign edits.",
    buttonText: "Explore the reacho platform",
    buttonLink: "#",
    imageSrc:
      "https://cdn.prod.website-files.com/635b7fcaa4466902de288cbc/6512a27a6716ea3ed010f2f2_hp%20asset%203%20final.webp",
  },
];

interface ContentSectionStickyProps {
  data?: {
    "content-item": ContentItem[]
  }
}

const ScrollingSection: React.FC<ContentSectionStickyProps> = ({ data }: ContentSectionStickyProps) => {
  const [content, setContent] = useState<ContentItem[]>(data?.["content-item"].length ? data["content-item"] : defaultData);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFirstVisible, setIsFirstVisible] = useState<boolean>(false);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(
          entry.target.getAttribute("data-index") || "0",
          10
        );

        if (index === 0) {
          setIsFirstVisible(entry.isIntersecting);
        }

        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      });
    }, observerOptions);

    contentRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      contentRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [content]);

  function isElementVisible(element: any) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    return (
      rect.top + scrollTop >= 0 &&
      rect.left >= 0 &&
      rect.bottom + scrollTop <= windowHeight + scrollTop &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function getVisiblePixels(element: any) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Determine the visible height
    const visibleHeight = Math.max(
      0,
      Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
    );

    // Determine the visible width
    const visibleWidth = Math.max(
      0,
      Math.min(rect.right, windowWidth) - Math.max(rect.left, 0)
    );

    // Calculate visible area in pixels
    const visibleArea = visibleHeight * visibleWidth;

    return {
      visibleHeight: visibleHeight,
      visibleWidth: visibleWidth,
      visibleArea: visibleArea,
    };
  }

  useEffect(() => {
    let lastScrollPosition = 0;

    const handleScroll = () => {
      if (imageWrapRef.current && isFirstVisible) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const maxTranslate = 34; // Maximum translate percentage
        const maxScale = 0.75; // Minimum scale value

        // Calculate the scroll fraction (0 to 1)
        const scrollFraction = Math.min(
          scrollPosition / (windowHeight * 1.5),
          1
        );

        // Determine the scroll direction
        const scrollDirection =
          scrollPosition > lastScrollPosition ? "down" : "up";
        lastScrollPosition = scrollPosition;

        // Calculate the translate amount based on scroll position
        const moveAmount = Math.min(
          scrollFraction * maxTranslate,
          maxTranslate
        );

        // Calculate the scale amount based on scroll position
        const scaleAmount = Math.max(
          maxScale + (1 - maxScale) * (1 - scrollFraction),
          maxScale
        );

        // Apply the transformations based on scroll position and direction
        if (scrollDirection === "down") {
          imageWrapRef.current.style.marginLeft = "-60px"

          imageWrapRef.current.style.transform = `translate3d(${moveAmount.toFixed(
            2
          )}%, 0px, 0px) scale3d(${scaleAmount.toFixed(
            2
          )}, ${scaleAmount.toFixed(2)}, 1)`;
        } else {
          // Check scroll top
          let vis = getVisiblePixels(contentRefs.current[0]);

          let visiblePixels = vis.visibleHeight - 65;

          const getElementHeight = (element: any) => {
            const rect = element.getBoundingClientRect();
            return rect.height;
          };

          let elementheight = getElementHeight(contentRefs.current[0]);

          console.log("visvisvis", vis);
          if (visiblePixels > 0) {
            // Smoothly transition back if scrolling up
            imageWrapRef.current.style.marginLeft = "-60px"
            imageWrapRef.current.style.transform = `translate3d(${Math.min(
              38,
              visiblePixels
            ).toFixed(2)}%, 0px, 0px) scale3d(${scaleAmount.toFixed(
              2
            )}, ${scaleAmount.toFixed(2)}, 1)`;
          } else {
            // Smoothly transition back if scrolling up
            imageWrapRef.current.style.marginLeft = "0px"
            imageWrapRef.current.style.transform = `translate3d(${Math.max(
              0,
              0
            ).toFixed(2)}%, 0px, 0px) scale3d(1, 1, 1)`;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFirstVisible]);

  if (!content.length) return null;

  return (
    <section className="bg-black/95 text-white py-16 sm:py-28 relative flex flex-col items-center overflow-hidden1">
      <div className="container-fluid grid gap-6 grid-cols-1 sm:grid-cols-12 auto-rows-auto relative px-4 lg:px-12">
        <div
          id="sticky-1"
          className="sticky-image-wrap custom-transform margin-bot-20vh"
        >
          <div
            className="scroll-image-wrap"
            ref={imageWrapRef}
            style={{
              willChange: "transform",
              transformStyle: "preserve-3d",
              transform: "translate3d(0%, 0px, 0px) scale3d(1, 1, 1)",
              marginLeft: '0px'
            }}
          >
            {content.map((item, index) => (
              <div
                key={index}
                className={`cover-image ${activeIndex === index ? "active" : ""
                  }`}
              >
                <img
                  src={item.imageSrc}
                  loading="lazy"
                  alt=""
                  className="contain-image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-wrapper-control col-span-6 sm:col-span-5 row-span-1">
          {content.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className="scrolling-content-block"
              ref={(el: any) => (contentRefs.current[index] = el)}
            >
              <div className="scrolling-numbers">
                <div>{`0${index + 1} / 03`}</div>
              </div>
              <div className="scrolling-text-label hidden">{item.label}</div>
              <h2 className="all-caps">{item.title}</h2>
              <p className="text-big">{item.description}</p>
              <a
                href={item.buttonLink}
                className="text-button green in-scrolling w-inline-block invisible"
              >
                <div>
                  <br />
                  {item.buttonText}
                </div>
                <img
                  src="https://cdn.prod.website-files.com/635b7fcaa4466902de288cbc/6368ba9d4a3b0b07f24b8107_green%20arrows.svg"
                  loading="lazy"
                  alt="green arrows pointing right"
                  className="button-arrows andrija"
                />
              </a>
              <div className="scroll-image-mobile">
                <img
                  src={item.imageSrc}
                  loading="lazy"
                  sizes="(max-width: 767px) 283.15625px, 100vw"
                  alt=""
                  className="contain-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingSection;
