import { Link } from "react-router-dom";
import logo from "assets/img/logo.png";
import logoLight from "assets/img/logo-light.png";
import { headerLinks } from "utils/helper/links";

const Footer = () => {
  return (
    <footer className="dark:bg-marshland-900 page-footer bg-white">
      <div className="container">
        <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
          <div className="col-span-3 md:col-span-4">
            <Link
              className="mb-6 inline-block"
              to="/">
              <img
                alt="Xhibiter | NFT Marketplace"
                loading="lazy"
                width={130}
                height={28}
                decoding="async"
                data-nimg={1}
                className="max-h-7 dark:hidden"
                style={{ color: "transparent" }}
                src={logo}
              />
            </Link>
            <Link
              className=" mb-6 inline-block"
              to="/">
              <img
                alt="Xhibiter | NFT Marketplace"
                loading="lazy"
                width={130}
                height={28}
                decoding="async"
                data-nimg={1}
                className="hidden max-h-7 dark:block mb-6"
                style={{ color: "transparent" }}
                src={logoLight}
              />
            </Link>
            <p className="dark:text-marshland-300 mb-12">
              Your Trusted Partner For Cryptocurrency And Money Exchange.
            </p>
            <div className="flex space-x-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                href="https://www.facebook.com">
                <svg className="icon group-hover:fill-accent fill-marshland-300 h-5 w-5 dark:group-hover:fill-white">
                  <use xlinkHref="/icons.svg#icon-facebook" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                href="https://www.twitter.com">
                <svg className="icon group-hover:fill-accent fill-marshland-300 h-5 w-5 dark:group-hover:fill-white">
                  <use xlinkHref="/icons.svg#icon-twitter" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                href="https://www.discord.com">
                <svg className="icon group-hover:fill-accent fill-marshland-300 h-5 w-5 dark:group-hover:fill-white">
                  <use xlinkHref="/icons.svg#icon-discord" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                href="https://www.instagram.com">
                <svg className="icon group-hover:fill-accent fill-marshland-300 h-5 w-5 dark:group-hover:fill-white">
                  <use xlinkHref="/icons.svg#icon-instagram" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                href="https://www.tiktok.com">
                <svg className="icon group-hover:fill-accent fill-marshland-300 h-5 w-5 dark:group-hover:fill-white">
                  <use xlinkHref="/icons.svg#icon-tiktok" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-full sm:col-span-3 md:col-span-2 md:col-start-7">
            <h3 className="font-display text-marshland-700 mb-6 text-sm dark:text-white">
              Links{" "}
            </h3>
            <ul className="dark:text-marshland-300 flex flex-col space-y-1">
              {headerLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    className="hover:text-accent dark:hover:text-white"
                    to={item.uri}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="col-span-full sm:col-span-3 md:col-span-2 ">
            <h3 className="font-display text-marshland-700 mb-6 text-sm dark:text-white">
              Company
            </h3>
            <ul className="dark:text-marshland-300 flex flex-col space-y-1">
              <li>
                <a
                  className="hover:text-accent dark:hover:text-white"
                  href="/home/home_7#">
                  Explore
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent dark:hover:text-white"
                  href="/home/home_7#">
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent dark:hover:text-white"
                  href="/home/home_7#">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent dark:hover:text-white"
                  href="/home/home_7#">
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent dark:hover:text-white"
                  href="/home/home_7#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-full sm:col-span-3 md:col-span-2 ">
            <h3 className="font-display text-marshland-700 mb-6 text-sm dark:text-white">
              My Account
            </h3>
            <ul className="dark:text-marshland-300 flex flex-col space-y-1">
              <li>
                <a
                  className="hover:text-accent dark:hover:text-white"
                  href="/home/home_7#">
                  Authors
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent dark:hover:text-white"
                  href="/home/home_7#">
                  Collection
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent dark:hover:text-white"
                  href="/home/home_7#">
                  Author Profile
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent dark:hover:text-white"
                  href="/home/home_7#">
                  Create Item
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
          <span className="dark:text-marshland-400 text-sm">
            <span>
              © {/* */}
              {new Date().getFullYear()}
              {/* */} Vhee's Xchange — Made by
            </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent dark:hover:text-white"
              href="https://onyedikaanagha.dev">
              {" "}
              {/* */}Onyedika Anagha
            </a>
          </span>
          <ul className="dark:text-marshland-400 flex flex-wrap space-x-4 text-sm">
            <li>
              <a
                className="hover:text-accent dark:hover:text-white"
                href="#!">
                Terms and conditions
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent dark:hover:text-white"
                href="#!">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
