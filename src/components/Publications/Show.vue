<template lang="html">
  <div class="">

    <div class="col s12 m7 l7">
      <h3 class="header">{{ publication.title }}</h3>
      <blockquote>{{ publication.short_description }}</blockquote>
      <div class="card horizontal">
        <div class="card-image">
          <img class="responsive-img" src="https://lorempixel.com/250/330/nature/6">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <div>
              <b>Autor:</b> {{publication.author}}
            </div>
            <div>
              <b>Ano de Publicação:</b> {{publication.publication_year}}
            </div>
            <div>
              <b>Tipo:</b> {{publication.type}}
            </div>
            <div>
              <b>Exemplares:</b> {{publication.count_exemplaries}}
            </div>
          </div>
          <div class="card-action">
            <router-link :to="{ name:'PublicationUpdate', params: { user_id: publication.id }}" class="waves-effect waves-light btn blue">
              <i class="material-icons">edit</i>
              <!-- Editar -->
            </router-link>

            <button @click="deletePublication(publication.id)" class="waves-effect waves-light btn red">
              <i class="material-icons">delete_forever</i>
              <!-- Apagar -->
            </button>
          </div>
        </div>
      </div>

      <h5 class="header">Descrição:</h5>
      <div class="card-panel teal lighten-4">
        <span class="black-text">
          {{publication.full_description}}
        </span>
      </div>

    </div>

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
