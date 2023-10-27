import React from "react";
import { classNames } from "utils/helper/helper";

export const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
type Prop = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNum: number) => void;
  nextPage: () => void;
  prevPage: () => void;
};
const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
  nextPage,
  prevPage,
}: Prop) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const truncatedPageNumbers = (() => {
    if (pageNumbers.length <= 5) {
      return pageNumbers;
    }

    if (currentPage <= 3) {
      return [...pageNumbers.slice(0, 4), "...", pageNumbers.length];
    }

    if (currentPage >= pageNumbers.length - 2) {
      return [1, "...", ...pageNumbers.slice(pageNumbers.length - 4)];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      pageNumbers.length,
    ];
  })();
  const prev = () => {
    if (currentPage === 1) {
      return;
    }
    // goToTop();
    prevPage();
  };
  const next = () => {
    console.log(pageNumbers.length);
    if (pageNumbers.length === currentPage) {
      return;
    }
    // goToTop();
    nextPage();
  };
  return totalItems === 0 ? (
    <></>
  ) : (
    <nav className="flex items-center justify-center mt-4">
      <ul className="pagination inline-flex -space-x-px text-sm">
        <li className="cursor-pointer">
          <button
            onClick={prev}
            className={classNames(
              "flex items-center justify-center px-3 h-8 ml-0 leading-tight",
              "text-marshland-500 bg-white border border-marshland-300 rounded-l-lg hover:bg-marshland-100 hover:text-marshland-950",
              "dark:bg-marshland-900 dark:border-marshland-950 dark:text-marshland-100 dark:hover:bg-marshland-950 dark:hover:text-white"
            )}
            //  "px-3 py-1 rounded bg-marshland-200 hover:bg-marshland-300"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>

        {truncatedPageNumbers.map((number, index) => (
          <li
            key={index}
            className="cursor-pointer">
            {number === "..." ? (
              <span className="px-3 py-1 text-marshland-950 dark:text-marshland-200">
                ...
              </span>
            ) : (
              <button
                onClick={() =>
                  currentPage === number ? null : paginate(Number(number))
                }
                className={classNames(
                  "flex items-center justify-center px-3 h-8 leading-tight",
                  currentPage === number
                    ? classNames(
                        "text-vhee-600 border border-marshland-300 bg-vhee-50 hover:bg-vhee-100 hover:text-vhee-700",
                        "dark:border-marshland-950 dark:bg-vhee-500 dark:text-white"
                      )
                    : classNames(
                        "text-marshland-500 bg-white border border-marshland-300 hover:bg-marshland-100 hover:text-marshland-950",
                        "dark:bg-marshland-900 dark:border-marshland-950 dark:text-marshland-200 dark:hover:bg-marshland-950 dark:hover:text-white"
                      )
                )}
                // className={`px-3 py-1 rounded ${currentPage === number ? 'bg-vhee-500 text-white' : 'bg-marshland-200 hover:bg-marshland-300'}`}
              >
                {number}
              </button>
            )}
          </li>
        ))}

        {currentPage < pageNumbers.length && (
          <li className="cursor-pointer">
            <button
              onClick={next}
              className={classNames(
                "flex items-center justify-center px-3 h-8 leading-tight rounded-r-lg",
                "text-marshland-500 bg-white border border-marshland-300 hover:bg-marshland-100 hover:text-marshland-950",
                "dark:bg-marshland-900 dark:border-marshland-950 dark:text-marshland-400 dark:hover:bg-marshland-950 dark:hover:text-white"
              )}>
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
