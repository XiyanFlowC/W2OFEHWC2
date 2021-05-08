<template>
  <div v-if='$root.role=="admin"'>
      <h2>管理员主页</h2>
      <hr/>
      <h3>待确认的简历</h3>
      <resume-entry v-for="entry in entries" :key="entry.id" :submitter="entry.uploader">
      </resume-entry>
  </div>
  <div v-else-if="$root.role=='boss'">
      <h2>行政员主页</h2>
      <hr />
      请从左侧菜单选择操作
  </div>
  <div v-else>
      未授权的访问，行为已被记录
  </div>
</template>

<script>
import ResumeEntry from '../components/ResumeEntry.vue'

export default {
  components: { ResumeEntry },
    mounted() {
    },
    data() {
        return {
            entries: []
        }
    }
}
</script>

<style>

</style>