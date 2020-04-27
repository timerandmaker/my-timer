<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <hr>
    <textarea maxlength="120" placeholder="请输入要bb的内容,但是只能bb最多120个字"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="comment" v-for="(item, i) in commentList" :key="item.add_time">
      <div class="top">
        第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
      </div>
      <div class="bottom">
        {{item.content === 'undefined' || item.content === '' ? '这个B真懒，这评论是空的？！': item.content}}
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="addMore">加载更多</mt-button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    data(){
      return {
        pageindex: 1,
        commentList: []
      }
    },
    created(){
      this.getComments()
    },
    methods: {
      getComments(){
        this.$http.get('api/getcomments/'+ this.id +'?pageindex='+ this.pageindex).then(result => {
          if(result.body.status === 0){
             this.commentList = this.commentList.concat(result.body.message)
          }else{
            Toast('数据获取失败')
          }
        })
      },
      addMore(){
        this.pageindex++
        this.getComments()
      }
    },
    props: ['id']
  }
</script>

<style lang="scss">
.comment-container{
  h3{
    font-size: 18px;
  }
  .comment{
    padding-top: 10px;
    font-size: 12px;
  }
  textarea{
    margin: 0;
  }
  .top{
    background-color: #ccc;
    padding: 5px;
  }
  .bottom{
    padding: 10px;
  }
}
</style>
