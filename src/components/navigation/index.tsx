import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Navigation = () => {
  return (
    <>
      <Header />
      {/*END HEADER SECTION*/}
      <Outlet />
      <Footer />
      {/* <SearchModel /> */}

      {/* <NavBar /> */}
    </>
  );
};
export default Navigation;
