export default function({ app }, inject) {
  inject('goto', (name, params) => app.router.push({ name, params }))
}
