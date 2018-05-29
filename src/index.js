import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

// 函数
import config from './config/Config';
import Http from './utils/Http';
// 数据请求
import Dcommon from './dbModel/Dcommon';
import Dpatient from './dbModel/Dpatient';
import Ddoctor from './dbModel/Ddoctor';
import Duser from './dbModel/Duser';

// 页面
import Pages from './pages/Pages';

// 全局函数
window.api = Http;
window.App = {
  config,
  Dcommon,
  Dpatient,
  Ddoctor,
  Duser
};

ReactDOM.render(
  <Router>
    <Pages />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
