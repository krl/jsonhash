var jsonhash = require('./index.js')
var assert = require('assert')

/* global it */

it('should hash json objects', function () {
  var h1 = jsonhash(42)
  var h2 = jsonhash('42')
  var h3 = jsonhash([1, 2, 3])
  var h4 = jsonhash({ a: [1, 2, 3],
                      b: 'string' })

  assert.equal(h1, 'cf01c9d9de8cf1433d212adb97be45ecfc0fd868599faf3ee4741a5e959d424e')
  assert.equal(h2, 'e0f5044c876d6a90f82c726b60264b8fdb333920ab101bb62f775d8947d4a204')
  assert.equal(h3, '6a8f71eb1eb0b7d3742d8ca2204f78cec3505974f003fe287b6eccc2e1320fe9')
  assert.equal(h4, '48ebee2dabeb9a4989bfe902223767b3ad2a1cd938826780ace2a15f29e4154b')
})

it('should hash different object key orders to same value', function () {
  var h1 = jsonhash({ a: [1, 2, 3], b: 'string' })
  var h2 = jsonhash({ b: 'string', a: [1, 2, 3] })

  assert.equal(h1, h2)
})
