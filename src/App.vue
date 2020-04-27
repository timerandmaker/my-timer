<template>
  <div class="app-container">
    <mt-header fixed title="固定在顶部"></mt-header>

    <transition>
      <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

  </div>

</template>

<script>

</script>

<style scoped>
.app-container{
  padding-top: 40px;
  padding-bottom: 60px;
  overflow-x: hidden;
}
.mint-header.is-fixed{
  background-color: rgb(218,178,115);
}
.mui-bar-tab .mui-tab-item.mui-active{
  color: rgb(218,178,115);
}
.v-enter{
  transform: translateX(100%);
}
.v-leave-to{
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}

</style>
