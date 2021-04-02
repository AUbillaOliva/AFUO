import { darkTheme, lightTheme } from "../theme/theme";

export const loadState = () => {
  try {
    if (typeof window !== "undefined") {
      const serializedState = window.localStorage.getItem("theme");
      if (serializedState === null) {
        return lightTheme;
      }
      console.log(serializedState);
      return JSON.parse(serializedState);
    } else {
        return lightTheme;
    }
  } catch (error) {
    console.log(error.message);
    return lightTheme;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("theme", serializedState);
  } catch (error) {
    console.error(error.message);
  }
};
