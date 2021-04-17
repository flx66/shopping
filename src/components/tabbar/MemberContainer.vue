<template>
    <div id="profile">

        <!--1.单独封装一个组件: 利用slot知识点-->
        <div class="user_info">
            <div>
                <img src="https://th.bing.com/th/id/R162017452ca70c9db36bbd4da2a24bf4?rik=9uj1jwRO2dYmnQ&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f201809%2f28%2f1538072527267700.jpg&ehk=keRYTA3K1UulvYTknEFi8W5BLe9%2b58QYuMTrCENC564%3d&risl=&pid=ImgRaw"
                    alt="">
            </div>
            <div style="margin-left:15px ;padding-top:7px">
                <span @click="login">
                    <router-link to="/member/login">登录/注册{{this.$store.str}}</router-link>
                </span>
                <p>暂未绑定手机号</p>
            </div>
        </div>

        <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
        <section class="account">
            <div class="account-item">
                <div class="number">
                    <span class="balance">0.00</span>元
                </div>
                <div class="account-info">我的余额</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>个
                </div>
                <div class="account-info">我的优惠</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>分
                </div>
                <div class="account-info">我的积分</div>
            </div>
        </section>
        <div style="margin-top:20px">
            <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
                <li class="mui-table-view-cell">
                    <div class="mui-table">
                        <span class="mui-icon mui-icon-chat" style="color:darkgray"></span>
                        <span style="margin-left:6px">我的消息</span>
                    </div>
                </li>
                <li class="mui-table-view-cell">
                    <div class="mui-table">
                        <span class="mui-icon-extra mui-icon-extra-grech" style="color:cornflowerblue"></span>
                        <span style="margin-left:6px">积分商城</span>
                    </div>
                </li>
                <li class="mui-table-view-cell">
                    <div class="mui-table">
                        <span class="mui-icon-extra mui-icon-extra-comment" style="color:burlywood; width:25px"></span>
                        <span style="margin-left:6px">会员卡</span>
                    </div>
                </li>
            </ul>
            <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed" style="margin-top: 20px">
                <li class="mui-table-view-cell">
                    <div class="mui-table">
                        <span class="mui-icon mui-icon-person"></span>
                        <span style="margin-left:6px">个人信息</span>
                    </div>
                </li>
                <li class="mui-table-view-cell">
                    <div class="mui-table">
                        <span class="mui-icon mui-icon-pulldown" style="color:darkgray"></span>
                        <span style="margin-left:6px">下载app</span>
                        
                    </div>
                    
                </li>
            </ul>
        </div>
        <!-- 3.封装成一个整体 -->

    </div>

</template>

<script>
    export default {

        
        data: function () {
            return {
                
                orderList: [{
                        icon: '#order',
                        iconColor: '#ff8198',
                        info: '我的消息'
                    },
                    {
                        icon: '#point',
                        iconColor: '#fc7b53',
                        info: '积分商城'
                    },
                    {
                        icon: '#vip',
                        iconColor: '#ffc636',
                        info: '会员卡'
                    },
                ],
                serviceList: [{
                        icon: '#service',
                        iconColor: '#ff8198',
                        info: '我的购物车'
                    },
                    {
                        icon: '#download',
                        iconColor: '#ff8198',
                        info: '下载购物APP'
                    },
                ],
                
            }
        },
        created() {
            
        },
        methods: {
            login() {
                console.log(1)
            }
        },
        
        
    }
    
</script>

<style scoped>
    img {
        width: 50px;
        border-radius: 50%;
    }

    .user_info {
        display: flex;
        background-color: #09f7eb;
        align-items: center;

    }

    #zi {
        padding-right: 30px;
    }

    #profile {
        background-color: #f2f2f2;
    }

    .nav-bar {
        background-color: var(--color-tint);
        font-weight: 700;
        color: #fff;
    }

    .account {
        display: flex;
    }

    .account-item {
        width: 100%;
        background-color: #fff;
        margin-right: 1px;
        text-align: center;
    }

    .account-item:last-of-type {
        margin-right: 0;
    }

    .account-item {
        color: #666;
        font-size: 13px;
        padding: 18px;
    }

    .account-item .balance {
        font-size: 24px;
        font-weight: 700;
        color: #ff5f3e;
    }

    .account-info {
        margin-top: 6px;
    }

    .order-list,
    .service-list {
        margin-top: 12px;
    }
</style>