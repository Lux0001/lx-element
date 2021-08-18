import LuxzljForm from '../'
import LuxzljFormItem from '../../formitem'
import Luxzljnput from '../../input'
import LuxzljButton from '../../button'

export default {
  title: 'LuxzljForm',
  component: LuxzljForm
}

export const Login = () => ({
  components: { LuxzljForm, LuxzljFormItem, LuxzljInput, LuxzljButton },
  template: `
    <luxzlj-form class="form" ref="form" :model="user" :rules="rules">
      <luxzlj-form-item label="用户名" prop="username">
        <luxzlj-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></luxzlj-input>
      </luxzlj-form-item>
      <luxzlj-form-item label="密码" prop="password">
        <luxzlj-input type="password" v-model="user.password"></luxzlj-input>
      </luxzlj-form-item>
      <luxzlj-form-item>
        <luxzlj-button type="primary" @click="login">登 录</luxzlj-button>
      </luxzlj-form-item>
    </luxzlj-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})