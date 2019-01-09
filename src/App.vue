<template>
  <div>
    <nav>
      <div class="nav-wrapper blue-grey darken-3">
        <router-link to="/" class="brand-logo">Logo</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/publications">Publicações</router-link></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
