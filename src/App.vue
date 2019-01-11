<template>
  <div>
    <nav>
      <div class="nav-wrapper blue-grey darken-3">
        <router-link to="/" class="brand-logo center">Logo</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/publications">Publicações</router-link>
          </li>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/register">Cadastrar-se</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view/>
    </div>

    <footer class="page-footer blue-grey darken-3 center">
        © 2019 Copyright <b>Railtton's Teck</b>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
