import { SWITCH_THEME } from "./types/types";

export const switchTheme = (theme: any) => {
    return (dispatch: any) => {
        dispatch({
            type: SWITCH_THEME,
            theme: theme,
        });
    }
}