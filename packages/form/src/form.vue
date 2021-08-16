<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'LuxzljForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate (cb) {
      // TODO： 只针对子组件就是需要做验证的组件（如 input），可优化成无论嵌套多少层组件都可以进行验证
      const tasks = this.$children
        .filter(child => child.prop)
        .map(child => child.validate())

      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>