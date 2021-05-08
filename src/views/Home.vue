<template>
  <div id="HomeDiv">
    <h1>简历投递系统</h1>
    <hr />
    <div style="text-align: center">
      <div style="margin: 1rem auto">
        <el-button size="large" type="success" @click="gotoIntro">查看正在招新的小组</el-button> <el-button size="large" plain>投递简历</el-button>
      </div>
    </div>
    <h2>关于我们</h2>
    <hr />
    在这里放简介。
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    gotoIntro: function() {
      this.$router.push("/intro");
    }
  }
}
</script>
