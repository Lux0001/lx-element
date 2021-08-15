import LxForm from '../'
import LxFormItem from '../../formitem'
import LxInput from '../../input'
import LxButton from '../../button'

export default {
  title: 'LxForm',
  component: LxForm
}

export const Login = () => ({
  components: { LxForm, LxFormItem, LxInput, LxButton },
  template: `
    <lx-form class="form" ref="form" :model="user" :rules="rules">
      <lx-form-item label="用户名" prop="username">
        <lx-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></lx-input>
      </lx-form-item>
      <lx-form-item label="密码" prop="password">
        <lx-input type="password" v-model="user.password"></lx-input>
      </lx-form-item>
      <lx-form-item>
        <lx-button type="primary" @click="login">登 录</lx-button>
      </lx-form-item>
    </lx-form>
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