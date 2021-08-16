import LuxzljInput from '../'

export default {
  title: 'LuxzljInput',
  component: LuxzljInput
}

export const Text = () => ({
  components: { LxInput },
  template: '<luxzlj-input v-model="value"></luxzlj-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LxInput },
  template: '<luxzlj-input type="password" v-model="value"></luxzlj-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})