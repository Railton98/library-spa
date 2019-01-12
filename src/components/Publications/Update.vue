<template lang="html">
  <publication-template>
    <span slot="principal">
      <div class="row">
        <h3>Atualização de Publicações</h3>
        <router-link class="btn waves-effect waves-light left teal" :to="{ name:'PublicationShow', params: { user_id: publication.id }}">
          <i class="material-icons">arrow_back</i>
        </router-link>
      </div>
      <div class="row">
        <form @submit.prevent.stop="updatePublication(publication.id)" class="col s12">
          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publication.title" id="title" name="title" type="text" class="validate">
              <label for="title">Título</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <textarea v-model="publication.short_description" id="short_description" name="short_description" class="materialize-textarea"></textarea>
              <label for="short_description">Descrição Curta</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <textarea v-model="publication.full_description" id="full_description" name="full_description" class="materialize-textarea"></textarea>
              <label for="full_description">Descrição Completa</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publication.author" id="author" name="author" type="text" class="validate">
              <label for="author">Autor</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publication.publication_year" id="publication_year" name="publication_year" type="number" class="validate">
              <label for="publication_year">Ano de Publicação</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m12 l10">
              <input v-model="publication.type" id="type" name="type" type="text" class="validate">
              <label for="type">Tipo</label>
            </div>
          </div>

          <div class="row">
            <button class="waves-effect waves-light btn-large">
              <i class="material-icons left">send</i>
              Atualizar
            </button>
          </div>
        </form>
  </div>
    </span>
  </publication-template>
</template>

<script>
import PublicationTemplate from '@/components/templates/PublicationTemplate'
import axios from 'axios'
export default {
  name: 'PublicationUpdate',
  components: {
    PublicationTemplate
  },
  data () {
    return {
      publication: {}
    }
  },
  mounted () {
    this.getPublication(this.$route.params.id)
  },
  methods: {
    async getPublication (id) {
      let user = JSON.parse(localStorage.getItem('user'))
      const res = await axios.get(`http://localhost:8080/api/publications/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      this.publication = res.data.data // 1º data -> Axios | 2º data -> Laravel
    },
    updatePublication (id) {
      let user = JSON.parse(localStorage.getItem('user'))
      axios.put(`http://localhost:8080/api/publications/${id}`, this.publication, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }).then(res => this.$router.push(`/publication/${id}`))
    }
  }
}
</script>

<style lang="css" scoped>
h3 {
  font-weight: normal;
  color: #42b983;
}
</style>
