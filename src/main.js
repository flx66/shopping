// 入口文件
import Vue from 'vue'



//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.2  安装路由
Vue.use(VueRouter)
//2.1 导入 vue-resource
import VueResource from 'vue-resource'
//2.2 安装 vue-resource
Vue.use(VueResource) 
//注册vuex
Vue.http.options.emulateJSON = true
//设置请求根路径
Vue.http.options.root = ''

import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(sessionStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state: { // this.$store.state.***
        car: car ,//存储购物车中商品的数据，用一个数组存储起来 { id:商品的id，count：要购买的数量，price：商品的单价，selected：false}
        str:''


    },
    mutations: { // this.$store.commit('方法的名称','按需传递唯一的参数')
        addToCar(state, goodsinfo) {
            //点击加入购物车。把商品信息，保存到 store 中的 car 上
            var flag = false
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += paresInt(goodsinfo.count)
                    flag = true
                    return ture
                }
            })
            
            if (!flag) {
                state.car.push(goodsinfo)
            }

            //当更新 car 之后， 把car数组存储到本地的sessionStorage中
            sessionStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo) {
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
        sessionStorage.setItem('car', JSON.stringify(state.car))    
        },
        removeFormCar(state, id) {
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return ture 
                }
            })
            sessionStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected =info.selected
                }
            })
            sessionStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: { // this.$store.getters.***
        getAllCount(state) {
            var c = 0;
            store.state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] =item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0,//勾选的数量
                amount: 0,//勾选的总价
            }
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count;
                    o.amount += item.price * o.count
                }
            })
            return o
        }

    }
})

//导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入过滤器
import './filters'



//导入Mint-UI组件
import { Header, Swipe, SwipeItem, Button,Switch} from 'mint-ui'



Vue.component(Switch.name, Switch)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button);

// 导入 APP 根组件
import app from './App.vue'

//1.3 导入自己的 router.js 路由模块
import router from './router.js'
Vue.use(VueRouter)


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,//1.4 挂载路由对象到VM实例上
    store,//挂载 store 状态管理对象
})