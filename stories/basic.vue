<template>
  <div>
    <p>基础用法</p>
    <el-link-select :options="options"
                 :level="2">
    </el-link-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '肉类',
          label: '肉类',
          children: [
            {
              value: '牛肉',
              label: '牛肉'
            },
            {
              value: '猪肉',
              label: '猪肉'
            }
          ]
        },
        {
          value: '蛋类',
          label: '蛋类',
          children: [
            {
              value: '鸡蛋',
              label: '鸡蛋'
            },
            {
              value: '鸭蛋',
              label: '鸭蛋'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>
