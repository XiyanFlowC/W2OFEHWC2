<template>
  <el-container>
    <el-aside>
      <el-menu router :default-active="$route.path" mode2="vertical" id="adminnav">
        <el-menu-item index="/admin/home">首页</el-menu-item>
        <el-menu-item index="/admin/group" v-if='$root.role=="admin"'>介绍管理</el-menu-item>
        <el-menu-item index="/admin/resume" v-if='$root.role=="admin"'>简历管理</el-menu-item>
        <el-menu-item index='/admin/check' v-if='$root.role=="admin"'>简历审核</el-menu-item>
        <el-menu-item index="/admin/admin" v-if='$root.role=="boss"'>授权管理</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
        <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  mounted() {
  },
  methods: {
  },
  data() {
    return {

    }
  }
};
</script>

<style>
</style>