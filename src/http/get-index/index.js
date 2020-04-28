// learn more about HTTP functions here: https://arc.codes/primitives/http
let arc = require('@architect/functions')

// async function praise(req) {
//   return {
//     body: 'Praise the Cage!!!'
//   }
// }

// exports.handler = arc.http.async(praise)

exports.handler = async function http (req) {
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `Praise Cage`
  }
}