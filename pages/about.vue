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
  },
  data () {
    return {
      title: 'Hello World!'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>
