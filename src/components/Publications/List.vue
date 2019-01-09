<template lang="html">
  <div>
    <div class="row">
      <h3>Publicações</h3>
      <router-link class="btn waves-effect waves-light right teal" to="/publications/new">
        Nova Publicação
      </router-link>
    </div>

    <div class="row">
      <div class="card horizontal teal lighten-4 col s12 m5 l5 offset-m1 offset-l1" v-for="publication in publications" :key="publication.id">

        <div class="card-image">
          <img class="responsive-img" src="https://lorempixel.com/180/330/nature/6">
        </div>

        <div class="card-stacked">
          <div class="card-content">
            <div>
              <b>{{publication.title}}</b>
            </div>
            <div>
              {{publication.short_description}}
            </div>
          </div>
          <div class="card-action">
            <router-link class="center-align" :to="{ name:'PublicationShow', params: { id: publication.id }}">Detalhes</router-link>
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
h3 {
  font-weight: normal;
  color: #42b983;
}
</style>
