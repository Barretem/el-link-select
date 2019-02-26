<template>
  <div>
    <p>组件设值：</p>
    <el-link-select :options="options"
                 v-model="value"
                 :level="level"
                 :onChange="onChange">
    </el-link-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ['肉类', '猪肉'],
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
  },
  methods: {
    onChange() {
      console.log(this.value)
    }
  }
}
</script>

<style>
</style>
