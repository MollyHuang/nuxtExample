export default ({ $axios, redirect }) => {
  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('我發出請求囉')
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 500) {
      redirect('/500')
    }
  })
}
