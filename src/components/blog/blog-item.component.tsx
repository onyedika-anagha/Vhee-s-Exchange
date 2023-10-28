import Reveal from "components/toolkit/reveal.component";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { AnimateType, BlogElement } from "utils/helper/helper";

type PropType = {
  item: BlogElement;
  page: number;
};

const BlogItem = ({ item, page = 1 }: PropType) => {
  const {
    images: { imageIntro, imageIntroAlt },
    title,
    alias,
    createdByAlias,
    created,
    introText,
  } = item;
  return (
    <Reveal
      type={AnimateType.FadeInLeft}
      isArticle={true}>
      <div className="rounded-2xl overflow-hidden transition-shadow hover:shadow-lg">
        <figure className="group overflow-hidden ">
          <Link
            to={`/news/${page}/${alias}`}
            className="flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-200 text-center dark:text-stone-500/70 dark:bg-opacity-25 absolute"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20">
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
            <img
              alt={imageIntroAlt}
              loading="lazy"
              width={370}
              height={214}
              decoding="async"
              data-nimg={1}
              className="h-full w-full object-cover bg-stone-500/30 transition-transform duration-[1600ms] will-change-transform group-hover:scale-105 "
              src={imageIntro}
              style={{ height: 214, color: "transparent" }}
            />
          </Link>
        </figure>
        <div className="dark:border-marshland-600 dark:bg-marshland-700 border-marshland-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]">
          <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
            <span className="dark:text-marshland-200 text-marshland-700 font-display hover:text-marshland-500">
              {createdByAlias}
            </span>
          </div>
          <h2 className="font-display text-marshland-700 dark:hover:text-marshland-500 hover:text-marshland-500 mb-4 text-xl dark:text-white">
            <Link to={`/news/${page}/${alias}`}>{title}</Link>
          </h2>
          <p className="dark:text-marshland-200 mb-8 truncate ...">
            <Markdown children={introText} />
          </p>
          <div className="text-marshland-400 flex flex-wrap items-center space-x-2 text-sm">
            <span>
              <time>{new Date(created).toLocaleDateString()}</time>
            </span>
            {/* <span>•</span>
            <span>3 min read</span> */}
          </div>
        </div>
      </div>
    </Reveal>
  );
};
export default BlogItem;
