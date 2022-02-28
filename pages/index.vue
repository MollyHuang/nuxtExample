<template>
  <div>
    <p>
      這是一段話 Body
    </p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  nuxtServerInit (store, content) {
    // eslint-disable-next-line no-console
    console.log('nuxtServerInit')
  }
}
</script>
