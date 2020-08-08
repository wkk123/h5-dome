import qs from "qs";
const setLocal = function (name, content) {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};
const getLocal = function (name) {
  if (!name) return;
  return window.localStorage.getItem(name);
};
const removeLocal = function (name) {
  if (!name) return;
  window.localStorage.removeItem(name);
};

// sessionStorage
const setSession = function (name, content) {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};
const getSession = function (name) {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};
const removeSession = function (name) {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};
// 获取url后的某个值
const getQueryString = function (name, url) {
  url = url.split("?")[1];
  if (!url) return "";
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const obj = url.match(reg);
  if (!obj) return "";
  return obj[2];
};

// 用于get方法后面参数的拼接，传入data是对象
const getUrlConcat = function (data) {
  let dataStr = ""; //数据拼接字符串
  let url = "";
  Object.keys(data).forEach((key) => {
    dataStr += key + "=" + data[key] + "&";
  });
  if (dataStr !== "") {
    dataStr = dataStr.substr(0, dataStr.lastIndexOf("&")); // 去除掉最后一个"&"字符
    url = url + "?" + dataStr;
  }
  return url;
};
// 保留小数
const keepDecimal = (Num, a) =>{//Num小数,a位数   只截取 不计算
  let reg = new RegExp("^(.*\\..{" + a + "}).*$");
  return Number(String(Num).replace(reg, "$1"));
};
// 多个数据进行相加
const multiAdd = (...arg) => {
  let a = 0;
  for (let i = 0; i < arg.length; i++) {
    a += i;
  }
  return a;
};
// 随机数
const generateMixed = (n) => {
  let chars = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
  let str = "";
  for (let i = 0; i < n; i++) {
    let site = Math.ceil(Math.random() * 61);
    str += chars[site];
  }
  return str;
};

// Url参数解析 返回object
const urlResolver = function (url){
  let relust = qs.parse(url.split("?")[1]);
  return relust;
};

// 隐藏手机号中间四位
const phoneFormat = function (phone) {
  return phone.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2")
}
// 手机号正则判断
const phoneRegExp=function(phoneNum){
  return (/^1[34578]\d{9}$/.test(phoneNum))
}

export {
  setLocal,
  getLocal,
  removeLocal,
  setSession,
  getSession,
  removeSession,
  getQueryString,
  getUrlConcat,
  keepDecimal,
  multiAdd,
  generateMixed,
  urlResolver,
  phoneFormat,
  phoneRegExp,
};
