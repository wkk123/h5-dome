// 全局配置

let baseUrl = '';
if (process.env.NODE_ENV === 'development'){//开发
  baseUrl = "";
} else if (process.env.NODE_ENV === 'production') {//生产 及上线
  baseUrl = "";
}

export { 
  baseUrl
};
