import { createSelector } from "reselect";
import { RootState } from "../store";
import { ThemeState } from "./theme.reducer";

const selectThemeReducer = (state: RootState): ThemeState => state.theme;

export const selectTheme = createSelector(
  [selectThemeReducer],
  (theme) => theme.mode
);
