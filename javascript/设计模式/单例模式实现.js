class Storage {
  static getInstance () {
    if (!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance
  }
  get (key) {
    return localStorage.getItem(key)
  }
  set (key, value) {
    return localStorage.setItem(key, value)
  }
}

const s1 = new Storage()
const s2 = new Storage()

console.log(s1.set('zbc', 'xxx'))
console.log(s2.get('zbc'))