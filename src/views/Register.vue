<template>
  <div>
      <text-request
        v-for="qdatus in qdata"
        :key="qdatus.id"
        v-model="qdatus.ans"
        :question="qdatus.question">
      </text-request>
      <hr />
      <el-button type="success" @click="submit">提交简历</el-button>
  </div>
</template>

<script>
import TextRequest from "../components/TextRequest.vue"

export default {
    mounted() {
        //stub
    },
    methods: {
        submit() {
            //console.log(this.qdata[0].ans);
            //stub
            this.$message({message: '成功提交！', type: 'success'})
        }
    },
    data() {
        return {
            qdata: [{id: "0", type: "text", question: "性别", ans: ""},
            {id: '1', type: "text", question: "年龄", ans: ""},
            {
                id: '2', type: "text", question: "通知电邮", ans: ""
            }]
        }
    },
    components: {TextRequest}
}
</script>

<style>

</style>