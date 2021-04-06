<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
            <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
            <input  id="test" class="mui-input-numbox" type="number" value="1" 
            @change="countChanged" ref="numbox"/>
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
            //每当文本框数值改变的时候，立即把最新的数据通过数据调用传递给父组件
            // console.log(this.$refs.numbox.value)
            this.$emit('getcount',parseInt(this.$refs.numbox.value));
        }
    },
    props:["max"],
    watch:{
        max: function(newVal,oldVal){
            mui(".mui-numbox").numbox().setOption("max",newVal);
            
        }
    }
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