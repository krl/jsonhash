var B2 = require('blake2s')
var stringify = require('json-stable-stringify')

module.exports = function (value, hashbytes) {
  var json = stringify(value)
  var hasher = new B2(hashbytes) // default 32
  hasher.update(json)
  return hasher.digest('hex')
}
