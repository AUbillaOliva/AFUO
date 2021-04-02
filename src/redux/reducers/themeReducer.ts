import { SWITCH_THEME } from "../actions/types/types";

const themeReducer = (state: any = { theme: null }, action: any) => {
  switch (action.type) {
    case SWITCH_THEME:
      return { theme: action.theme };
    default:
      return state;
  }
};

export default themeReducer;
