<template>
        <div class="mui-numbox" data-numbox-min='1'  style="height: 25px;;">
                <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
                <input  id="test" class="mui-input-numbox" type="number" :value="initcount" 
                @change="countChanged" ref="numbox" readonly/>
                <button class="mui-btn mui-btn-numbox-plus" type="button" > +</button>
        </div>
    </template>
    
    
    <script>
    import mui from "../../lib/mui/js/mui.min.js";
    export default{
        mounted(){
            mui(".mui-numbox").numbox();
        },
        methods: {
           countChanged(){
               console.log(this.$refs.numbox.value)
               this.$store.commit("updateGoodsInfo",{
                   id: this.goodsid,
                   count: this.$refs.numbox.value
               })
           }
        },
        props:["initcount","goodsid"]
    }
    
    
    </script>
    
    
    <style lang="scss" scoped>
    
    /* .mui-numbox-flx .mui-btn-numbox-minus, .mui-numbox .mui-numbox-btn-minus {
        left: 0;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .mui-numbox-flx [class*=btn-numbox], .mui-numbox [class*=numbox-btn] {
        font-size: 18px;
        font-weight: 400;
        line-height: 100%;
        position: absolute;
        top: 0;
        overflow: hidden;
        width: 40px;
        height: 100%;
        padding: 0;
        color: #555;
        border: none;
        border-radius: 0;
        background-color: #f9f9f9;
    } */
    </style>