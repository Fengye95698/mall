import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import axios from 'axios';
import { request } from './network/request';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant,{lazyComponent: true
});
Vue.config.productionTip = false
// Vue.prototype.axios = axios;
Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
