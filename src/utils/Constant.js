const { loaderAction } = require("../Redux/Actions/Action");
const { default: store } = require("../Redux/Store/store");
const CryptoJS = require("crypto-js");
// const jwt_decode = require("jwt-decode");

const CRYPTO_SECRET = "cc6d5235118e039e";

const showLoader = () => {
  //    showLoader
  store.dispatch(loaderAction(true));
};

const hideLoader = () => {
  // hideLoader
  store.dispatch(loaderAction(false));
};

const catchBlock = (err) => {
  return err?.message || err || "Something went wrong";
};

const axiosCatchBlock = (error) => {
  return {
    success: false,
    data: [],
    msg: error?.message || "Something went wrong",
    encodedData: "",
  };
};

const decodeData = (data) => {
  try {
    if (data?.response?.data?.encodedData) {
    }

    let bytes = CryptoJS.AES.decrypt(data, CRYPTO_SECRET);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    originalText = JSON.parse(originalText);
    const payLoad = {
      success: originalText?.success,
      data: originalText?.data || [],
      msg: originalText?.msg || "API call succeeded",
      encodedData: data,
    };

    return payLoad;
  } catch (error) {
    const payLoad = {
      success: false,
      data: [],
      msg: catchBlock(error),
      encodedData: data,
    };

    return payLoad;
  }
};

const getItemFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);

  return decodeData(item);
};

module.exports = {
  baseUrl: "http://localhost:5000/api//",
  CRYPTO_SECRET: "cc6d5235118e039e",
  showLoader: () => showLoader(),
  hideLoader: () => hideLoader(),
  decodeData: (data) => decodeData(data),
  catchBlock: (err) => catchBlock(err),
  axiosCatchBlock: (err) => axiosCatchBlock(err),
  getItemFromLocalStorage: (key) => getItemFromLocalStorage(key),
};
