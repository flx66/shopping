<template>
    <div class="goodsinfo-container" >
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

        <!-- 商品轮播区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsinfo[i].title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{ goodsinfo[i].market_price }}</del>&nbsp;&nbsp;销售价:<span
                            class="now_price">￥{{  goodsinfo[i].sell_price }}</span>
                    </p>
                    <p>
                        购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo[0].stock_quantity"></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>

                    </p>
                </div>
            </div>

        </div>
        <!-- 商品差数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{  goodsinfo[i].goods_no }}</p>
                    <p>库存情况：{{  goodsinfo[i].stock_quantity }}</p>
                    <p>上架时间：{{  goodsinfo[i].address }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import swiper from '../sub-components/swiper.vue';
    //导入数字选择框组件
    import numbox from '../sub-components/goodsinfo_numbox.vue'
    export default {
        data() {
            return {
                id: this.$route.params.id,
                i: this.$route.params.id-89,
                goodsinfo: [{
                    id: 89,
                    title: "华为 Nova7 Pro",
                    market_price: 3699,
                    sell_price: 2699,
                    stock_quantity: 60,
                    goods_no: "1000111",
                    address: "北京"


                }, {
                    id: 90,
                    title: "华为 Mate 90",
                    market_price: 3999,
                    sell_price: 3699,
                    stock_quantity: 57,
                    goods_no: "1000112",
                    address: "湖北"


                }, {
                    id: 91,
                    title: "华为 Nova 8 Pro",
                    market_price: 3699,
                    sell_price: 2599,
                    stock_quantity: 79,
                    goods_no: "1000112",
                    address: "安徽"


                }
            ],
                lunbotu: [{
                        img: "https://x0.ifengimg.com/res/2020/EF8E5A33847687A1376CDE3928CCE538BEC3F916_size102_w810_h1200.jpeg"
                    },
                    {
                        img: "https://x0.ifengimg.com/res/2020/EF8E5A33847687A1376CDE3928CCE538BEC3F916_size102_w810_h1200.jpeg"
                    }
                ],
                ballFlag: false,
                selectedCount: 1, //保存用户选中的商品数量，默认用户买一个

            }
        },
        created() {
            this.getLunbotu();
            this.getGoodsInfo();
        },
        methods: {
            getGoodsInfo() {
                this.$http.get('api/goods/getinfo/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.goodsinfo = result.body.message[0];
                    }
                })
            },
            getLunbotu() {
                this.$http.get('api/getthumimages/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        result.body.message.forEach(item =>
                            item.img = item.src)
                        this.lunbotu = result.body.message;
                    }

                })
            },
            goDesc(id) {
                //点击使用编程式导航
                this.$router.push({
                    name: "goodsdesc",
                    params: {
                        id
                    }
                })
            },
            goComment(id) {
                this.$router.push({
                    name: "goodscomment",
                    params: {
                        id
                    }
                })
            },
            addToShopCar() {
                if(this.goodsinfo[this.i].address === "北京"){
                    alert("该地区存在疫情")
                }
                //添加到购物车
                this.ballFlag = !this.ballFlag;
                //{ id:商品的id，count：要购买的数量，price：商品的单价，selected：false }
                var goodsinfo = {
                    id: this.id,
                    count: this.selectedCount,
                    price : this.goodsinfo[this.i].sell_price,
                    selected: true
                };
                this.$store.commit("addToCar",goodsinfo);

            },
            beforeEnter(el) {
                el.style.transform = "translate(0,0)";
            },
            enter(el, done) {
                el.offsetWidth;

                const ballPosition = this.$refs.ball.getBoundingClientRect();
                const badgePosition = document.getElementById('badge').getBoundingClientRect();
                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;
                el.style.transform = `translate(${xDist}px,${yDist}px)`;
                el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
                done()
            },
            afterEnter(el) {
                this.ballFlag = !this.ballFlag;
            },
            getSelectedCount(count) {
                //当子组件把选中的数量传递给父组件的时候，把选中的值保存到data上
                this.selectedCount = count;
            }
        },
        components: {
            swiper,
            numbox
        }

    }
</script>

<style lang="scss" scoped>
    .goodsinfo-container {
        background-color: #eee;
        overflow: hidden;

        .now_price {
            color: red;
            font-size: 16px;
            font-weight: bold;
        }

        .mui-card-footer {
            display: block;

            button {
                margin: 15px 0;
            }
        }

        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 999;
            top: 385px;
            left: 146px;
        }
    }
</style>