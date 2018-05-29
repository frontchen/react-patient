export default {
  data: {
    id: 33,
  },
  //医生录首页
  doctorindex: params => {
    return window.api.post ('doctor/homepage', {body: params});
  },

  //搜索医生
  searchdoctor: params => {
    return window.api.post ('search', {body: params});
  },
  //我的医生列表
  mydoctorlist: params => {
    return window.api.post ('my_doctors', {body: params});
  },
  // 我的医生搜索
  mydoctorsearch: params => {
    return window.api.post ('my_search', {body: params});
  },
  //医生详情页--医生详情
  doctordetail: params => {
    return window.api.post ('doctordetail', {body: params});
  },
  //医生详情页--收藏医生
  doctorcollect: params => {
    return window.api.post ('set_follow', {body: params});
  },
  // 医生详情页--开放病例本列表
  openmedicallist: params => {
    return window.api.post ('my_casebook', {body: params});
  },
  // 医生详情页--开放病例本设置
  openmedicalset: params => {
    return window.api.post ('my_casebook_set', {body: params});
  },
  // 医生详情页--患者评论列表
  patientcommentlist: params => {
    return window.api.post ('patient_comment', {body: params});
  },
  // 医生详情页--患者对医生投诉
  doctorcomplaint: params => {
    return window.api.post ('add_support', {body: params});
  },
  //医生详情页--简介
  doctorintro: params => {
    return window.api.post ('my_doctor_note', {body: params});
  },
  //医生详情页--去留言
  letterlist: params => {
    return window.api.post ('doc_messages', {body: params});
  },
  //医生留言-删除留言
  deleteletter: params => {
    return window.api.post ('delete_message', {body: params});
  },
  //医生留言-已读状态修改
  updatestate: params => {
    return window.api.post ('update_message', {body: params});
  },
  //医生留言-搜索医生留言
  searchmessage: params => {
    return window.api.post ('search_message', {body: params});
  },
  //医生留言-获取患者和指定医生的聊天列表
  appointmessage: params => {
    return window.api.post ('appoint_message', {body: params});
  },
  //去约医生-医生列表
  calldoctorlist: params => {
    return window.api.post ('go_doctors', {body: params});
  },
  //去约医生-医生列表搜索
  searchappointlist: params => {
    return window.api.post ('go_doctors_search', {body: params});
  },
  //去约医生-指定医生可预约时间段
  durationtime: params => {
    return window.api.post ('duration_time', {body: params});
  },
};
