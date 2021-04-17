<template>
    <div>

        <h4>发表评论 ---{{newsid}}</h4>
        <hr>
        <textarea placeholder="请输入内容" maxlength="120" ref='textarea'></textarea>
        <mt-button @click='fabiao' type="primary" size="large">发表评论</mt-button>
        <ul v-for='(item,index) in message'>
            <li>
                <p style="font-weight:bold;font-size:18px;border-top:1px solid">{{item.content}}</br>
                    <li style="display: flex;justify-content: space-between"><span >用户名：{{item.uesr_name}}</span>
                    <span>时间：{{item.time}}</span>
                </li>
                </p>
            </li>
        </ul>
        <!-- 评论列表区域 -->

        <!-- <mt-button type="dangrt" size="large" plain>加载更多</mt-button> -->
    </div>
</template>


<script>
    
    export default {
        data() {
            return {
                page: 1,
                message: [{
                    uesr_name: '小王',
                    content: '性能配置不错',
                    time:"2021-3-1"
                }, {
                    uesr_name: '小李',
                    content: '玩游戏很流畅不错',
                    time:"2021-3-1"
                }]
            };
        },
        created() {
            this.getCommentByPage();

        },

        methods: {
            async getCommentByPage() {
                //根据页数来获取评论的数据
                const {
                    data
                } = await this.$http.get("/api/getcomments/" + this.newsid + "?pageindex=" + this.page);
                console.log(data);
            },
            fabiao() {
                // var ul = document.querySelector('ul');
                // var li =document.createElement('li');
                // ul.appendChild(li);
                // li.innerHTML = (this.$refs.textarea.value)
                var myDate = new Date();
                var data1 = {
                    uesr_name: '匿名用户',
                    content:this.$refs.textarea.value,
                    time:myDate.getFullYear() + `-` + myDate.getMonth()+ `-` + myDate.getDate()
                };
                this.message.push(data1);
                return this.message
             


            }
        },
        props: ['newsid'] //接受父组件穿过类的newsid
    }
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    p,li{
        background-color: white;
        list-style: none;
        margin-left: 0;
        padding-left: 0;
      
    }
</style>