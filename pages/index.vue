<template>
  <div class="container">
    <div>
      <Label typography="title">Boilerplate Nuxt</Label>
      <Label>{{ description }}</Label>
      <Label typography="caption">v{{ version }}</Label>
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
const myRepo = process.env.repository_url

export default {
  data: () => ({
    description: process.env.description,
    version: process.env.version
  }),
  methods: {
    handleDocumentation() {
      return this.windowOpen(myRepo + '#introduction')
    },
    handleGithub() {
      return this.windowOpen(myRepo)
    },
    handleChangelog() {
      return this.windowOpen(myRepo + '/blob/master/CHANGELOG.md#changelog')
    },
    windowOpen(url) {
      return window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
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

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    > button:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}
</style>
