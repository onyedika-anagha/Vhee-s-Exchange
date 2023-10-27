import HomeServices from "components/home/services.component";
import _images_gradient from "assets/img/_images_gradient.jpg";
import _images_gradient_dark from "assets/img/gradient_bg_image.jpg";
import Reveal from "components/toolkit/reveal.component";
import { AnimateType } from "utils/helper/helper";
import CardRedeem from "components/home/card-redeem.component";

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
          <CardRedeem />
        </div>
      </div>
    </main>
  );
}

export default Services;
