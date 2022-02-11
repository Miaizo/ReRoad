export {}

function stringify (value: any) {
  return JSON.stringify(value)
}

stringify('string')

stringify(100)

let foo: any = 'string'

foo = 100

// foo.bar() //类型检查不安全