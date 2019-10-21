<template>
  <div class="container">
    <div>
      <Label typography="title">Boilerplate Nuxt</Label>
      <Label typography="subtitle">
        My stellar Nuxt.js project
      </Label>
      <div class="links">
        <Button solid color="primary">Documentation</Button>
        <Button solid color="secondary">GitHub</Button>
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
