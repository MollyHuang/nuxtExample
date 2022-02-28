<template>
  <div>
    <p>http://localhost:3000/example</p>
    <p>pages/example.vue</p>
    <p>下面接 nuxt-child 巢狀頁面</p>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'ExamplePage',
  // Page middleware 也可以直接指向 middleware 資料夾的檔案
  middleware: 'global'
}
</script>

<style>
</style>
