import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import _image_banner from "assets/img/top-contact-us-banner.jpg";
import { BlogElement } from "utils/helper/helper";
import Preloader from "components/toolkit/preloader.component";
import Pagination from "components/pagination/pagination.component";
import BlogItem from "components/blog/blog-item.component";

export const ITEMS_PER_PAGE = 12;
function News() {
  const [blog, setBlog] = useState<BlogElement[] | null>(null),
    [searchParams, setSearchParams] = useSearchParams(),
    initPage =
      searchParams.get("page") == null ? 1 : Number(searchParams.get("page")),
    [page, setPage] = useState(initPage),
    paginate = (pageNum: number) => {
      setBlog(null);
      setPage(pageNum);
    };

  const nextPage = () => {
    setBlog(null);
    setPage((currentPage) => currentPage + 1);
  };

  const prevPage = () => {
    setBlog(null);
    setPage((currentPage) => currentPage - 1);
  };
  const getNews = async () => {
    const uri = `https://www.cryptohopper.com/rest/api/v2/news/list?page=${page}&limit=${ITEMS_PER_PAGE}`;
    try {
      const response = await fetch(uri);
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setSearchParams((state) => ({ ...state, page: page }));
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  if (blog == null) return <Preloader />;
  return (
    <main>
      <div />
      <div className="pt-[5.5rem] lg:pt-24">
        <section
          className="after:bg-marshland-900/60 relative bg-cover bg-center bg-no-repeat py-32 after:absolute after:inset-0"
          style={{
            backgroundImage: `url(${_image_banner})`,
          }}>
          <div className="container relative z-10">
            <h1 className="font-display text-center text-4xl font-medium text-white">
              News
            </h1>
          </div>
        </section>
      </div>
      <section className="relative  pt-[5.5rem] lg:pt-24">
        <div className="py-16 md:py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              alt="gradient"
              width={1519}
              height={1119}
              decoding="async"
              data-nimg={1}
              className="h-full object-cover w-full"
              srcSet="/_next/image?url=%2Fimages%2Fgradient_light.jpg&w=1920&q=75 1x, /_next/image?url=%2Fimages%2Fgradient_light.jpg&w=3840&q=75 2x"
              src="/_next/image?url=%2Fimages%2Fgradient_light.jpg&w=3840&q=75"
              style={{ color: "transparent" }}
            />
          </picture>
          <div className="container">
            <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
              {blog.map((item, i) => (
                <BlogItem
                  item={item}
                  key={i}
                  page={page}
                />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Pagination
                currentPage={page}
                itemsPerPage={ITEMS_PER_PAGE}
                totalItems={200}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default News;
