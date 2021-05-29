import Vue from "vue";
import VueRouter from "vue-router";
import Index from './pages/index.vue'
import Home from './pages/home/home.vue'
import ProductDetail from './pages/product/productDetail.vue'
import DepartmentOverview from './pages/department/departmentOverview.vue'
import Cart from './pages/cart/cart.vue'
import Order from './pages/order/order.vue'
import OrderConfirmation from './pages/order/orderConfirmation.vue'
import OrdersList from './pages/order/ordersList.vue'
import OrderPayment from './pages/order/orderPayment.vue'
import Login from "./pages/login/login";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            redirect: "/home",
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'departmentOverview/:category',
                    name: 'departmentOverview',
                    component: DepartmentOverview
                },
                {
                    path: 'productDetail/:id',
                    name: 'productDetail',
                    component: ProductDetail
                },
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: 'orderConfirmation',
                    name: 'orderConfirmation',
                    component: OrderConfirmation
                },
                {
                    path: 'ordersList',
                    name: 'ordersList',
                    component: OrdersList
                },
                {
                    path: 'orderPayment',
                    name: 'orderPayment',
                    component: OrderPayment
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
