<template>
  <div class="link-select">
    <el-row :gutter="20">
      <el-col v-for="(item, index) in valueList" :key="index" :span="6">
        <el-select
          placeholder="请选择"
          @change="handleSelect($event, index)"
          :value="item"
        >
          <el-option
            v-for="inner in optionsList[index]"
            :key="inner.value"
            :label="inner.label"
            :value="inner.value"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/**
 * 联动组件
 * @params level int 级联框的个数,默认值为1 eg: 2
 * @params options Array 级联的值，eg: [{value: '肉类', label: '肉类', children: [{value:'牛肉', label: '牛肉'}, {value: '猪肉', label: '猪肉'}]}]
 */
// 设置联动层级level
// 1、根据层级渲染选择框的个数
//  2、下一层级根据上一层级设值，默认值为提示请选择父节点
//  3、点击切换第一层级的时候，第二个层级的选项会改变
import lodashClone from 'lodash.clone'

export default {
  name: 'ElLinkSelect',
  data() {
    return {
      valueList: [], // 选项值列表
      optionsList: [] // 选项options列表
    }
  },
  props: {
    /**
     * 联动框选中的值 eg: [10, 101, 1001]
     */
    value: {
      type: Array
    },
    /**
     * 联动框的个数
     * 鉴于数据可能会动态加载，所以需要事先知道联动框的个数。否则会动态显示联动框
     */
    level: {
      type: Number,
      default: 1,
      required: true
    },
    /**
     * 级联的值，eg: [{value: '肉类', label: '肉类', children: [{value:'牛肉', label: '牛肉'}, {value: '猪肉', label: '猪肉'}]}]
     * todo 不能满足动态请求数据的需求，需要优化数据格式
     *
     */
    options: {
      type: Array,
      required: true
    },
    // [[{value: '肉类', label: '肉类'}, {value: '蛋类', label: '蛋类'}], [{parentId: '肉类', value:'牛肉', label: '牛肉'}]]
    dynamicOptions: {
      type: Array
    },
    /**
     * 更改联动框的值触发的事件。
     * 第一个回调参数为选中框的Index(从0开始)，
     * 第二个参数为当前选中的值
     * 第三个回调参数为当前组件的值
     */
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  watch: {
    options() {
      this.setOptions()
      this.setDefaultValue()
    },
    level() {
      this.setOptions()
      this.setDefaultValue()
    }
  },
  created() {
    this.setOptions()
    this.setDefaultValue()
  },
  methods: {
    /**
     * 根据传过来的props(options, level)来处理valueList，optionsList数据
     */
    setOptions() {
      const initLevel = this.level
      const emptySelectList = Array.from(new Array(initLevel))

      this.optionsList = emptySelectList.map(
        (item, index) => (index === 0 ? this.options : [])
      )
    },
    /**
     * 根据value设置选中值
     */
    setDefaultValue() {
      const initLevel = this.level
      const emptySelectList = Array.from(new Array(initLevel))
      const propValueList = this.value || []

      // 1、根据层级渲染选择框的个数
      this.valueList = emptySelectList.map(
        (item, index) =>
          propValueList[index] !== undefined ? propValueList[index] : null
      )
    },
    /**
     * 点击更换选中项
     * @param val
     * @param index
     */
    handleSelect(val, index) {
      // 1、更改数组中的选中值
      // 2、更改子层级的选中值
      // 3、将子层级的所有的子置为默认选项

      const newArr = this.valueList.map(
        (item, i) => (i < index ? item : i === index ? val : null)
      )
      // 1、更改数组中的选中值
      this.valueList = newArr

      // 根据层级以及value返回对应的对象(获取子层级的值)
      let tempData = lodashClone(this.options) // 获取子层级的值
      for (const val of newArr) {
        if (val !== null && tempData) {
          tempData.map(item => {
            if (item.value === val) {
              tempData = item.children
            }
          })
        } else {
          break
        }
      }

      // 2、更改子层级的选中值
      // 3、将子层级的所有的子置为默认选项
      this.optionsList = this.optionsList.map(
        (item, i) => (i <= index ? item : i === index + 1 ? tempData : [])
      )
      this.$emit('input', newArr)

      // 进行事件回调
      this.onChange(index, val, newArr)
    },
    /**
     * 获取当前组件选中的值
     */
    getValue() {
      return this.valueList
    }
  }
}
</script>

<style scoped>
.link-select {
  width: 500px;
}
</style>
