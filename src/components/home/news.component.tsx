import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { BlogElement } from "utils/helper/helper";
import HomeBlogItem, { HomeBlogItemLoader } from "./blog-item.component";

function NewsSlide() {
  const [blog, setBlog] = useState<BlogElement[] | null>(null);
  // [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getNews = async () => {
    const uri = `https://www.cryptohopper.com/rest/api/v2/news/list?page=1&limit=12`;
    try {
      const response = await fetch(uri);
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   // Define a function to update the state with the current screen size.
  //   const updateScreenSize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   // Attach the resize event listener to the window when the component mounts.
  //   window.addEventListener("resize", updateScreenSize);

  //   // Clean up the event listener when the component unmounts to prevent memory leaks.
  //   return () => {
  //     window.removeEventListener("resize", updateScreenSize);
  //   };
  // }, []);
  useEffect(() => {
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blogItems =
    blog == null
      ? new Array(12).fill(0).map((item, i) => (
          <SwiperSlide key={i}>
            <HomeBlogItemLoader />
          </SwiperSlide>
        ))
      : blog.map((item, i) => (
          <SwiperSlide key={i}>
            <HomeBlogItem
              item={item}
              page={1}
            />
          </SwiperSlide>
        ));
  // const slidesPerView =
  //   screenWidth < sizes.mobileL ? 1 : screenWidth < sizes.laptop ? 2 : 3;
  return (
    <div>
      <section className="financial-section bg-light-base py-24 pb-80 dark:bg-marshland-900 ">
        <div className="container">
          <div className="mx-auto mb-12 max-w-sm text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-marshland-700 dark:text-white">
              Financial News
            </h2>
            <p className="text-lg dark:text-marshland-300">
              Keep updated about the crypto space.
            </p>
          </div>
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
      </section>
    </div>
  );
}

export default NewsSlide;
