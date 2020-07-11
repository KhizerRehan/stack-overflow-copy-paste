
import test from 'ava'
import {isObject} from '../src'


test('check parameter is typeof of object type', t => {
  const param = {}
  const expected = true
  const actual = isObject(param)
  t.deepEqual(actual, expected)
})

test('check parameter is not the typeof of object type and passing ARRAY as a parameter', t => {
  const param = []
  const expected = false
  const actual = isObject(param)
  t.deepEqual(actual, expected)
})

test('check parameter is not the typeof of object type and passing UNDEFINED as a parameter', t => {
  const param = undefined
  const expected = false
  const actual = isObject(param)
  t.deepEqual(actual, expected)
})

test('check parameter is not the typeof of object type and passing NULL as a parameter', t => {
  const param = null
  const expected = false
  const actual = isObject(param)
  t.deepEqual(actual, expected)
})

test('check parameter is not the typeof of object type and passing Symbol as a parameter', t => {
  const param = Symbol()
  const expected = false
  const actual = isObject(param)
  t.deepEqual(actual, expected)
})


test('check parameter is not the typeof of object type and passing BOOLEAN as a parameter', t => {
  const param = false
  const expected = false
  const actual = isObject(param)
  t.deepEqual(actual, expected)
})


test('check parameter is not the typeof of object type and passing STRING as a parameter', t => {
  const param = 'Object'
  const expected = false
  const actual = isObject(param)
  t.deepEqual(actual, expected)
})


test('check parameter is not the typeof of object type and passing NUMBER as a parameter', t => {
  const param = 10
  const expected = false
  const actual = isObject(param)
  t.deepEqual(actual, expected)
})
