<template>
  <div>
    <button @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'LxButton',
  methods: {
    handleClick(event) {
      this.$emit('click', event)
      event.preventDefault()
    }
  }
}
</script>