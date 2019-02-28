<template>
    <div>
      <el-form :model="form" label-width="80px">
        <el-form-item label="标题：">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="内容：">
          <el-input v-model="form.content" type="textarea"></el-input>
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
  name: 'add',
  data () {
    return {
      form: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    submit () {
      this.$store.commit('setArticle', this.form)
      this.$router.go(-1)
    },
    cancel () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
