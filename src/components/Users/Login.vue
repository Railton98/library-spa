<template lang="html">
  <div class="row">
    <h3>Login</h3>
    <div class="col s12 m8 l8 img-left">
      <img class="responsive-img" src="http://blogespecializacao.fdc.org.br/wp-content/uploads/2018/06/196198-8-livros-sobre-lideranca-feminina-que-toda-gestora-deve-ler-740x360.jpg" alt="">
    </div>
    <span class="col s12 m4 l4">
      <form method="post" @submit.prevent="login()">
        <input type="text" placeholder="E-mail" name="email" v-model="user.email">
        <input type="password" placeholder="Senha" name="password" v-model="user.password">
        <button type="submit" class="waves-effect waves-light btn btn">
          Entrar <i class="material-icons right">send</i>
        </button>
      </form>
    </span>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UsersLogin',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:8080/api/auth/login', this.user).then(res => {
        // console.log(res.data)
        if (res.data.token) {
          localStorage.setItem('user', JSON.stringify(res.data))
          this.$router.push('/')
        }
        // else {
        //   // validation errors
        //   let errors = null
        //   for (let error of Object.values(res.data)) {
        //     errors += ' ' + error
        //   }
        //   alert(errors)
        // }
      }).catch(err => {
        if (err.response.status === 401) {
          alert('Erro! Usuário ou Senha Inválidos!')
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
h3 {
  font-weight: normal;
  color: #42b983;
}
.img-left {
  margin-bottom: 8%;
}
</style>
