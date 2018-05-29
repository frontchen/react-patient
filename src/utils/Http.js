import es6promise from 'es6-promise';
import Frisbee from 'frisbee';
import querystring from 'querystring';

import Config from '../config/Config';

es6promise.polyfill ();

const api = new Frisbee ({
  baseURI: Config.url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Method: 'GET',
  },
});

let Http = {
  apiWithTimeout: (method, path, params = {}, timeout = 10000) => {
    return new Promise ((resolve, reject) => {
      setTimeout (() => {
        reject ('网络超时');
      }, timeout);

      api[method] (path, params).then (resolve, reject);
    });
  },
  get: (path, params) => {
    return Http.request ({method: 'get', path, params});
  },
  post: (path, params) => {
    params.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };
    return Http.request ({method: 'post', path, params});
  },
  put: (path, params) => {
    return Http.request ({method: 'put', path, params});
  },
  request: async ({method, path, params}) => {
    // post 序列号参数
    if (method === 'post' && typeof params.body === 'object') {
      params.body = querystring.stringify (params.body);
    }

    let res = await Http.apiWithTimeout (method, path, params);

    if (res.err) {
      return Promise.reject ('系统错误:' + res.originalResponse.status);
    }
    try {
      // console.log([path, params, res.body]);
      //let result = JSON.parse(res.body);
      let result = res.body;
      console.log ([path, params, result]);

      if (result.code === 0) {
        return Promise.resolve (result.msg);
      }
      // 超时自动登录
      // ...
      return Promise.reject (result.msg);
    } catch (e) {
      return Promise.reject ('数据解析失败');
    }
  },
};

export default Http;
