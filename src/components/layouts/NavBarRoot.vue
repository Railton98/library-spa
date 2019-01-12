<template lang="html">
  <nav :class="cor">
    <div class="nav-wrapper container">
      <router-link :to="url || '/'" class="brand-logo center hide-on-med-and-down">
        {{ logo || 'Library Project' }}
      </router-link>
      <router-link :to="url || '/'" class="brand-logo center hide-on-med-and-up">
        {{ logo || 'Library' }}
      </router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <slot />
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarRoot',
  props: ['cor', 'logo', 'url']
}
</script>

<style lang="css" scoped>
</style>
