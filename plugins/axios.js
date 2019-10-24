export default function({ $axios }) {
  $axios.setHeader('Content-Type', 'application/json', ['post', 'put'])

  $axios.onRequest(() => {
    /** Handle request here! */
  })

  $axios.onResponse(() => {
    /** Handle response here! */
  })

  $axios.onError(() => {
    /** Handle error here! */
  })
}
