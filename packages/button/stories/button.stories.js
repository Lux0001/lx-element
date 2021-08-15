import LxButton from '../'

export default {
  title: 'LxButton',
  component: LxButton
}

export const button = () => ({
  components: { LxButton },
  template: '<lx-button @click="onClick">click</lx-button>',
  data() {
    return {}
  },
  methods: {
    onClick() {
      console.log('click')
    }
  }
})