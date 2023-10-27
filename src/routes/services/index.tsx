import HomeServices from "components/home/services.component";
import _images_gradient from "assets/img/_images_gradient.jpg";
import _images_gradient_dark from "assets/img/gradient_bg_image.jpg";
import _pattern from "assets/img/pattern.png";
import _image3 from "assets/img/3.jpg";
import Reveal from "components/toolkit/reveal.component";
import { AnimateType } from "utils/helper/helper";

function Services() {
  return (
    <main>
      <div className="mt-[95px]">
        <div />
        <div>
          <section className="relative py-32">
            <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
              <img
                alt="gradient"
                loading="lazy"
                width={1519}
                height={383}
                decoding="async"
                data-nimg={1}
                className="h-full w-full object-cover"
                src={_images_gradient}
                style={{}}
              />
            </picture>
            <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
              <img
                alt="gradient dark"
                loading="lazy"
                width={1920}
                height={900}
                decoding="async"
                data-nimg={1}
                className="h-full w-full object-cover"
                src={_images_gradient_dark}
                style={{ color: "transparent" }}
              />
            </picture>
            <Reveal
              type={AnimateType.FadeInRight}
              className="container relative z-10">
              <div className="mx-auto max-w-xl text-center">
                <h1 className="mb-6 text-center font-display text-4xl font-medium text-marshland-700 dark:text-white">
                  Services
                </h1>
                <p className="text-lg leading-normal dark:text-marshland-200">
                  Unlocking the potential of cryptocurrencies and streamlining
                  the process of gift card redemption.
                </p>
              </div>
            </Reveal>
          </section>
        </div>
        <div>
          <HomeServices />
        </div>

        <div>
          <section className="relative py-24 dark:bg-marshland-800">
            <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
              <img
                alt="gradient"
                width={1519}
                height={773}
                decoding="async"
                data-nimg={1}
                className="h-full w-full object-cover"
                srcSet="/_next/image?url=%2Fimages%2Fgradient_light.jpg&w=1920&q=75 1x, /_next/image?url=%2Fimages%2Fgradient_light.jpg&w=3840&q=75 2x"
                src="/_next/image?url=%2Fimages%2Fgradient_light.jpg&w=3840&q=75"
                style={{ color: "transparent" }}
              />
            </picture>
            <div className="container">
              <div className="lg:flex lg:justify-between">
                <div className="relative lg:w-[55%]">
                  <img
                    alt="circle"
                    loading="lazy"
                    width={143}
                    height={143}
                    decoding="async"
                    data-nimg={1}
                    className="absolute -top-14 right-0 animate-fly dark:opacity-10 md:-right-12"
                    src={_pattern}
                    style={{ color: "transparent" }}
                  />
                  <div className="flex items-center space-x-7">
                    <figure className="relative overflow-hidden rounded-3xl before:absolute before:inset-0 before:bg-marshland-900/25">
                      <img
                        alt="img"
                        loading="lazy"
                        width={308}
                        height={471}
                        decoding="async"
                        data-nimg={1}
                        className="w-full h-full object-cover"
                        src={_image3}
                        style={{ color: "transparent" }}
                      />
                    </figure>
                  </div>
                </div>
                <div className="py-10 lg:w-[45%] lg:pl-28">
                  <h2 className="mb-6 font-display text-3xl text-marshland-700 dark:text-white">
                    Revive Your Gift Cards
                  </h2>
                  <p className="mb-8 text-lg leading-normal dark:text-marshland-300">
                    Our gift card redemption service lets you make the most of
                    those unused gift cards. It's as easy as 1-2-3:
                  </p>
                  <div className="space-y-2">
                    <div className="flex space-x-4  items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-8 w-8 shrink-0 fill-vhee-500">
                        <path
                          fill="none"
                          d="M0 0h24v24H0z"
                        />
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                      </svg>
                      <div>
                        <span className="block font-display text-base font-semibold text-marshland-700 dark:text-white">
                          Contact us.
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-8 w-8 shrink-0 fill-vhee-500">
                        <path
                          fill="none"
                          d="M0 0h24v24H0z"
                        />
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                      </svg>
                      <div>
                        <span className="block font-display text-base font-semibold text-marshland-700 dark:text-white">
                          Drop the card details.
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-8 w-8 shrink-0 fill-vhee-500">
                        <path
                          fill="none"
                          d="M0 0h24v24H0z"
                        />
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                      </svg>
                      <div>
                        <span className="block font-display text-base font-semibold text-marshland-700 dark:text-white">
                          Receive the equivalent value in digital assets.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Services;
