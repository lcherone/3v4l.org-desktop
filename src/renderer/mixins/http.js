const request = require('request')

const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36'

export default {
  methods: {
    /**
     * Standard GET request
     */
    get (url, callback) {
      request.get({
        url: url,
        gzip: true,
        headers: {
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'referer': url,
          'User-Agent': userAgent
        }
      }, callback)
    },
    /**
     * Multipart POST request (preview code)
     */
    post_json (data, callback) {
      request.post({
        url: 'https://3v4l.org/new',
        formData: data,
        headers: {
          'accept': 'application/json',
          'accept-encoding': 'gzip, deflate, br',
          'origin': 'https://3v4l.org',
          'referer': 'https://3v4l.org/',
          'User-Agent': userAgent
        }
      }, callback)
    },
    /**
     * Form data POST request (submit code)
     */
    post_form (data, callback) {
      request.post({
        url: 'https://3v4l.org/new',
        formData: data,
        headers: {
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'content-type': 'application/x-www-form-urlencoded',
          'origin': 'https://3v4l.org',
          'referer': 'https://3v4l.org/',
          'User-Agent': userAgent
        }
      }, callback)
    },
    /**
     * JSON GET request (get .json results)
     */
    get_json (url, callback) {
      request.get({
        url: url + '.json',
        headers: {
          'accept': 'application/json',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'referer': url,
          'User-Agent': userAgent
        }
      }, callback)
    }
  }
}
