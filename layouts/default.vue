<template>
  <div>
    --- Default header ---
    <nuxt />
    --- Default footer ---
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  middleware ({ store, route, redirect, params, query, req, res }) {
    // eslint-disable-next-line no-console
    console.log('Layout middleware')
  }
}
</script>
