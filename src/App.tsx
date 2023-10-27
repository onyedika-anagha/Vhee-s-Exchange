import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "components/navigation";
import InitialState from "components/toolkit/initial-state.component";
import { _links } from "utils/helper/links";
import Preloader from "components/toolkit/preloader.component";

const Home = lazy(() => import("./routes/home"));
const About = lazy(() => import("./routes/about"));
const Contact = lazy(() => import("./routes/contact"));
const News = lazy(() => import("./routes/news"));
const Services = lazy(() => import("./routes/services"));
const BlogDetails = lazy(() => import("routes/news/blog-detail"));
function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <InitialState />
      <Routes>
        <Route
          path="/"
          element={<Navigation />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path={_links.about}
            element={<About />}
          />
          <Route
            path={_links.contact_us}
            element={<Contact />}
          />
          <Route
            path={_links.news}
            element={<News />}
          />
          <Route
            path="news/:page/:slug"
            element={<BlogDetails />}
          />
          <Route
            path={_links.services}
            element={<Services />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
