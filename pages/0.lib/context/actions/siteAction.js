import {store} from "0.lib/context/store";

export const toggleTheme = theme => {

    if (theme === false) {
        store.dispatch({
            type: "TOGGLE_THEME",
            payload: theme
        });
    }else{
        store.dispatch({
            type: "CUSTOM_THEME",
            payload: theme
        });
    }
};

export const updateSite = data => {
    store.dispatch({
        type: "UPDATE_SITE",
        payload: data
    })
};
