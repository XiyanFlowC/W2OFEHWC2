<template>
  <div>
    <el-form :model="form">
      <el-form-item label="方向">
        <el-select v-model="form.id" placeholder="选择要修改描述的方向">
          <el-option label="JAVA" value="1"></el-option>
          <el-option label="Python" value="2"></el-option>
          <el-option label="美术" value="3"></el-option>
          <el-option label="前端" value="4"></el-option>
          <el-option label="产品经理" value="5"></el-option>
          <el-option label="GO" value="6"></el-option>
          <el-option label="Unity" value="7"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" :rows="4" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    submit() {
      if (this.form.desc == "") {
        this.$message("描述不可为空");
        return;
      }
      axios
        .get("/api/admin/setDirectionInfo", {
          params: {
            directionID: this.form.id,
            info: this.form.desc,
          },
        })
        .then((data) => {
          if (data == "0") {
            this.$message({ message: "修改成功", type: "success" });
            this.form.id = -1;
            this.form.desc = "";
          } else {
            this.$message({ message: data, type: "error" });
          }
        })
        .catch((error) => {
          this.$message({ message: error, type: "error" });
        });
    },
  },
  data() {
    return {
      form: {
        id: '',
        desc: "",
      },
    };
  },
};
</script>

<style>
</style>