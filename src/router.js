import VueRouter from 'vue-router'

//导入对应的路由对象
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import Goodsinfo from './components/goods/Goodsinfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
import Login from './components/login/Login.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [//配置路由规则的
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: Newsinfo, props: true },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: Goodsinfo , name:'goodsinfo'},
    { path: '/home/goodsdesc/:id', component: GoodsDesc , name:'goodsdesc' },
    { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' },
    { path: '/member/login', component: Login }

    
  ],
  linkActiveClass:'mui-active' // 默认路由高亮的类 router-link-active
})

// 把路由对象暴露出去
export default router