
import Vue from 'vue'
//导入moment
import moment from 'moment'



//定义全局时间过滤器
Vue.filter('dateFormat', function (dateStr,formatStr = 'YYYY-MM-DD HH:mm:ss'){
    return moment(dateStr).format(formatStr)
 })