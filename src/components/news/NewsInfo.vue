<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time}}</span>
      <span>点击次数：{{newsinfo.click}}</span>
    </p>
    <hr>
    <div v-html="newsinfo.content"></div>

    <comment :id="id"></comment>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'

  import comment from '../subcomponents/Comment.vue'

  export default {
    data(){
      return {
        id: this.$route.params.id,
        newsinfo: {}
      }
    },
    created(){
      this.getNewsInfo(this.id)
    },
    methods: {
      getNewsInfo(id){
        this.$http.get('api/getnew/' + id).then(result => {
          if(result.body.status === 0){
            this.newsinfo = result.body.message[0]
          }else{
            Toast('获取失败')
          }
        })
      }
    },
    components: {
      'comment': comment
    }
  }
</script>

<style lang="scss">
.newsinfo-container{
  padding: 0 4px;
  .title{
    font-size: 14px;
    color: red;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
