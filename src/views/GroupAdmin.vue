<template>
  <div>
    <h2>小组管理员授权管理</h2>
    <hr />
    <el-collapse v-model="showRegister">
      <el-collapse-item title="新增管理员" name="1">
        <el-form :model="createform">
          <el-form-item label="用户名">
            <el-input v-model="createform.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="createform.password"></el-input>
          </el-form-item>
          <el-form-item label="重复密码">
            <el-input v-model="createform.rptpswd"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="createform.phone"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱">
            <el-input v-model="createform.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">创建账号</el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>

    <!-- 对已经存在的管理员进行查看 -->
    <h3>确认管理员的信息</h3>
    <hr />
    <group-leader-entry v-for="entry in adminList" :key="entry.id" @on-view="showTDetail(entry)" :userinfo="entry"></group-leader-entry>
    <el-button v-if='hasPrevPage' @click="prvp">上一页</el-button>
    {{pageNum}} / {{pages}}
    <el-button v-if='hasNextPage' @click="nxtp">下一页</el-button>

    <el-dialog title="确认和管理管理员信息" :visible.sync='showDetail'>
      <div>
        <table>
          <tr>
            <td>
              ID
            </td>
            <td>
              {{showEntry.id}}
            </td>
            <td>
              Name
            </td>
            <td>
              {{showEntry.username}}
            </td>
          </tr>
          <tr>
            <td>
              E-mail
            </td>
            <td>
              {{showEntry.email}}
            </td>
            <td>
              电话
            </td>
            <td>
              {{showEntry.phone}}
            </td>
          </tr>
          <tr>
            <td>
              使能
            </td>
            <td>
              {{showEntry.enabled}}
            </td>
            <td>
              未过期
            </td>
            <td>
              {{showEntry.accoundNonExpired}}
            </td>
          </tr>
        </table>
        <h3>管理</h3>
        <hr />
        <el-form :model="adminadmin">
          <el-form-item label="冻结">
            <el-switch v-model="showEntry.enabled"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="commitChange">提交更改</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div slot='footer' class='dialog-footer'>
        <el-button @click="showDetail = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import GroupLeaderEntry from '../components/GroupLeaderEntry.vue';

export default {
  components: { GroupLeaderEntry },
  mounted: function() {
    this.getAdminList();
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
    commitChange() {
      if(this.showEntry.enabled) {
        axios.get('/api/boss/lockUser', {
          params: {
            username: this.showEntry.username
          }
        }).then(() => {
          this.$message({type: 'success', message: '成功使能用户'})
        }).catch(() => {
          this.$message({type: 'error', message: '使能用户失败'})
        })
      }
      else {
        axios.get('/api/boss/unlockUser', {
          params: {
            username: this.showEntry.username
          }
        }).then(() => {
          this.$message({type: 'success', message: '成功冻结用户'})
        }).catch(() => {
          this.$message({type: 'error', message: '冻结用户失败'})
        })
      }
    },
    getAdminList() {
      axios.get( '/api/boss/showAdmin', {
        params: {
          pageNum: this.pageNum,
          pageSize: 20
        }
      }).then(function(content) {
          this.hasNextPage = content.hasNextPage;
          this.hasPrevPage = content.hasPreviousPage;
          this.pages = content.pages;
          this.adminList = content.list;
        }).catch((err) => {
          this.$message({message: '拉取列表失败：' + err.request.statusText, type: 'error'})
        })
    },//TODO
    showTDetail: function(showEntry) {
      this.showEntry = showEntry;
      this.showDetail = true;
    },
    regShoS: function () {
      this.showRegister = !this.showRegister;
    },
    submit: function () {
      if (this.createform.password != this.createform.rptpswd) {
        this.$message({ message: "密码与重复密码不匹配", type: "error" });
        return;
      }
      axios
        .get("/api/boss/register", {
          params: {
            username: this.createform.username,
            password: this.createform.password,
            phone: this.createform.password,
            email: this.createform.email,
          },
        })
        .then(() => {
          this.$message({ message: "注册成功", type: "success" });
          this.createform = {
            username: "",
            password: "",
            rptpswd: "",
            phone: "",
            email: "",
          };
        })
        .catch((error) => {
          this.$message({ message: error, type: "error" });
        });
    },
  },
  data() {
    return {
      createform: {
        username: "",
        password: "",
        rptpswd: "",
        phone: "",
        email: "",
      },
      adminadmin:{

      },
      showRegister: -1,
      adminList: [],
      showEntry: {},
      showDetail: false,
      pageNum: 0,
      hasNextPage: false,
      hasPrevPage: false,
      pages: 0,
    };
  },
};
</script>

<style>
</style>