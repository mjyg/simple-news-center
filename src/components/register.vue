<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="用户名：">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="form.pwd" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：">
        <el-input v-model="form.pwd2" placeholder="请再次输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">确定</el-button>
        <el-button type="primary" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      form: {
        name: '',
        pwd: '',
        pwd2: ''
      }
    }
  },
  methods: {
    submit () {
      if (this.pwd === this.pwd2) {
        window.localStorage.setItem('name', this.form.name)
        window.localStorage.setItem('pwd', this.form.pwd)
        this.$router.push({ path: '/' })
      } else {
        alert('两次密码输入不一致')
      }
    },
    cancel () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>

</style>
