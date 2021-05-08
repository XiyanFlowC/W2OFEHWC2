<template>
  <div>
      <h2>加入小组</h2>
      <hr />
      {{grpname}}
      <h2>简历提交</h2>
      <hr />
      <input type="file" id="resumeupld" />
      <el-button type="success" @click="upload">提交简历文件</el-button>
      <h2>或者完成表单</h2>
      <hr />
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
import axios from 'axios';
import TextRequest from "../components/TextRequest.vue"

export default {
    mounted() {
        this.gid = this.$route.query.id;
        //stub
    },
    methods: {
        upload() {
            let data = new FormData();
            data.append('')
            axios.post('/api/', data)
        },
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
            }],
            grpname: '',
            gid: '',
        }
    },
    components: {TextRequest}
}
</script>

<style>

</style>