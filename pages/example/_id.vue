<template>
  <div>
    <hr>
    <p>動態路由 pages/example/_id.vue</p>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'ExampleId',
  created () {
    // eslint-disable-next-line no-console
    console.log(this.$route.params.id)
  }
}
</script>
