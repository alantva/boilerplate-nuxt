<template>
  <div class="container">
    <Box>
      <div class="wrapper">
        <Label typography="title">Boilerplate Nuxt</Label>
        <Label>{{ description }}</Label>
        <Label typography="caption">v{{ version }}</Label>
        <div class="links">
          <Button
            @click="handleDocumentation"
            button-design="solid"
            color="primary"
          >
            Documentation
          </Button>
          <Button @click="handleGithub" button-design="solid" color="secondary">
            GitHub
          </Button>
          <Button @click="handleChangelog" button-design="solid" color="error">
            Changelog
          </Button>
        </div>
      </div>
    </Box>
  </div>
</template>

<script>
const repoUrl = process.env.repositoryUrl

export default {
  data: () => ({
    description: process.env.description,
    version: process.env.version
  }),
  methods: {
    handleDocumentation() {
      return this.windowOpen(repoUrl + '#introduction')
    },
    handleGithub() {
      return this.windowOpen(repoUrl)
    },
    handleChangelog() {
      return this.windowOpen(repoUrl + '/blob/master/CHANGELOG.md#changelog')
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
  padding-left: 15px;
  padding-right: 15px;

  .wrapper {
    display: flex;
    flex-direction: column;
  }
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
