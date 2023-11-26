import { AnimateType } from "utils/helper/helper";
import Reveal from "../toolkit/reveal.component";

const services = [
  {
    title: "Gift Card Redemption",
    desc: `We offer a quick and hassle-free way to redeem them for digital assets, giving your gift cards new life and putting their value to work for you.`,
    icon: (
      <svg className="icon relative mb-6 h-8 w-8 text-accent-dark dark:text-white">
        <use xlinkHref="/icons.svg#icon-credit-card" />
      </svg>
    ),
    animation: AnimateType.FadeInLeft,
  },
  {
    title: "Secure and Reliable",
    desc: `Your security is our priority. We protect your financial
              transactions with us and personal information, whether you're
              redeeming gift cards or trading digital assets.`,
    icon: (
      <svg className="icon relative mb-6 h-8 w-8 text-accent-dark dark:text-white">
        <use xlinkHref="/icons.svg#icon-secure" />
      </svg>
    ),
    animation: AnimateType.FadeInUp,
  },
  {
    title: "Diverse Cryptocurrency Portfolio",
    desc: `Explore a diverse range of digital assets, including Bitcoin
              (BTC), Ethereum (ETH), and a multitude of other cryptocurrencies.
              Diversify your investments and keep up with the ever-evolving
              crypto market.`,
    icon: (
      <svg className="icon relative mb-6 h-8 w-8 text-accent-dark dark:text-white">
        <use xlinkHref="/icons.svg#icon-crypto" />
      </svg>
    ),
    animation: AnimateType.FadeInLeft,
  },
  {
    title: "Swift Transactions",
    desc: ` In the fast-paced digital age, speed is essential. Our high-speed
              transaction processing ensures you can capitalize on market
              opportunities without delay.`,
    icon: (
      <svg className="icon relative mb-6 h-8 w-8 text-accent-dark dark:text-white">
        <use xlinkHref="/icons.svg#icon-transactions" />
      </svg>
    ),
    animation: AnimateType.FadeInLeft,
  },
  {
    title: "24/7 Support",
    desc: `Got questions or need assistance? Our dedicated customer support
              team is available around the clock to provide guidance and
              promptly resolve any inquiries.`,
    icon: (
      <svg className="icon relative mb-6 h-8 w-8 text-accent-dark dark:text-white">
        <use xlinkHref="/icons.svg#icon-support" />
      </svg>
    ),
    animation: AnimateType.FadeInLeft,
  },
];

function HomeServices() {
  return (
    <section className="py-24 dark:bg-marshland-900">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-marshland-700 dark:text-white">
            Why Choose Vhee's Xchange?
          </h2>
          <p className="text-lg dark:text-marshland-300">
            Vhee's Xchange is your all-in-one destination for unlocking the
            potential of cryptocurrencies and streamlining the process of gift
            card redemption. We bring you a secure and user-friendly platform,
            seamlessly merging the digital world of digital assets with the
            convenience of gift card redemption.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <Reveal
              key={i}
              type={item.animation}
              className="service-item relative rounded-2.5xl border border-marshland-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-marshland-700 dark:bg-marshland-700">
              <>
                <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent" />
                {/* <svg className="icon relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white">
                  <use xlinkHref="/icons.svg#icon-service-ico-1" />
                </svg> */}
                {item.icon}
                <h3 className="mb-4 font-display text-lg text-marshland-700 dark:text-white">
                  {item.title}
                </h3>
                <p className="dark:text-marshland-300">{item.desc}</p>
              </>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
