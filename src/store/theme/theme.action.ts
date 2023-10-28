import { THEME_KEY } from "utils/helper/states";
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { THEME_ACTION_TYPES } from "./theme.types";

export type SetTheme = ActionWithPayload<THEME_ACTION_TYPES.SET_THEME, string>;

export const setTheme = withMatcher((data: string): SetTheme => {
  localStorage.setItem(THEME_KEY, data);
  return createAction(THEME_ACTION_TYPES.SET_THEME, data);
});
