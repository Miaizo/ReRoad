export {}

interface Post {
  title: string
  content: string
  subtitle?: string  // 可选
  readonly summary: string  // 不允许修改
}

const hello: Post = {
  title: 'hello',
  content: 'A',
  summary: 'B'
}

// hello.summary = 'other'  // 修改报错

// ------------------------------------

interface Cache {
  [prop: string]: string
}

const cache: Cache = {}

cache.foo = 'value1'
cache.bar = 'value2'


