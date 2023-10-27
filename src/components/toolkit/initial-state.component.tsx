import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "store/theme/theme.action";
import { selectTheme } from "store/theme/theme.selector";

const InitialState = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  // siteInfo = useSelector(selectInfo)

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // console.log(theme);
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme, dispatch]);
  return <></>;
};

export default InitialState;
