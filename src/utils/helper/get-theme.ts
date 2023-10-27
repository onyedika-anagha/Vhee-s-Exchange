import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/theme.selector";

const GetTheme = () => {
  const theme = useSelector(selectTheme);
  return theme;
};
export default GetTheme;
