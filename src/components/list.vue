<template>
    <div>
      <el-table :data="tabData">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
      </el-table>
    </div>
</template>
<script>
export default {
  name: 'list',
  computed: {
    tabData () {
      return this.$store.state.list
    }
  }
}
</script>

<style scoped>

</style>
