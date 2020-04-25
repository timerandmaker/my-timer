<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in imgList" :key="item.id">
        <img :src="imgList[0].img" alt=""></img>
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/testPng.png" alt="">
        <div class="mui-media-body">Home</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/testPng.png" alt="">
        <div class="mui-media-body">Email</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/testPng.png" alt="">
        <div class="mui-media-body">Chat</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/testPng.png" alt="">
        <div class="mui-media-body">location</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/testPng.png" alt="">
        <div class="mui-media-body">Search</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/testPng.png" alt="">
        <div class="mui-media-body">Phone</div></a></li>
  </ul>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  data(){
    return {
      imgList: []
    };
  },
  created(){
    this.getLunbotu();
  },
  methods: {
    getLunbotu(){
      this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
        if(result.body.status === 0){
          this.imgList = result.body.message;
          Toast('获取数据成功！');
        }else{
          Toast('获取数据失败...');
        }
      },function(){
        Toast('断网了？？？');
      })
    }
  }
}
</script>

<style scoped>
.mint-swipe{
  height: 200px;
}
.mint-swipe-item:nth-child(1){
  background-color: bisque;
}
.mint-swipe-item:nth-child(2){
  background-color: green;
}
.mint-swipe-item:nth-child(3){
  background-color: pink;
}
img{
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell img{
  height: 60px;
  width: 60px;
}
</style>
