<template>
    <div class="map">
        <div id="chart" style=" width:100%;height:500px;"></div>
    </div>
</template>

<script>
import *as echarts from 'echarts' //引入echarts
import jsonp from 'jsonp'
require('echarts/map/js/china.js')  //引入中国地图

let option ={
    title:{
        text:'疫情地图',
        x:'center',
        textStyle:{
            color:'#9c0505'
        }
    },
    tooltip:{
                trigger:'item', //类型
                // 地图：{a}（系列名称），{b}(区域名称)，{c}（含并数值），{d}(无)
                formatter:'地区：{b}<br/>确诊：{c}'
            },
    series:[
        {
            type:'map',
            map:'china',
            data:[
                {name:'北京',value:200},
                {name:'湖北',value:20000},
                {name:'安徽',value:195},
                {name:'湖南',value:20000},
                {name:'四川',value:2000},
            ],
            label:{//图形上的文本标签，可用于说明图形的一些数据信息
                show:true,
                color:'red',
                fontSize:12,

            },
            zoom:1.5,//当前视角的缩放比例
            grid:{
                left:'0',
                top:'0'

            },
            itemStyle:{
                //地图样式
                borderColor:'blue',
            },
            emphasis:{
                //高亮状态下设置
            }
        }
    ],
    visualMap: { //视觉地图
           type:'piecewise',
           show:true,
           pieces:[
               {min:10000},
               {min:1000,max:9999},
               {min:100,max:999},
               {min:10,max:99},
               {min:1,max:9},
               {value:0}
           ],
            inRange: {
                color: ['#fff', '#ffaa85', '#660208']
            }
        },
}

export default{
    data() {
        return {
          myChart:''  
        }
    },
    mounted() {
        this.myChart = echarts.init(document.getElementById('chart'));
        this.myChart.setOption(option);
        window.onrisize = this.myChart.resize()
    },
    methods: {
        getData(){
            jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',(err,data) =>{
                var lists = data.data.list.map(item =>{return{name: item.name,value: item.value}});
                option.series[0].data = lists;
                this.myChart.setOption(option);
            })
        }
    },
}
</script>

<style lang="scss" scoped>
  


</style>