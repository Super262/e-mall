import Vue from 'vue'
import axios from "axios";
import router from './router.js'
import App from './App.vue'
import store from './store';
import VueCookie from 'vue-cookie';
import ElementUI from 'element-ui';
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.use(VueCookie);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.$message = Message;

// 根据前端跨域方式调整，/a/b：/api/a/b => /a/b
axios.defaults.baseURL = '/prod-api';
axios.defaults.timeout = 80000;
axios.defaults.withCredentials = true;

// 错误拦截接口，同时提取data
axios.interceptors.response.use((response) => {
    let res = response.data;
    // 这是根据自定义的返回值格式所做的预处理，后期可以根据自身业务调整
    switch (res.status) {
        case 0:
            if (res.data === undefined) {
                res.data = "0";
            }
            return res.data;
        case 1:
            Message.error("密码错误");
            break;
        case 2:
            Message.error("用户名已存在");
            break;
        case 3:
            Message.error("参数错误");
            break;
        case 4:
            Message.error("邮箱已存在");
            break;
        case 10:
            Message.error("请先登录");
            // 当前不在Vue环境中，使用基础的跳转方式
            window.location.href = '/#/login';
            break;
        case 11:
            Message.error("用户名或密码错误");
            break;
        case 12:
            Message.error("商品下架或删除");
            break;
        case 13:
            Message.error("商品不存在");
            break;
        case 14:
            Message.error("库存不正确");
            break;
        case 15:
            Message.error("购物车里无此商品");
            break;
        case 16:
            Message.error("删除收货地址失败");
            break;
        case 17:
            Message.error("收货地址不存在");
            break;
        case 18:
            Message.error("请选择商品后下单");
            break;
        case 19:
            Message.error("订单不存在");
            break;
        case 20:
            Message.error("订单状态有误");
            break;
        default:
            Message.error("未知错误");
            break;
    }
    return undefined;
})

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
