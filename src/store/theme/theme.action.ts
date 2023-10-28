import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { THEME_ACTION_TYPES } from "./theme.types";

export type SetTheme = ActionWithPayload<THEME_ACTION_TYPES.SET_THEME, string>;

export const setTheme = withMatcher((data: string): SetTheme => {
  localStorage.setItem("theme", data);
  return createAction(THEME_ACTION_TYPES.SET_THEME, data);
});
