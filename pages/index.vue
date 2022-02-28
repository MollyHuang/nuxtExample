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
  },
  middleware ({ store, route, redirect, params, query, req, res }) {
    // eslint-disable-next-line no-console
    console.log('Page middleware')
  },
  // 切換頁面後想要驗證一些 router 的參數的話適用 validate
  // 務必注意 validate 這個生命週期必須回傳 true or false。
  validate (content) {
    // eslint-disable-next-line no-console
    console.log('validate')
    return true
  }
}
</script>
