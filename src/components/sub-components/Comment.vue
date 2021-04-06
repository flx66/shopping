<template>
    <div>
        
        <h4>发表评论 ---{{newsid}}</h4>
        <hr>
        <textarea placeholder="请输入内容" maxlength="120"></textarea>
        <mt-button type="primary" size="large"></mt-button>

<!-- 评论列表区域 -->

        <mt-button type="dangrt" size="large" plain></mt-button>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                page:1
            };
        },
        created(){
            this.getCommentByPage();
        },

        methods: {
            async getCommentByPage(){
                //根据页数来获取评论的数据
               const{data}=await this.$http.get("/api/getcomments/"+this.newsid+"?pageindex="+this.page);
               console.log(data);
            }
        },
        props:['newsid'] //接受父组件穿过类的newsid
    }
</script>

<style lang="scss" scoped>
</style>