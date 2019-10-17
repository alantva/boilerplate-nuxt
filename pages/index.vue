<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Boilerplate Nuxt
      </h1>
      <h2 class="subtitle">
        My stellar Nuxt.js project
      </h2>
      <div class="links">
        <Button class="button--primary">Documentation</Button>
        <Button class="button--secondary">GitHub</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button'
import Logo from '~/components/Logo'

export default {
  components: {
    Button,
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
