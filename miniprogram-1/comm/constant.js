var baseUrl = "https://www.ketelin.com.cn:8089/";
var productTypeUrl = baseUrl + "/leipin/query?page=1";
var productUrl = baseUrl + "/goods/findByType";
var sendCode = baseUrl + "sendCode";
var saveOrderUrl = baseUrl + "order/add";
exports.productTypeUrl = productTypeUrl
exports.productUrl = productUrl;
exports.sendCode = sendCode;
exports.saveOrderUrl = saveOrderUrl;