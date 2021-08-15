<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="errMessage">{{ errMessage }}</p>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'LxFormItem',
  inject: [ 'form' ],
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      errMessage: ''
    }
  },
  methods: {
    validate () {
      if(!this.prop) return
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]

      // 使用 async-validator

      const destriptor = { [this.prop]: rules }
      const validator = new AsyncValidator(destriptor)
      return validator.validate({ [this.prop]: value }, errors => {
        if(errors) {
          this.errMessage = errors[0].message
        } else {
          this.errMessage = ''
        }
      })
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  }
}
</script>