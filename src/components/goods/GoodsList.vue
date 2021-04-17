<template>
    <div class="goods-list">
    <div  class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
        <img :src="item.img_url" alt="">
        <h1 class="title">{{ item.title }}</h1>
        <div class="info">
            <p class="price">
                <span class="now">￥{{ item.sell_price }}</span>
                <span class="old">￥{{ item.market_price }}</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩{{ item.stock_quantity }}件</span>
            </p>
        </div>
    </div>
     
        
            <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
    
</template>


<script>
export default{
    data() {
        return {
         pageindex:1,
         goodslist: [
           {"id": 89,
            "title": "华为 Nova 7 Pro",
            "add_time": "2021-04-19T16:23:02.000Z",
            "click": 0,
            "img_url": "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/nova7-pro-5g/jennifer-r-sliver.png",
            "sell_price": 2999,
            "market_price": 3699,
            "stock_quantity": 99} ,
            {"id": 90,
            "title": "华为 mate 90",
            "add_time": "2021-04-19T16:23:02.000Z",
            "click": 0,
            "img_url": "https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/mate-x2/list/img-pink-v1.png",
            "sell_price": 3699,
            "market_price": 3999,
            "stock_quantity": 99} ,
            {"id": 91,
            "title": "华为 Nova 8 Pro",
            "add_time": "2021-04-19T16:23:02.000Z",
            "click": 0,
            "img_url": "https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/porsche-design-mate40-rs/list-img/white-listimg.png",
            "sell_price":2599 ,
            "market_price": 3699,
            "stock_quantity": 99} ,
            {"id": 92,
            "title": "华为  p40 Pro",
            "add_time": "2021-04-19T16:23:02.000Z",
            "click": 0,
            "img_url": "https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/nova8/plp/silver-v2.png",
            "sell_price": 3999,
            "market_price": 4999,
            "stock_quantity": 99},
            {"id": 93,
            "title": "华为 Nova 7 ",
            "add_time": "2021-04-19T16:23:02.000Z",
            "click": 0,
            "img_url": "https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/mate-40-e/list-img/n-silver-cn.png",
            "sell_price": 2599,
            "market_price": 3999,
            "stock_quantity": 99},
            {"id": 94,
            "title": "华为 mate 7 Pro",
            "add_time": "2021-04-19T16:23:02.000Z",
            "click": 0,
            "img_url": "https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/mate30e-pro-5g/list-img/orange@2x.png",
            "sell_price": 2699,
            "market_price": 3999,
            "stock_quantity": 99}   
            
         ]   
        };
    },
    created(){
        this.getGoodsList();
    },
    methods: {
        getGoodsList(){
            //获取商品列表
            this.$http.get("http://api.cms.liulongbin.top").then(result=>{
                //http://api.cms.liulongbin.top/api/getprodlist
                if(result.body.status === 0) {
                    this.goodslist = this.goodslist.concat(result.body.message);
                
                    
                }
            })
        },
        getMore(){
            this.pageindex++;
            this.getGoodsList();
        },
        goDetail(id){
            this.$router.push("/home/goodsinfo/" + id);
        }
    },
}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    
.goods-item{
    width: 49%;
    height: -webkit-fill-available;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    padding:2px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height:293px;
    img{
        width:100%;
        height: 52%;
    }
  
    .title{
        font-size: 14px;
    }
    .info{
        background-color: #eee;
        p{
            margin:0;
            padding: 5px;
        }
        
    .price{
            .now{
                color: red;
                font-weight:bold;
                font-size:16px

            }
            .old{
                text-decoration: line-through;
                font-size: 12px;
                margin-left: 10px;
            }
            
        }
        .sell{
            display: flex;
            justify-content: space-between;
            font-size: 12px;
        }
    }
  }
} 
    
</style>