<template>
    <div>
        <!-- 轮播图区域 -->
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
        
        <!-- 六宫格布局 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/home/newslist'>
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">Email</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                    <span class="mui-icon-extra mui-icon-extra-gold" style="font-size:2.5em;
                    color:rgb(200, 216, 58)"></span> 
                        <div class="mui-media-body">商品购买</div></router-link></li>
               
                
            </ul> 
    </div>
   
</template>

<script>
import { Toast } from 'mint-ui';
import swiper from '../sub-components/swiper.vue';
export default{
    data() {
        return {
            lunbotuList: [
                {
                    id:1,
                    img:"https://uploadfile.bizhizu.cn/up/ae/60/3e/ae603e91639ccc99e27cc177ade2d80c.jpg",
                   
                },
                {
                    id:2,
                    img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb8859c31e431fe84c8977705d1bd442.jpg"
                },
                {
                    id:3,
                    img:"https://th.bing.com/th/id/Rd0e47f7daef141d92b2921b20273af4d?rik=5uoxPc6M5g63fQ&riu=http%3a%2f%2fimg.poppur.com%2f1525427280.jpg-sm&ehk=49PtQvG%2bDDc8lyeKPgdUuN5Ugzj%2foXlEnViG5iWbCbg%3d&risl=&pid=ImgRaw"
                }
            ]
        }
    },
    created() {
        this.getLunbotu();
    },
    methods: {
        getLunbotu(){
            this.$http.get('http://api.cms.liulongbin.top/api/getlunb').then(result => {
                //console.log(result.body);
                if(result.body.status === 0) {
                    this.lunbotuList = result.body.message;
                } else {
                    Toast('获取失败')
                }
            })
        }
    },
    components:{
        swiper
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 180px;   
  .mint-swipe-item{
    img{
      width: 100%;
      height: 100%;
    }
  }
}

</style>