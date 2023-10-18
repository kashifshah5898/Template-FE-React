const { loaderAction } = require("../Redux/Actions/Action");
const { default: store } = require("../Redux/Store/store");



const showLoader = () => {
    //    showLoader
    store.dispatch(loaderAction(true));
}

const hideLoader = () => {
    // hideLoader
    store.dispatch(loaderAction(false));
}

module.exports = {
    baseUrl: "http://localhost:3001/api/",
    showLoader: () => showLoader(),
    hideLoader: () => hideLoader(),
}