<template>
  <div class="container">
    <div>
      <Label typography="title">Boilerplate Nuxt</Label>
      <Label typography="subtitle">
        My pioneering Nuxt.js project
      </Label>
      <div class="links">
        <Button solid color="primary" @click="handleDocumentation">
          Documentation
        </Button>
        <Button solid color="secondary" @click="handleGithub">GitHub</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button'
import Label from '~/components/Label'

export default {
  components: {
    Button,
    Label
  },
  methods: {
    handleDocumentation() {
      window.open(
        'https://github.com/alantva/boilerplate-nuxt#introduction',
        '_blank'
      )
    },
    handleGithub() {
      window.open('https://github.com/alantva/boilerplate-nuxt', '_blank')
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
