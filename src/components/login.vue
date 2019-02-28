<template>
    <div>
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名：">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="form.pwd" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    login () {
      const name = window.localStorage.getItem('name')
      const pwd = window.localStorage.getItem('pwd')
      if (!name) {
        alert('请先注册')
      } else if (this.form.name === name && this.form.pwd === pwd) {
        this.$router.push({ path: '/home/list' })
      } else {
        alert('用户名或密码填写错误')
      }
    },
    register () {
      this.$router.push({ path: './register' })
    }
  }
}
</script>

<style scoped>

</style>
