import React from "react";

export default function ContentSectionSticky() {
  return (
    <>
      <section className="bg-black/95 text-white py-28 relative flex flex-col items-center overflow-hidden">
        <div className="container grid gap-6 grid-cols-12 auto-rows-auto">
          <div
            id="sticky-1"
            className="sticky-image-wrap custom-transform margin-bot-20vh"
          >
            <div className="scroll-image-wrap">
              <div className="cover-image scroll-first">
                <img
                  src="https://cdn.prod.website-files.com/635b7fcaa4466902de288cbc/6512a27a3df3c3541eb95717_hp%20asset%201%20final.webp"
                  loading="lazy"
                  alt=""
                  className="contain-image"
                />
              </div>
              <div className="cover-image scroll-second">
                <img
                  src="https://cdn.prod.website-files.com/635b7fcaa4466902de288cbc/6512a27bfb827a21aa7ca89f_hp%20asset%202%20final.webp"
                  loading="lazy"
                  alt=""
                  className="contain-image"
                />
              </div>
              <div className="cover-image scroll-third">
                <img
                  src="https://cdn.prod.website-files.com/635b7fcaa4466902de288cbc/6512a27a6716ea3ed010f2f2_hp%20asset%203%20final.webp"
                  loading="lazy"
                  alt=""
                  className="contain-image"
                />
              </div>
            </div>
          </div>
          <div className="scroll-wrapper-control col-span-5 row-span-1">
            <div className="scrolling-content-block">
              <div className="scrolling-numbers">
                <div>01 / 03</div>
              </div>
              <div className="scrolling-text-label">Creative automation</div>
              <h2 className="all-caps">Creative Scaling Solved</h2>
              <p className="text-big">
                Scale your creative production and streamline <br />
                marketing-design team collaboration. Remove tedious tasks such
                as producing, resizing or versioning assets for different
                markets and get back time to be creative genius. Create stunning
                on-brand ads automatically adjusted for all channels.{" "}
              </p>
              <a
                href="#"
                className="text-button green in-scroling w-inline-block"
              >
                <div>
                  <br />
                  Discover Creative Studio
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
                  src="https://cdn.prod.website-files.com/635b7fcaa4466902de288cbc/6512a27a3df3c3541eb95717_hp%20asset%201%20final.webp"
                  loading="lazy"
                  sizes="(max-width: 767px) 283.15625px, 100vw"
                  alt=""
                  className="contain-image"
                />
              </div>
            </div>
            <div className="scrolling-content-block">
              <div className="scrolling-numbers">
                <div>02 / 03</div>
              </div>
              <div className="scrolling-text-label">Dynamic product ads</div>
              <h2 className="all-caps">Product-led creative</h2>
              <p className="text-big">
                Move from simple DPAs. Connect your product feed and use Hunch’s
                AI-powered tools to build enhanced product-focused images and
                videos. Test up to 20 different on-brand or seasonal templates
                per catalog. Take your enriched catalogs and use it on Facebook,
                Instagram, Snapchat, Pinterest, and TikTok.
              </p>
              <a
                href="#"
                className="text-button green in-scroling w-inline-block"
              >
                <div>
                  <br />
                  Learn how to enhance DPAs
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
                  src="https://cdn.prod.website-files.com/635b7fcaa4466902de288cbc/6512a27bfb827a21aa7ca89f_hp%20asset%202%20final-p-500.webp"
                  loading="lazy"
                  sizes="(max-width: 767px) 283.15625px, 100vw"
                  alt=""
                  className="contain-image"
                />
              </div>
            </div>
            <div className="scrolling-content-block">
              <div className="scrolling-numbers">
                <div>03 / 03</div>
              </div>
              <div className="scrolling-text-label">Media Automation</div>
              <h2 className="all-caps">Creative & Media Powerhouse</h2>
              <p className="text-big">
                Automation goes beyond just creatives. Run localized campaigns
                with Hunch on Facebook, Instagram, and Snapchat. Streamline the
                campaign launch process with automated workflows and real-time
                syncing. Say goodbye to interruptions during family meals due to
                campaign edits.
              </p>
              <a
                href="#"
                className="text-button green in-scroling w-inline-block"
              >
                <div>
                  <br />
                  Explore the reacho platform
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
                  src="https://cdn.prod.website-files.com/635b7fcaa4466902de288cbc/6512a27a6716ea3ed010f2f2_hp%20asset%203%20final.webp"
                  loading="lazy"
                  sizes="(max-width: 767px) 283.15625px, 100vw"
                  alt=""
                  className="contain-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
