<template>
  <div>
    <p>
      這是一段話 Body
    </p>
    <ul>
      <li v-for="item in data" :key="item.email">
        {{ item.email }}
      </li>
    </ul>
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
  },
  async asyncData ({ $axios }) {
    const res = await $axios.get('https://randomuser.me/api/')
    return {
      data: res.data.results
    }
  }
}
</script>
