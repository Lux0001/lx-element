import LuxzljButton from '../'

export default {
  title: 'LuxzljButton',
  component: LuxzljButton
}

export const button = () => ({
  components: { LuxzljButton },
  template: '<luxzlj-button @click="onClick">click</luxzlj-button>',
  data() {
    return {}
  },
  methods: {
    onClick() {
      console.log('click')
    }
  }
})