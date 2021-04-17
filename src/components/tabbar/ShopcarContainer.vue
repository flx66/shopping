<template>
    <div class="shopcar-container">
        <div class="goods-list">

            <!-- 商品列表项目区域 -->
            <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
                            @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.img_url">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]"></numbox>
                                <!-- 如何从购物车中获取商品的数量 -->

                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计</p>
                        <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件，总价 <span
                                class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
        <!-- <p>{{$store.getters.getGoodsSelected}}</p> -->
    </div>

</template>
<script>
    import numbox from '../sub-components/shopcar_numbox.vue'
    import Toast from 'mint-ui'
    export default {
        data() {
            return {
                goodslist: [
                //    {
                //         "id": 89,
                //         "title": "华为 Nova 7 Pro",
                //         "add_time": "2021-04-19T16:23:02.000Z",
                //         "click": 0,
                //         "img_url": "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/nova7-pro-5g/jennifer-r-sliver.png",
                //         "sell_price": 2999,
                //         "market_price": 3699,
                //         "stock_quantity": 99
                //     },
                    // {
                    //     "id": 90,
                    //     "title": "华为 Nova 7 Pro",
                    //     "add_time": "2021-04-19T16:23:02.000Z",
                    //     "click": 0,
                    //     "img_url": "https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/mate-x2/list/img-pink-v1.png",
                    //     "sell_price": 3699,
                    //     "market_price": 2999,
                    //     "stock_quantity": 99
                    // },
                //     {
                //         "id": 91,
                //         "title": "华为 Nova 7 Pro",
                //         "add_time": "2021-04-19T16:23:02.000Z",
                //         "click": 0,
                //         "img_url": "https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/porsche-design-mate40-rs/list-img/white-listimg.png",
                //         "sell_price": 3699,
                //         "market_price": 2999,
                //         "stock_quantity": 99
                //     }

                ]
            }
        },
        created() {
            this.getGoodsList()

        },
        methods: {
            getGoodsList() {
                
                //1.获取到 store 中所有的商品的id，然后拼接出一个用逗号分隔的字符串
                var idArr = [];
                this.$store.state.car.forEach(item => idArr.push(item.id));
                //如果购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
                // if (idArr, length <= 0) {
                //     return;
                // }
                //获取购物车商品列表
                // this.$http.get("api/goods/getshopcarlist/" + idArr.join(","))
                // .then(result => {
                //         if (result.body.status === 0) {
                //             this.goodslist = result.body.message
                //         }
                //     })
                this.$http.get("http://127.0.0.1:8000/getshopcarlist/" + idArr.join(","))
                .then(result =>{

                    console.log(idArr.join(","))
                    this.goodslist=result.body
                    console.log(result.body)
                    
                })
            },
            remove(id, index) {
                //点击删除，把商品从store中根据传递的id删除，同时把当前组件中的goodslist中对应要删除的商品使用index来删除
                this.goodslist.splice(index, 1);
                this.$store.commit('removeFormCar', id)
            },
            selectedChanged(id, val) {
                this.$store.commit("updateGoodsSelected", {
                    id,
                    selected: val
                })

            }
        },
        components: {
            numbox
        }
    }
</script>

<style lang="scss" scoped>
    .shopcar-container {
        background-color: #eee;
        overflow: hidden;

        .goods-list {
            .mui-card-content-inner {
                display: flex;
                align-items: center;
            }

            img {
                width: 60px;
                height: 60px;
            }

            h1 {
                font-size: 14px;
            }

            .info {
                .price {
                    color: red;
                    font-size: bold;
                }
            }
        }

        .jiesuan {
            display: flex;
            justify-content: space-between;
            align-items: center；
        }

        .red {
            color: red;
            font-weight: bold;

        }
    }
</style>