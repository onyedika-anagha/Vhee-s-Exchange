import { AnyAction } from "redux";
import { setTheme } from "./theme.action";

export type ThemeState = {
  readonly mode: string;
};

const THEME_INITIAL_STATE: ThemeState = {
  mode: "light",
};

export const themeReducer = (
  state = THEME_INITIAL_STATE,
  action = {} as AnyAction
): ThemeState => {
  if (setTheme.match(action)) {
    return { ...state, mode: action.payload };
  }
  return state;
};
