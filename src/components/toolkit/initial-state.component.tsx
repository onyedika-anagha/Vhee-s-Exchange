import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "store/theme/theme.action";
import { selectTheme } from "store/theme/theme.selector";
import { THEME_KEY } from "utils/helper/states";

const InitialState = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  // siteInfo = useSelector(selectInfo)

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY);
    if (
      localTheme == null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(setTheme("dark"));
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
