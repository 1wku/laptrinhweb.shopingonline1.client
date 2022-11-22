import queryString from 'query-string'

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('apiContext', (url, method, body, querys) => {
    const baseURL = 'http://localhost:8080/api/v1/'
    const headers = {
      'Access-Control-Allow-Origin': true,
    }
    const queryFormarted = queryString.stringify({
      ...querys,
      // api_key: process.env.VUE_APP_API_KEY,
    })
    const objMeta = {
      method,
      url: `${baseURL}${url}?${queryFormarted}`,
      headers,
      data: body,
    }

    return objMeta
  })
}
