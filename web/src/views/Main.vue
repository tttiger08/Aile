<template>
  <div>
    <router-view></router-view>
    <div class="footer">
      <router-link tag="div" to="/item">
        <div>
          <i class="iconfont icon-webicon17"></i>
          <span>我的事项</span>
        </div>
      </router-link>

      <router-link tag="div" to="/data">
        <div>
          <i class="iconfont icon-wenjianjia"></i>
          <span>资料库</span>
        </div>
      </router-link>
      <router-link tag="div" to="/home">
        <div>
          <i class="iconfont icon-wode"></i>
          <span>我的</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>
<style >
.footer {
  border-top: 1px solid #eeeeee;
  display: flex;
  justify-content: space-around;
  height: 1.333333rem;
  padding-top: 0.133333rem;
  background-color: #ffffff;
}
.footer div {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.footer i {
  font-size: 0.466667rem;
}
.router-link-active {
  color: #4CC172;
}
</style>
