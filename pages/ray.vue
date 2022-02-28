<template>
  <div>
    <p>
      自訂layout
      Ray Ray Ray
    </p>
    <p>改用 RayLayout</p>
    <ul>
      <li v-for="item in users" :key="item.email">
        {{ item.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RayPage',
  layout: 'RayLayout',
  data () {
    return {
      users: []
    }
  },
  // fetch依然是會先在伺服器運作，而這一段也會跟 asyncData 相同被渲染在原始碼上。
  async fetch () {
    const res = await this.$axios.get('https://randomuser.me/api/')
    this.users = res.data.results
  }
  // fetch 有一個雷點就是 ----> 不要解構
  // 如果你如下方寫法的話，雖然程式碼不會出現任何警告訊息，
  // 但你的資料會無法正常渲染到畫面上
  // async fetch ({ $axios }) {
  //   const res = await $axios.get('https://randomuser.me/api/')
  //   this.users = res.data.results
  // }
  // asyncData 與 fetch 的選擇
  // 這時候應該會很疑惑 asyncData 與 fetch 的使用時機，
  // 其實非常簡單，如果你拉回遠端資料後，需要被 Vue 所使用或者是指向給 Vue 的話，那就使用 fetch，
  // 若沒有的話，基本上使用 asyncData 就可以了。
}
</script>
