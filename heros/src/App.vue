<template>
  <div id="app">
    <!-- 3.0 使用头部组件 -->
    <HerosTop/>
    <div class="container-fluid">
      <div class="row">
        <!-- 3.0 使用侧边栏组件 -->
        <HerosSlide />
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// 1.0 导入组件
// 导入头部组件
import HerosTop from '@/components/HerosTop.vue';
// 导入侧边栏组件
import HerosSlide from '@/components/HerosSlide.vue';

export default {
  components: {
    // 2.0 注册组件
    HerosTop,
    HerosSlide
  }
};
</script>

<style scoped>
/* 只要加了这个属性：这个文件中的样式会有自己的作用域 */

</style>
