import { Link } from "react-router-dom";
import _images_gradient from "assets/img/_images_gradient.jpg";
import _images_gradient_dark from "assets/img/gradient_bg_image.jpg";
import _images_gradient_bg from "assets/img/gradient_bg_dark.jpg";
import _pattern from "assets/img/pattern.png";
import _call_illustration from "assets/img/4220713.png";
import _mainImage from "assets/img/business-computer-graphic-businessman-privacy-money.jpg";
// import Partners from "components/home/partners";
import HomeServices from "components/home/services.component";
import NewsSlide from "components/home/news.component";
import Reveal from "components/toolkit/reveal.component";
import { AnimateType } from "utils/helper/helper";
import { siteInfo } from "utils/helper/states";
import CardRedeem from "components/home/card-redeem.component";

const Home = () => {
  return (
    <main>
      <div />
      <section className="relative pb-32 pt-20 lg:pt-48">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img
            alt="gradient"
            width={1519}
            height={773}
            decoding="async"
            data-nimg={1}
            className="h-full w-full object-cover"
            src={_images_gradient}
            style={{ color: "transparent" }}
          />
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img
            alt="gradient dark"
            width={1519}
            height={773}
            decoding="async"
            data-nimg={1}
            className="h-full w-full"
            src={_images_gradient_dark}
            style={{ color: "transparent" }}
          />
        </picture>
        <img
          alt="pattern donut"
          loading="lazy"
          width={613}
          height={415}
          decoding="async"
          data-nimg={1}
          className="absolute right-0 top-0 -z-10"
          src={_pattern}
          style={{ color: "transparent" }}
        />
        <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
          <div className="grid h-full items-center gap-4 lg:grid-cols-12">
            <Reveal
              type={AnimateType.FadeInLeft}
              className="col-span-5 flex h-full flex-col items-center justify-center py-10 lg:items-start lg:py-20">
              <>
                <p className="mb-10 text-xs font-bold uppercase text-marshland-500 dark:text-marshland-200">
                  Hello,
                </p>
                <h1 className="mb-6 text-center font-display text-5xl text-marshland-700 dark:text-white lg:text-left lg:text-6xl">
                  Welcome to Vhee's Xchange
                </h1>
                <p className="mb-8 max-w-md text-center text-lg dark:text-marshland-200 lg:text-left">
                  Your Trusted Partner for Cryptocurrency and Money Exchange
                </p>
                <Reveal
                  type={AnimateType.FadeInLeft}
                  className="flex space-x-4">
                  <Link
                    className="rounded-full bg-vhee-500 py-3 px-8 text-center font-semibold text-white shadow-vhee-500-volume transition-all hover:bg-vhee-700"
                    to="/contact-us">
                    Contact Us
                  </Link>
                </Reveal>
              </>
            </Reveal>
            <div className="col-span-6">
              <div className="relative text-center lg:pl-32 lg:text-right">
                <div className="absolute -left-[18%] top-1/3 inline-block animate-fly rounded-2lg bg-[#EAF7E1] p-6 shadow-2xl sm:left-[5%] md:left-20">
                  <Reveal
                    type={AnimateType.FadeInRight}
                    className="flex gap-4">
                    <>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="fill-green">
                          <path
                            fill="none"
                            d="M0 0h24v24H0z"
                          />
                          <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z" />
                        </svg>
                      </span>
                      <div className="text-left">
                        <span className="block font-display text-3xl text-green">
                          3x
                        </span>
                        <span className="block font-display text-sm text-marshland-600">
                          Faster Deals
                        </span>
                      </div>
                    </>
                  </Reveal>
                </div>

                <img
                  alt="Exchange"
                  loading="lazy"
                  width={524}
                  height={670}
                  decoding="async"
                  data-nimg={1}
                  className="inline-block rounded-2.5xl"
                  src={_mainImage}
                  style={{ color: "transparent" }}
                />
                <div className="absolute bottom-0 -right-[5%] inline-block animate-fly rounded-2lg bg-white p-8 shadow-2xl sm:bottom-28 sm:right-[5%] lg:-right-[17%]">
                  <div className="text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="absolute right-6 top-6 fill-red">
                      <path
                        fill="none"
                        d="M0 0H24V24H0z"
                      />
                      <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
                    </svg>
                    <span className="block font-display text-3xl text-[#737EF2]">
                      100%
                    </span>
                    <span className="mb-5 block font-display text-sm text-marshland-600">
                      Trusted
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Partners /> */}
      <div>
        <HomeServices />
      </div>
      <CardRedeem />
      <NewsSlide />
      <div>
        <div className="relative -mt-48 z-10 dark:bg-marshland-900">
          <div className="container">
            <div className="relative overflow-hidden rounded-2.5xl px-16 pt-16 pb-8 shadow-md lg:px-24">
              <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                <img
                  alt="gradient"
                  width={1519}
                  height={773}
                  decoding="async"
                  data-nimg={1}
                  className="h-full w-full object-cover"
                  src={_images_gradient}
                  style={{ color: "transparent" }}
                />
              </picture>
              <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
                <img
                  alt="gradient dark"
                  width={1519}
                  height={773}
                  decoding="async"
                  data-nimg={1}
                  className="h-full w-full object-cover"
                  src={_images_gradient_bg}
                  style={{
                    color: "transparent",
                  }}
                />
              </picture>
              <div className="items-center justify-between md:flex">
                <div className="mb-6 md:w-1/2">
                  <h2 className="mb-4 font-display text-2xl text-marshland-700 dark:text-white sm:text-3xl">
                    Would you like some help getting started?
                  </h2>
                  <p className="mb-8 text-lg dark:text-marshland-300">
                    Give us a call now
                  </p>
                  <a
                    className="inline-block rounded-full bg-[#94488e] py-3 px-8 text-center font-semibold text-white shadow-[#94488e] transition-all hover:bg-[#803b7a]"
                    href={`tel:${siteInfo.tel}`}>
                    Place a Call
                  </a>
                </div>
                <img
                  alt="cta_illustration"
                  loading="lazy"
                  width={340}
                  height={300}
                  decoding="async"
                  data-nimg={1}
                  src={_call_illustration}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
