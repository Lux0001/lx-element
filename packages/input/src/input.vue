<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput">
  </div>
</template>
<script>
export default {
  name: 'LuxzljInput',
  inheriAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)

      // 寻找 FromItem 父组件
      const findParent = parent => {
        while(parent) {
          if (parent.$options.name === 'LxFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }

      const parent = findParent(this.$parent)

      // 如果找到 FormItem 父组件 则调用 FormItem 组件中的 validate方法 验证
      if(parent) {
        parent.$emit('validate')
      }
    }
  }
}
</script>