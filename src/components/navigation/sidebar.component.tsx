import { NavLink } from "react-router-dom";
import Reveal from "components/toolkit/reveal.component";
import { AnimateType } from "utils/helper/helper";
import { headerLinks } from "utils/helper/links";
// import logo from "assets/img/logo.png";
// import logoLight from "assets/img/logo-light.png";

function Sidebar({
  toggleShowSidebar,
}: {
  toggleShowSidebar: (value?: boolean) => void;
}) {
  return (
    <Reveal
      type={AnimateType.FadeInLeft}
      className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-marshland-800">
      <>
        {" "}
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-marshland-500 uppercase dark:text-marshland-400">
          Menu
        </h5>
        <button
          onClick={() => toggleShowSidebar(false)}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-marshland-400 bg-transparent hover:bg-marshland-200 hover:text-marshland-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-marshland-600 dark:hover:text-white">
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {headerLinks.map((link, i) => (
              <li
                key={i}
                onClick={() => toggleShowSidebar(false)}>
                <NavLink
                  to={link.uri}
                  className="flex items-center p-2 text-marshland-900 rounded-lg dark:text-white hover:bg-marshland-100 dark:hover:bg-marshland-700 group">
                  <span className="ml-3">{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </>
    </Reveal>
  );
}

export default Sidebar;
