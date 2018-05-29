export default {
  doctordetail: params => {
    return window.api.get('doctordetail', { body: params });
  }
};
