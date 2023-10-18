export const loaderAction = (isLoader) => {
    return {
        type: "loader",
        payLoad: isLoader
    };
};