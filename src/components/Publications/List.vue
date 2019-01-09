<template lang="html">
  <div>
    <h3>Publicações</h3>
    <router-link class="btn-floating btn-large waves-effect waves-light red" to="/publications/new">
      <i class="material-icons">add</i>
    </router-link>

    <div class="row">
      <div class="card horizontal teal lighten-4 col s12 m5 l5 offset-m1 offset-l1" v-for="publication in publications" :key="publication.id">

        <div class="card-image">
          <img src="https://lorempixel.com/100/190/nature/6">
        </div>

        <div class="card-stacked">
          <div class="card-content">
            <li>
              <b>Título:</b> {{publication.title}}
            </li>
            <li>
              <b>Autor:</b> {{publication.author}}
            </li>
            <li>
              <b>Ano de Publicação:</b> {{publication.publication_year}}
            </li>
            <li>
              <b>Tipo:</b> {{publication.type}}
            </li>
            <li>
              <b>Exemplares:</b> {{publication.count_exemplaries}}
            </li>
          </div>
          <div class="card-action">
            <router-link :to="{ name:'PublicationShow', params: { id: publication.id }}">Detalhes</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PublicationsList',
  data () {
    return {
      publications: []
    }
  },
  mounted () {
    this.getPublications()
  },
  methods: {
    async getPublications () {
      const res = await axios.get('http://localhost:8080/api/publications')
      this.publications = res.data.data // 1º data -> Axios | 2º data -> Laravel
    }
  }
}
</script>

<style lang="css" scoped>
</style>
