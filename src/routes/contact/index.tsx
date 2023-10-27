import _images_gradient from "assets/img/_images_gradient.jpg";
import _image_banner from "assets/img/top-contact-us-banner.jpg";
import { siteInfo } from "utils/helper/states";
function Contact() {
  return (
    <main>
      <div>
        <div />
        <div className="pt-[5.5rem] lg:pt-24">
          <div>
            <section
              className="after:bg-marshland-900/60 relative bg-cover bg-center bg-no-repeat py-32 after:absolute after:inset-0"
              style={{
                backgroundImage: `url(${_image_banner})`,
              }}>
              <div className="container relative z-10">
                <h1 className="font-display text-center text-4xl font-medium text-white">
                  Get in touch
                </h1>
              </div>
            </section>
          </div>
          <section className="dark:bg-marshland-800 relative py-24">
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
            <div className="container">
              <div className="lg:flex">
                <div className="lg:w-3/3 lg:pl-5">
                  <h2 className="font-display text-marshland-700 mb-4 text-xl dark:text-white">
                    Information
                  </h2>
                  <p className="dark:text-marshland-300 mb-6 text-lg leading-normal">
                    Don't hesitaste, Contact us today.
                  </p>
                  <div className="dark:bg-marshland-700 dark:border-marshland-600 border-marshland-100 rounded-2.5xl border bg-white p-10">
                    <div className="mb-6 flex items-center space-x-5">
                      <span className="dark:bg-marshland-700 dark:border-marshland-600 border-marshland-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="fill-marshland-400">
                          <path
                            fill="none"
                            d="M0 0h24v24H0z"
                          />
                          <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-display text-marshland-700 block text-base dark:text-white">
                          Phone
                        </span>
                        <a
                          href={`tel:${siteInfo.tel}`}
                          className="hover:text-accent dark:text-marshland-300 text-sm">
                          {siteInfo.email}
                        </a>
                      </div>
                    </div>
                    <div className="mb-6 flex items-center space-x-5">
                      <span className="dark:bg-marshland-700 dark:border-marshland-600 border-marshland-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="fill-marshland-400">
                          <path
                            fill="none"
                            d="M0 0h24v24H0z"
                          />
                          <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-display text-marshland-700 block text-base dark:text-white">
                          Address
                        </span>
                        <address className="dark:text-marshland-300 text-sm not-italic">
                          08 W 36th St, New YorkNY 10001
                        </address>
                      </div>
                    </div>
                    <div className="flex items-center space-x-5">
                      <span className="dark:bg-marshland-700 dark:border-marshland-600 border-marshland-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="fill-marshland-400">
                          <path
                            fill="none"
                            d="M0 0h24v24H0z"
                          />
                          <path d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-display text-marshland-700 block text-base dark:text-white">
                          Email
                        </span>
                        <a
                          href={`mailto:${siteInfo.email}`}
                          className="hover:text-vhee-500 dark:text-marshland-300 text-sm not-italic">
                          {siteInfo.email}
                        </a>
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

export default Contact;
