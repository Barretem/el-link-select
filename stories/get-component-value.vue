<template>
  <div>
    <el-button @click="getValue">获取联动组件当前选中的值</el-button>
    <el-link-select :options="options"
                 :level="level"
                  ref="linkSelect">
    </el-link-select>
    <p>事件名：getValue</p>
    <p>当前联动框的值: {{currentValue}}</p>
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
      level: 2,
      operateIndex: '',
      operateValue: '',
      currentValue: ''
    }
  },
  methods: {
    getValue() {
      this.currentValue = this.$refs.linkSelect.getValue()
    }
  }
}
</script>

<style>
</style>
