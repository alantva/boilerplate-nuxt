<template>
  <div :class="theme">
    <div>
      <Button color="primary" @click="theme = 'theme--dark'">
        Dark
      </Button>
      <Button color="secondary" @click="theme = 'theme--light'">
        Light
      </Button>
    </div>
    <nuxt />
  </div>
</template>

<script>
import Button from '~/components/Button'

export default {
  components: {
    Button
  },
  data: () => ({ theme: 'theme--dark' })
}
</script>

<style lang="scss" scoped>
@each $theme in $component-themes {
  .theme--#{$theme} {
    background-color: t($theme, 'background');
    color: t($theme, 'on-background');
  }
}
</style>
