<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu router :default-active="$route.path" mode="horizontal" id="nav">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/intro">小组简介</el-menu-item>
          <el-menu-item index="/resume">加入小组</el-menu-item>
          <el-menu-item index='/admin/admin' v-if="$root.role == 'admin' || $root.role=='boss'">管理中心</el-menu-item>
          <el-menu-item index='/login' v-if='$root.role == null'>登录</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <div class="container">
          <router-view />
        </div>
      </el-main>
      <el-footer>
        <hr />
        <div style="text-align: center">All rights reserved.</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
