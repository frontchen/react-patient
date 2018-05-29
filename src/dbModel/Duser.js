export default {
  data: {
    id: 33,
  },
  //我的首页
  userindex: params => {
    return window.api.post ('myHomePage', {body: params});
  },
  //我的首页-个人信息
  userdetail: params => {
    return window.api.post ('myPersonInfo', {body: params});
  },
  // 首页-更新个人信息
  updatepersoninfo: params => {
    return window.api.post ('updatePersonInfo', {body: params});
  },
};
