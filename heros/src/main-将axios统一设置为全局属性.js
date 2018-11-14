import Vue from 'vue';
import App from './App';
import router from './router';
// 引入axios
import Axios from 'axios';

// vue-cli生成的项目如果要全局引用css样式，可以直接在main.js中引入
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '@/assets/css/index.css';

// 将Axios添加到vue对象中
Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
