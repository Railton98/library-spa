<template lang="html">
  <div class="row">
    <h3>Cadastro de Publicações</h3>
    <form v-on:submit.prevent.stop="storePublications" class="col s12">
      <div class="row">
        <div class="input-field col s12 m12 l10">
          <input v-model="publications.title" id="title" name="title" type="text" class="validate">
          <label for="title">Título</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 m12 l10">
          <input v-model="publications.author" id="author" name="author" type="text" class="validate">
          <label for="author">Autor</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 m12 l10">
          <input v-model="publications.publication_year" id="publication_year" name="publication_year" type="number" class="validate">
          <label for="publication_year">Ano de Publicação</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 m12 l10">
          <input v-model="publications.type" id="type" name="type" type="text" class="validate">
          <label for="type">Tipo</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 m12 l10">
          <input v-model="publications.qtd_exemplaries" id="qtd_exemplaries" name="qtd_exemplaries" type="number" class="validate">
          <label for="qtd_exemplaries">Quantidade de Exemplares</label>
        </div>
      </div>

      <div class="row">
          <button class="waves-effect waves-light btn-large">
            <i class="material-icons left">send</i>
            Cadastrar
          </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PublicationsCreate',
  data () {
    return {
      publications: {}
    }
  },
  methods: {
    storePublications () {
      axios.post('http://localhost:8080/api/publications', this.publications).then(res => this.$router.push('/publications'))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
