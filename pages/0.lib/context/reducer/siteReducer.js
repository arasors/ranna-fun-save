const initialState = {
    theme: 'light',
    language: 'tr-TR'
};

function siteReducer(state = initialState, action){
    let data;
    switch (action.type){
        case "TOGGLE_THEME":
            data = {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
            return data;
        case "CUSTOM_THEME":
            data = {
                ...state,
                theme: action?.payload
            };
            return data;
        case "UPDATE_LANGUAGE":
            data = {
                ...state,
                language: action.value
            };
            return data;
        case "LOGOUT_USER":
            data = {
                ...state,
                user:{
                    ...initialState.user
                }
            };
            return data;
        case "UPDATE_SITE":
            data = {
                ...state,
                ...action.payload
            };
            return data;

        default: return state;
    };
};

export default siteReducer;
