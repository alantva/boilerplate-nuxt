<template>
  <div class="container">
    <Box>
      <div class="wrapper">
        <Label typography="title">Central de Cadastros</Label>
        <nuxt></nuxt>
      </div>
    </Box>
  </div>
</template>

<script>
export default {
  name: 'CentralDeCadastros'
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
}
</style>
