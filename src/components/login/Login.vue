<template>
    <div style="text-algin:center">
<h3>用户登录</h3>
            <form class="mui-input-group" style="margin-top:60px"> 
                    <div class="mui-input-row">
                        <label>用户名</label>
                    <input ref="name" type="text" class="mui-input-clear" placeholder="请输入用户名">
                    </div>
                    <div  class="mui-input-row">
                        <label>密码</label>
                        <input ref="password" type="password" class="mui-input-password" placeholder="请输入密码">
                    </div>
                    <div class="mui-button-row">
                        <button type="button" class="mui-btn mui-btn-primary" @click="sure">确认</button>
                        <button type="button" class="mui-btn mui-btn-danger" >取消</button>
                    </div>
                </form> 
    </div>
</template>

<script>
export default{
    data() {
        return {
            
        }
    },
    methods: {
        sure(){
            sessionStorage.setItem('name',this.$refs.name.value)
            sessionStorage.setItem('name',this.$refs.password.value)
        }
    },
}
</script>

<style lang="scss" scoped>
  h1, h2, h3, h4, h5, h6 {
    text-align: center;
    line-height: 1;
    margin-top: 5px;
    margin-bottom: 5px;
    color: rgb(75, 131, 216);
}
</style>