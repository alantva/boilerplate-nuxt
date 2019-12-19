<template>
  <div class="container">
    <div class="wrapper">
      <Box>
        <div class="box-wrapper">
          <Label typography="title">Boilerplate Nuxt</Label>
          <Label>{{ description }}</Label>
          <Label typography="caption">v{{ version }}</Label>
          <div class="links">
            <Button
              button-design="solid"
              color="primary"
              @click="handleDocumentation"
            >
              Documentation
            </Button>
            <Button
              button-design="solid"
              color="secondary"
              @click="handleGithub"
            >
              GitHub
            </Button>
            <Button
              button-design="solid"
              color="error"
              @click="handleChangelog"
            >
              Changelog
            </Button>
          </div>
        </div>
      </Box>
    </div>
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
  .box-wrapper {
    display: flex;
    flex-direction: column;
    padding: 50px 15px 50px 15px;
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
