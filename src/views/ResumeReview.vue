<template>
  <div>
    <el-select
      v-model="did"
      placeholder="选择要审核的方向"
      @change="getAdminList()"
    >
      <el-option label="JAVA" value="1"></el-option>
      <el-option label="Python" value="2"></el-option>
      <el-option label="美术" value="3"></el-option>
      <el-option label="前端" value="4"></el-option>
      <el-option label="产品经理" value="5"></el-option>
      <el-option label="GO" value="6"></el-option>
      <el-option label="Unity" value="7"></el-option>
    </el-select>
    <h2>待审核人员名录</h2>
    <hr />
    <resume-entry
      v-for="entry in list"
      :key="entry.id"
      :submitter="entry"
      @click="showDetail(entry)"
    ></resume-entry>
    <el-button v-if="hasPrevPage" @click="prvp">上一页</el-button>
    {{ pageNum }} / {{ pages }}
    <el-button v-if="hasNextPage" @click="nxtp">下一页</el-button>
  </div>
</template>

<script>
import axios from "axios";
import ResumeEntry from "../components/ResumeEntry.vue";
export default {
  mounted() {
    this.getAdminList();
  },
  components: { ResumeEntry },
  data() {
    return {
      did: "",
      pageNum: 0,
      pages: 0,
      list: [],
      hasNextPage: false,
      hasPrevPage: false,
    };
  },
  methods: {
    prvp() {
      this.pageNum -= 1;
      this.getAdminList();
    },
    nxtp() {
      this.pageNum += 1;
      this.getAdminList();
    },
    getAdminList() {
      axios
        .get("/api/admin/findUncheckedUserInfo", {
          params: {
            did: this.did,
            pageNum: this.pageNum,
            pageSize: 20,
          },
        })
        .then((content) => {
          this.hasNextPage = content.hasNextPage;
          this.hasPrevPage = content.hasPreviousPage;
          this.pages = content.pages;
          this.pageNum = content.pageNum;
        })
        .catch((error) => {
          this.$message({ type: "error", message: error });
        });
    },
  },
};
</script>

<style>
</style>