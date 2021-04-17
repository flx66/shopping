<template>
    <div style="text-algin:center">
        <h3 style="background-color: #fff;">用户登录</h3>
        <form class="mui-input-group" >
            <div class="mui-input-row">
                <label>用户名</label>
                <input ref="name" type="text" class="mui-input-clear" placeholder="请输入用户名">
            </div>
            <div class="mui-input-row">
                <label>密码</label>
                <input ref="password" type="password" class="mui-input-password" placeholder="请输入密码">
            </div>
            <div class="mui-button-row">
                <button type="button" class="mui-btn mui-btn-primary" @click="sure">确认</button>
                <button type="button" class="mui-btn mui-btn-danger">取消</button>
            </div>
        </form>
        
    </div>
    
</template>

<script>
    //var users = JSON.parse(localStorage.getItem('users') || '[]');
    import {
        MessageBox
    } from 'mint-ui';
    
    export default {
        data() {
            return {
                users: [{
                    name: "小王",
                    password: 666666
                },{
                    name: "小李",
                    password: 111111
                }
            ],
          
            
            }
        },
        created() {

        },
        
        methods: {
            sure() {
                sessionStorage.setItem('name', this.$refs.name.value)
                sessionStorage.setItem('password', this.$refs.password.value)
                for(let i = 0;i <= this.users.length;i++){
                if (this.$refs.name.value == this.users[i].name &&
                    this.$refs.password.value == this.users[i].password) {
                        this.$store.str = this.users[i].name;
                        console.log(this.$store.str);
                 return   MessageBox.alert('登录成功').then(action => {
                    this.$router.push({
                            path: '/member'
                        })
                       
                    })
                    
                } else {
                    MessageBox.alert('用户名或密码错误请重新登录')
                }
            }}
        },
    }
</script>

<style lang="scss" scoped>
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        height: 60px;
        text-align: center;
        line-height:61px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin: 0 auto;
        color: rgb(75, 131, 216);
        
    }
</style>