import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setTheme } from "store/theme/theme.action";
import { selectTheme } from "store/theme/theme.selector";
import logo from "assets/img/logo.png";
import logoLight from "assets/img/logo-light.png";
import { headerLinks } from "utils/helper/links";
import { AnimateType, classNames } from "utils/helper/helper";
import Reveal from "components/toolkit/reveal.component";
import { goToTop } from "components/pagination/pagination.component";
import Sidebar from "./sidebar.component";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false),
    [showSidebar, setShowSidebar] = useState<boolean>(false),
    theme = useSelector(selectTheme),
    dispatch = useDispatch(),
    switchTheme = () => {
      const mode = theme === "dark" ? "light" : "dark";
      dispatch(setTheme(mode));
    },
    toggleShowSidebar = (value?: boolean) => {
      if (value != null) {
        setShowSidebar(value);
        return;
      }
      setShowSidebar((state) => !state);
    };
  useEffect(() => {
    // Define a function to check the scroll position and update the state.
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event listener to the window when the component mounts.
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts to prevent memory leaks.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={classNames(
          "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors",
          scrolled ? "bg-white/20 dark:bg-black/20" : ""
        )}>
        <div className="flex items-center px-6 py-6 xl:px-24 ">
          <NavLink
            className="shrink-0"
            to="/">
            <div className="dark:hidden">
              <img
                alt="Vhee's Exchange"
                loading="lazy"
                width={130}
                height={28}
                decoding="async"
                data-nimg={1}
                className="max-h-7 h-auto "
                style={{ color: "transparent" }}
                src={logo}
              />
            </div>
            <div className="hidden dark:block">
              <img
                alt="Vhee's Exchange"
                loading="lazy"
                width={130}
                height={28}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                src={logoLight}
              />
            </div>
          </NavLink>
          <form
            action="search"
            className="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]">
            <input
              type="search"
              className="text-marshland-700 placeholder-marshland-500 focus:ring-accent border-marshland-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
              placeholder="Search"
            />
            <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="fill-marshland-500 h-4 w-4 dark:fill-white">
                <path
                  fill="none"
                  d="M0 0h24v24H0z"
                />
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
              </svg>
            </span>
          </form>
          <div className="js-mobile-menu dark:bg-marshland-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
            <nav className="navbar w-full">
              <ul className="flex flex-col lg:flex-row">
                {headerLinks.map((item, i) => (
                  <li
                    className="group"
                    key={i}>
                    <NavLink
                      to={item.uri}
                      className={({ isActive }) =>
                        classNames(
                          "font-display hover:text-vhee-500 focus:text-vhee-500",
                          "dark:hover:text-vhee-500 dark:focus:text-vhee-500 flex items-center",
                          "justify-between py-3.5 text-base dark:text-white lg:px-5",
                          isActive
                            ? "text-vhee-600 dark:text-vhee-500"
                            : "text-marshland-700"
                        )
                      }>
                      <span className="">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="ml-8 hidden items-center lg:flex xl:ml-12">
              <button
                className="js-dark-mode-trigger dark:bg-vhee-500 group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-marshland-100 bg-white transition-colors hover:border-transparent hover:bg-vhee-500 focus:border-transparent focus:bg-vhee-500 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-vhee-500"
                aria-label={theme}
                onClick={switchTheme}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="dark-mode-light h-4 w-4 fill-marshland-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden">
                  <path
                    fill="none"
                    d="M0 0h24v24H0z"
                  />
                  <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="dark-mode-dark hidden h-4 w-4 fill-marshland-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white">
                  <path
                    fill="none"
                    d="M0 0h24v24H0z"
                  />
                  <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="ml-auto flex lg:hidden">
            <button
              className="js-dark-mode-trigger dark:bg-vhee-500 group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-marshland-100 bg-white transition-colors hover:border-transparent hover:bg-vhee-500 focus:border-transparent focus:bg-vhee-500 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-vhee-500"
              aria-label={theme}
              onClick={switchTheme}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="dark-mode-light h-4 w-4 fill-marshland-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden">
                <path
                  fill="none"
                  d="M0 0h24v24H0z"
                />
                <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="dark-mode-dark hidden h-4 w-4 fill-marshland-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white">
                <path
                  fill="none"
                  d="M0 0h24v24H0z"
                />
                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
              </svg>
            </button>
            <button
              className="js-mobile-toggle border-marshland-100 hover:bg-vhee-500 dark:hover:bg-vhee-500 focus:bg-vhee-500 group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
              aria-label="open mobile menu"
              onClick={() => toggleShowSidebar()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="fill-marshland-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                <path
                  fill="none"
                  d="M0 0h24v24H0z"
                />
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {scrolled && (
        <Reveal
          type={AnimateType.FadeInUp}
          className="fixed z-[9999999999]  right-6 bottom-[124px] md:bottom-[180px] gizmo:md:bottom-[143px] lg:bottom-[80px]">
          <button
            onClick={goToTop}
            className={classNames(
              "cursor-pointer bg-vhee-500 group ml-2 flex h-10 w-10 items-center justify-center",
              " rounded-full border border-marshland-100 transition-colors hover:border-transparent",
              "hover:bg-vhee-500 focus:border-transparent focus:bg-vhee-500",
              "dark:border-transparent dark:bg-white/[.15] dark:hover:bg-vhee-500 text-vhee-50"
            )}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="icon-sm m-1"
              height="1em"
              width="1em">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </button>
        </Reveal>
      )}
      {showSidebar && <Sidebar toggleShowSidebar={toggleShowSidebar} />}
    </>
  );
};

export default Header;
