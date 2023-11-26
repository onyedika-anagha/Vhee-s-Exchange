import _image2 from "assets/img/2.jpg";
import _images_gradient from "assets/img/_images_gradient.jpg";
import CardRedeem from "components/home/card-redeem.component";
import Reveal from "components/toolkit/reveal.component";
import { AnimateType } from "utils/helper/helper";

function About() {
  return (
    <main>
      <div />
      <section className="relative pt-24 lg:pb-96">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            alt="gradient"
            width={1519}
            height={773}
            decoding="async"
            data-nimg={1}
            className="h-full w-full object-cover"
            src={_images_gradient}
            style={{}}
          />
        </picture>
        <Reveal
          type={AnimateType.FadeInLeft}
          className="container">
          <div className="mx-auto max-w-2xl py-16 text-center">
            <h1 className="font-display text-marshland-700 mb-8 text-4xl font-medium dark:text-white">
              About Vhee's Xchange
            </h1>
            <p className="dark:text-marshland-300 text-lg leading-normal">
              Vhee's Xchange offers a broad spectrum of digital assets, from
              established giants like Bitcoin and Ethereum to promising
              altcoins. Diversify your portfolio and stay ahead in the world of
              cryptocurrencies. Join Vhee's Xchange today and experience a new
              level of financial flexibility, security, and convenience. Whether
              you want to breathe new life into unused gift cards or delve into
              the exciting world of digital assets, we're here to make it
              simple, secure, and seamless.
            </p>
          </div>
        </Reveal>
      </section>
      <section className="pb-24">
        <Reveal
          type={AnimateType.FadeInLeft}
          className="container">
          <figure className="before:bg-marshland-900/25 rounded-xl relative mt-16 overflow-hidden rounded-3xl before:absolute before:inset-0 lg:-mt-96">
            <img
              alt="video"
              loading="lazy"
              width={1170}
              height={702}
              decoding="async"
              data-nimg={1}
              className="h-full object-cover w-full"
              src={_image2}
              style={{}}
            />
          </figure>
        </Reveal>
      </section>
      <div>
        <CardRedeem />
      </div>
    </main>
  );
}

export default About;
