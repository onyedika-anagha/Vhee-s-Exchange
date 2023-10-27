import Preloader from "components/toolkit/preloader.component";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { BlogElement } from "utils/helper/helper";
import { Pagination } from "swiper/modules";
import { sizes } from "utils/helper/states";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import HomeBlogItem, {
  HomeBlogItemLoader,
} from "components/home/blog-item.component";

function BlogDetails() {
  const [news, setNews] = useState<BlogElement[]>([]),
    [newsDetails, setNewsDetails] = useState<BlogElement | null>(null);
  const { page, slug } = useParams(),
    recentNews = news?.filter((item) => item.alias !== slug),
    currentPage = page != null ? Number(page) : 1;
  console.log(currentPage);
  const getNews = async () => {
      const uri = `https://www.cryptohopper.com/rest/api/v2/news/list?page=${currentPage}&limit=6`;

      try {
        const response = await fetch(uri);
        const data: BlogElement[] = await response.json();
        const itemDetail = data.filter((item) => item.alias === slug);
        setNews(data);
        setNewsDetails(itemDetail[0]);
      } catch (error) {
        console.log(error);
      }
    },
    { innerWidth } = window;
  console.log(innerWidth, sizes.mobileL);
  useEffect(() => {
    setNewsDetails(null);
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  const blogItems =
    news.length === 0
      ? new Array(12).fill(0).map((item, i) => (
          <SwiperSlide key={i}>
            <HomeBlogItemLoader />
          </SwiperSlide>
        ))
      : news.map((item, i) => (
          <SwiperSlide key={i}>
            <HomeBlogItem
              item={item}
              page={1}
            />
          </SwiperSlide>
        ));
  // console.log(`newsDetails: `, newsDetails);
  if (newsDetails == null) return <Preloader />;
  const {
    images: { imageIntro, imageIntroAlt },
    title,
    fullText,
    createdByAlias,
    created,
  } = newsDetails;
  return (
    <section className="relative py-16 md:py-24">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden"></picture>
      <div className="container">
        <header className="mx-auto mb-16 max-w-lg text-center">
          <div className="mb-3 inline-flex flex-wrap items-center space-x-1 text-xs"></div>
          <h1 className="font-display text-marshland-700 mb-4 text-2xl dark:text-white sm:text-5xl">
            {title}
          </h1>
          <div className="inline-flex items-center separate">
            <img
              alt={createdByAlias}
              width={40}
              height={40}
              className="mr-4 h-10 w-10 shrink-0 rounded-full bg-stone-500/30"
              src={"imageIntro"}
              style={{
                color: "transparent",
                marginRight: "12px",
                borderRadius: 444,
                width: 40,
                height: 40,
              }}
            />
            <div className="text-left">
              <span className="dark:text-marshland-200 text-marshland-700 text-2xs font-medium tracking-tight">
                {createdByAlias}
              </span>
              <div className="text-marshland-400 flex flex-wrap items-center space-x-2 text-sm">
                <span>
                  <time>{new Date(created).toLocaleDateString()}</time>
                </span>
              </div>
            </div>
          </div>
        </header>
        <figure className="relative mb-16 flex items-center justify-center">
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
            width={innerWidth > sizes.tablet ? 1170 : "100%"}
            height={innerWidth > sizes.tablet ? 678 : "100%"}
            className="rounded-2xl w-full h-full object-cover bg-stone-500/30"
            src={imageIntro}
            style={{ color: "transparent" }}
          />
        </figure>
        <article className="mb-12">
          <div className="article-content">
            <Markdown children={fullText} />
          </div>
        </article>
        <div className="mx-auto max-w-[48.125rem]">
          <h2 className="font-display text-marshland-700 mb-8 text-3xl dark:text-white">
            Related Posts
          </h2>
          <div className="container">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView="auto"
              loop={true}
              breakpoints={{
                240: {
                  slidesPerView: 1,
                },
                565: {
                  slidesPerView: 2,
                },
                995: {
                  slidesPerView: 3,
                },
              }}
              className=" card-slider-4-columns !py-5">
              {blogItems}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
