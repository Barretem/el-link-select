<template>
  <div>
    <p>动态设值select：（前一项选择后，后一项进行异步请求数据）</p>
    <el-link-select :dynamicOptions="dynamicOptions"
                    v-model="value"
                    :level="level"
                    :onChange="onChange">
    </el-link-select>
  </div>
</template>

<script>
import lodashClone from 'lodash.clone'
export default {
  data() {
    return {
      value: [],
      dynamicOptions: [
        [{value: '肉类', label: '肉类'}, {value: '蛋类', label: '蛋类'}]
      ],
      level: 2
    }
  },
  methods: {
    onChange(index, value, currentValue) {
      //  用Promise模拟ajax请求
      return new Promise(resolve => {
        setTimeout(() => {
          if (value === '肉类') {
            const childList = [
              {value: '牛肉', label: '牛肉'},
              {value: '猪肉', label: '猪肉'}
            ]
            let newList = lodashClone(this.dynamicOptions)
            newList[index + 1] = childList
            this.dynamicOptions = newList
          } else if (value === '蛋类') {
            const childList = [
              {value: '鸡蛋', label: '鸡蛋'},
              {value: '鸭蛋', label: '鸭蛋'}
            ]
            let newList = lodashClone(this.dynamicOptions)
            newList[index + 1] = childList
            this.dynamicOptions = newList
          }
          resolve()
        }, 3000)
      })
    }
  }
}
</script>

<style>
</style>
