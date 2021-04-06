<template>

   
    <!-- 新闻内容 -->
  <div  class="newsinfo-container">
      <h3 class="title">{{newsinfo.title}}</h3>
      <p class="info">
          <span>发表时间：{{newsinfo.add_time|dateFormat}}</span>
          <span>点击：{{newsinfo.click}}次</span>
      </p>
      <hr>
      <!-- 新闻内容 -->
    <div class="content" v-html="newsinfo.content"></div>
  <!-- 这里评论组件位置   -->
  
  <comment :newsid="id"></comment>
  </div>
</template>

<script>
    import comment from '../sub-components/Comment.vue'
        export default{
          data() {
              return {
               newsinfo:{}
              }
          },
          created() {
              this.gerNewsinfo();
          },
          
          methods: {
           async gerNewsinfo(){
              const{ data } = await this.$http.get("http://api.cms.liulongbin.top/api/getnew/"+this.id);
              if(data.status === 0)return (this.newsinfo = data.message[0]);
            }
        //     gerNewsinfo(){
        //         this.$http.get("http://api.cms.liulongbin.top/api/getnew/"+this.id).then(result => {
        //             if(data.status === 0){
        //                 return(this.newinfo = data.message[0]);
        //             }
        //         })
        //     }
          },
          props:["id"],
          components:{
              comment
          }
        }
      </script>

<style lang="scss" scoped></style>