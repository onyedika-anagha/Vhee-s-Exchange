import Reveal from "components/toolkit/reveal.component";
import { Link } from "react-router-dom";
import { AnimateType, BlogElement } from "utils/helper/helper";

type PropType = {
  item: BlogElement;
  page: number;
};

const HomeBlogItem = ({ item, page = 1 }: PropType) => {
  const {
    // images: { imageIntro, imageIntroAlt },
    title,
    alias,
    createdByAlias,
    created,
    introText,
  } = item;
  return (
    <Reveal
      type={AnimateType.FadeInLeft}
      isArticle={true}
      className="rounded-2.5xl bg-white p-12 dark:bg-marshland-700">
      <>
        <div className="mb-4 flex flex-wrap gap-4 text-2xs dark:text-marshland-300">
          <div className="flex flex-wrap items-center space-x-2">
            <span className="text-accent">
              <span className="uppercase">{createdByAlias}</span>
            </span>
          </div>
          <span>
            <time>{new Date(created).toLocaleDateString()}</time>
          </span>
        </div>
        <h2 className="mb-5 font-display text-xl text-marshland-700 hover:text-accent dark:text-white dark:hover:text-accent">
          <Link to={`/news/${page}/${alias}`}>{title}</Link>
        </h2>
        <p className="mb-8 text text-marshland-700 dark:text-marshland-300 truncate ...">
          {introText}
        </p>
        <div className="overflow-hidden">
          <Link
            className="inline-block transition-transform will-change-transform hover:translate-x-1"
            to={`/news/${page}/${alias}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="fill-vhee-500">
              <path
                fill="none"
                d="M0 0h24v24H0z"
              />
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
            </svg>
          </Link>
        </div>
      </>
    </Reveal>
  );
};
// h-2.5 bg-gray-200 rounded-full dark:bg-stone-500 dark:bg-opacity-25 w-48 mb-4
export const HomeBlogItemLoader = () => {
  return (
    <article className="rounded-2.5xl bg-white p-12 dark:bg-marshland-700">
      <div className="mb-4 flex flex-wrap gap-4 text-2xs dark:text-marshland-300">
        <div className="flex flex-wrap items-center space-x-2">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-stone-500 dark:bg-opacity-25 w-20 mb-4"></div>
        </div>
        <span>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-stone-500 dark:bg-opacity-25 w-12 mb-4"></div>
        </span>
      </div>
      <h2 className="mb-5 font-display text-xl text-marshland-700 hover:text-accent dark:text-white dark:hover:text-accent">
        <div className="h-3 bg-gray-200 rounded-full dark:bg-stone-500 dark:bg-opacity-25 w-100 mb-4"></div>
      </h2>
      <p className="mb-8 text text-marshland-700 dark:text-marshland-300">
        <div className="h-3 bg-gray-200 rounded-full dark:bg-stone-500 dark:bg-opacity-25 w-[100%] mb-4"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-stone-500 dark:bg-opacity-25 w-[95%] mb-4"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-stone-500 dark:bg-opacity-25 w-[65%] mb-4"></div>
      </p>
      <div className="overflow-hidden">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-stone-500 dark:bg-opacity-25 w-4 mb-4"></div>
      </div>
    </article>
  );
};

export default HomeBlogItem;
