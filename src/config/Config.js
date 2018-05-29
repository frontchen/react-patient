// 程序版本
const bundleVersion = '20180309';

// 环境设定 本地开发、正式环境
let environment = 'local';

// 数据接口
// http://192.168.1.2:8089/index.php/v1/
const apiUrl = {
  // local: 'http://192.168.1.103/index.php/v1/',
  local: 'http://192.168.1.31/index.php/v1/',
  online: 'http://192.168.1.56',
};

const hd = 'px';

const Config = {
  bundleVersion,
  environment,
  url: apiUrl[environment],
  hd,
};

module.exports = Config;
