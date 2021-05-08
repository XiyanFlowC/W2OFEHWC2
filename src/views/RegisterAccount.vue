<template>
  <div>
      <el-form :model='form' ><!-- :rules='rules'-->
          <el-form-item label="用户名" prop="name">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop='passwd'>
            <el-input type='password' auto-complete="off" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="重复密码" prop='rptpw'>
            <el-input type='password' auto-complete="off" v-model="form.repeatpw"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop='phone'>
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱" prop='email'>
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">创建账号</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
        submit() {
          if(this.form.username == ''
          || this.form.password == ''
          || this.form.repeatpw == ''
          || this.form.email == ''
          || this.form.phone == '') {
            this.$message({message: '必填项不可为空', type: 'error'})
            return;
          }

            if(this.form.repeatpw != this.form.password) {
                this.$message({message: '密码与重复密码不匹配', type: 'error'});
                return;
            }
            axios.get('/api/user/Register', {
                params: {
                    username: this.form.username,
                    password: this.form.password,
                    phone: this.form.phone,
                    email: this.form.email
                }
            }).then(()=>{
                this.$message({message: '创建成功', type: 'success'});
                this.$router.push('/login');
            }).catch((error)=>{
                this.$message({message: error, type: 'error'});
            })
        }
    },
    data() {
      var validrpt = (rule, value, callback) => {
        if(value !== this.form.password) {
          callback(new Error('密码与重复密码不匹配'));
        }
      }
      var validphone = (rule, value, callback) => {
        if(!Number.isInteger(value)) {
          callback(new Error('电话格式不正确'))
        }
      }
      var validemail = (rule, value, callback) => {
        var reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(!reg.test(value)) callback(new Error('邮箱格式不正确'))
      }
        return{
          rules: {
            name: [{
              required: true,
              message: '名称不可为空',
              trigger: 'blur'
            }],
            passwd: [
              {
                required: true,
                message: '密码不可为空',
                trigger: 'blur'
              }
            ],
            rptpw: [
              {required: true, message: '重复密码不可为空', trigger: 'blur'},
              {validator: validrpt, trigger: 'blur'}
            ],
            phone: [
              {required: true, message: '电话不可为空', trigger: 'blur'},
              {validator: validphone, trigger: 'blur'}
            ],
            email: [
              {required: true, message: '电子邮箱不可为空', trigger: 'blur'},
              {validator: validemail, trigger: 'blur'}
            ]
          },
            form: {
                username: '',
                password: '',
                repeatpw: '',
                email: '',
                phone: ''
            }
        }
    }
}
</script>

<style>

</style>