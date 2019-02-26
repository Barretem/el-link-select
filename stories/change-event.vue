<template>
  <div>
    <p>更改选择框事件触发：</p>
    <el-link-select :options="options"
                 :level="level"
                 :onChange="onChange">
    </el-link-select>
    <p>事件名：onChange</p>
    <p>当前操作的联动框的Index(第一个回调参数): {{operateIndex}}</p>
    <p>当前操作的联动框的值(第二个回调参数): {{operateValue}}</p>
    <p>当前联动框的值(第三个回调参数): {{currentValue}}</p>
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
    onChange(index, value, componentValue) {
      this.operateIndex = index
      this.operateValue = value
      this.currentValue = componentValue
    }
  }
}
</script>

<style>
</style>
