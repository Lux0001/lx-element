import LxInput from '../'

export default {
  title: 'LxInput',
  component: LxInput
}

export const Text = () => ({
  components: { LxInput },
  template: '<lx-input v-model="value"></lx-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LxInput },
  template: '<lx-input type="password" v-model="value"></lx-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})