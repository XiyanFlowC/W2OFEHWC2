<template>
  <div class="container">
       <form id="login-form" class="form-signin">
            <h1>{{gname}}</h1>
            <h2 class="form-signin-heading">用户登入</h2>
            <div class='control-wrapper'>
                <input v-model="accound" type="text" id="accoundInput" class="form-control" placeholder="账户" required autofocus/>
            </div>
            <div class='control-wrapper'>
                <input v-model="passwd" type="password" id="pswdInput" class="form-control" placeholder="密码" required />
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="button" @click="login">登入</button>
        </form>
        <a href="/register">还没有账号？</a>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
    methods: {
        login: function() {
            axios.post('/api/login',
                qs.stringify({
                    username: this.accound,
                    password: this.passwd
                }),
                { headers: {'Content-Type' : 'application/x-www-form-urlencoded' }
            }).then((content)=>{
                console.log(content);
                this.$root.role = content.data.msg.authorities.toString();
                this.$message({message: '登录成功', type: 'success'});
                this.$router.push('/home');
            }).catch((error) => {
                this.$message({message: '登录失败：'+error, type: 'error'});
                console.log(error);
            })
        }
    },
    data() {
        return {
            gname: '简历投递系统',
            accound: '',
            passwd: ''
        }
    }
}
</script>

<style>
.form-signin {
    max-width: 30rem;
    padding: 1rem;
    margin: 0 auto;
}

.control-wrapper {
    margin: .5rem auto;
}

</style>