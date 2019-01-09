<template lang="html">
  <div class="row">
    <h3>Atualização de Publicações</h3>
    {{ publication }}
    <form v-on:submit.prevent.stop="updatePublication(publication.id)" class="col s12">
      <div class="row">
        <div class="input-field col s12 m12 l10">
          <input v-model="publication.title" id="title" name="title" type="text" class="validate">
          <label for="title">Título</label>
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
        <div class="input-field col s12 m12 l10">
          <input v-model="publication.count_exemplaries" id="count_exemplaries" name="count_exemplaries" type="number" class="validate">
          <label for="count_exemplaries">Quantidade de Exemplares</label>
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
</template>

<script>
import axios from 'axios'
export default {
  name: 'PublicationUpdate',
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
      const res = await axios.get(`http://localhost:8080/api/publications/${id}`)
      this.publication = res.data.data // 1º data -> Axios | 2º data -> Laravel
    },
    updatePublication (id) {
      axios.put(`http://localhost:8080/api/publications/${id}`, this.publication).then(res => this.$router.push(`/publication/${id}`))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
