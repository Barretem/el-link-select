<template>
  <div>
    <p>level动态设值</p>
    <el-input-number v-model="level" :min="1" :max="10" label="描述文字"></el-input-number>
    <el-link-select :options="options"
                    :level="level">
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
      ],
      level: 2
    }
  }
}
</script>

<style>
</style>
