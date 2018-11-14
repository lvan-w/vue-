// 引入axios
import Axios from 'axios';

var obj = {};
// 添加方法
obj.install = function(vue) {
  // 给所有的axios将请求注册默认的地址

  // 1.0 直接将Axios对象添加到vue对象中
  // Axios.defaults.baseURL = 'http://localhost:3000';
  // vue.prototype.$http = Axios;

  // 2.0 使用axios创建一个对象，再将对象添加到vue中
  var instance = Axios.create({
    baseURL: 'http://localhost:3000'
  });
  var instance2 = Axios.create({
    baseURL: 'http://localhost:4000'
  });
  vue.prototype.$http = instance;
  vue.prototype.$http2 = instance2;
};
export default obj;
