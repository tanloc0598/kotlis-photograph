export default ({app: {head, router, context}}, inject) => {
  head.scripts.push({
    src: '/js/scripts.js',
    async: false,
    defer: true
  })
}
