const loaderReducer = (state = false, action) => {
    switch (action.type) {
        case "loader": {
            state = action.payLoad;
            return state;
        }
        default:
            return state;
    }
};

export default loaderReducer;
