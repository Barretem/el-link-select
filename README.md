# el-link-select

项目说明：该组件为基于 element-ui，以及 Vue 封装的联动选择组件。支持静态数据，支持动态加载选择框数据，支持无限层级。

示例图：

## Table of Contents

* **[Introduction](#introduction)**
* **[Feature](#feature)**
* **[Demo](#demo)**
* **[Documentation](#documentation)**
* **[Install](#install)**
* **[Example](#example)**
* **[Reference](#reference)**
* **[License](#license)**

## Introduction

应用场景：自定义联动数据，地址联动选择

## Feature

* [ ] 支持 el-select 所有的 API

## Demo

* [online demo](https://barretem.github.io/el-link-select/)

[⬆ Back to Top](#table-of-contents)

## Documentation

### El-link-select Attributes

| 参数           | 说明                                                                                                                                                    | 类型     | 可选值 | 默认值   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ | -------- |
| value          | 联动框选中的值                                                                                                                                          | Array    | -      | []       |
| level          | 联动框的个数                                                                                                                                            | Number   | -      | 1        |
| options        | 级联的值数据数据格式为： [{value: '肉类', label: '肉类', children: [{value:'牛肉', label: '牛肉'}, {value: '猪肉', label: '猪肉'}]}]                    | Array    | -      | []       |
| dynamicOptions | 动态加载级联的值，支持动态加载级联数据。数据格式为：[[{value: '肉类', label: '肉类'}, {value: '蛋类', label: '蛋类'}], [{value:'牛肉', label: '牛肉'}]] | Array    | -      | []       |
| onChange       | 联动框值进行更改时，触发的函数。调用的时候，如果返回 Promise 会监控 Promise 的进程                                                                      | Function | -      | () => {} |

[⬆ Back to Top](#table-of-contents)

## Install

[⬆ Back to Top](#table-of-contents)

## Example

### 基础用法

```
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
```

### 动态数据加载

```

```

[⬆ Back to Top](#table-of-contents)

## Reference

* [Element-UI Select 选择器](http://element-cn.eleme.io/#/zh-CN/component/select)

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
