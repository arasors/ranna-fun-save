import {store} from "0.lib/context/store";

export const setUsers = data => {
    store.dispatch({
        type: "UPDATE_USER",
        payload: data
    });
};

export const resetUsers = () => {
    store.dispatch({
        type: "RESET_USER"
    });
};
