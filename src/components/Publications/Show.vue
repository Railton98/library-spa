<template lang="html">
  <div class="">
    <h1>PublicationShow</h1>
    {{ publication }}
    <router-link :to="{ name:'PublicationUpdate', params: { user_id: publication.id }}" class="waves-effect waves-light btn-large blue">
      <i class="material-icons">edit</i>
      Editar
    </router-link>

    <button @click="deletePublication(publication.id)" class="waves-effect waves-light btn-large red">
      <i class="material-icons">delete_forever</i>
      Apagar
    </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PublicationShow',
  data () {
    return {
      publication: []
    }
  },
  mounted () {
    this.getPublication(this.$route.params.id)
  },
  methods: {
    async getPublication (id) {
      const res = await axios.get(`http://localhost:8080/api/publications/${id}`)
      this.publication = res.data.data // 1º data -> Axios | 2º data -> Laravel
    },
    deletePublication (id) {
      axios.delete(`http://localhost:8080/api/publications/${id}`).then(res => {
        this.$router.push('/publications')
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
