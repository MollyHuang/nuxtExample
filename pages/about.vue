<template>
  <div>
    <p>
      是 Ray 不是 Array
      https://israynotarray.com
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  middleware ({ store, route, redirect, params, query, req, res }) {
    // eslint-disable-next-line no-console
    console.log('Page middleware')
  }
}
</script>
