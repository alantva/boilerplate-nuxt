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
        <Button solid @click="handleChangelog">
          Changelog
        </Button>
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
      const url = 'https://github.com/alantva/boilerplate-nuxt#introduction'
      return this.windowOpen(url)
    },
    handleGithub() {
      const url = 'https://github.com/alantva/boilerplate-nuxt'
      return this.windowOpen(url)
    },
    handleChangelog() {
      const url =
        'https://github.com/alantva/boilerplate-nuxt/blob/master/CHANGELOG.md#changelog'
      return this.windowOpen(url)
    },
    windowOpen(url) {
      return window.open(url, '_blank')
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
