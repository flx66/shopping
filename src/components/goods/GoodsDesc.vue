<template>
    <div>
        <h3>{{ info.title }}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            info:{
                title:"华为 Nova 7 pro",
                content:"<p>超薄手感，尽显尊贵</p>"

            }
        }
    },
    created() {
        this.getGoodsDesc()
    },
    methods: {
        getGoodsDesc(){
            this.$http.get("api/goods/getdesc/" + this.$route.params.id)
            .then(result => {
                if(result.body.status === 0){
                    this.info = resuly.body.message
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
</style>