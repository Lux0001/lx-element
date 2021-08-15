import FormItem from './src/formitem.vue'

FormItem.install = Vue => {
  Vue.component(FormItem.name, FormItem)
}

export default FormItem