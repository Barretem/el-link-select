import {storiesOf} from '@storybook/vue'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Basic from './basic.vue'
import DefaultValue from './default-value.vue'
import LevelValue from './level-value.vue'
import ChangeEvent from './change-event.vue'
import GetComponentValue from './get-component-value.vue'

storiesOf('el-link-select', module)
  .add('基础用法（options, level）', () => ({
    template: `<Basic/>`,
    components: {Basic}
  }))
  .add('选择框数量设值(level)', () => ({
    template: `<LevelValue/>`,
    components: {LevelValue}
  }))
  .add('组件设值(value)', () => ({
    template: `<DefaultValue/>`,
    components: {DefaultValue}
  }))
  .add('更改选择框事件触发(onChange)', () => ({
    template: `<ChangeEvent/>`,
    components: {ChangeEvent}
  }))
  .add('获取组件当前选中值(getValue)', () => ({
    template: `<GetComponentValue/>`,
    components: {GetComponentValue}
  }))
