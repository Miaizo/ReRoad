export {}

const tuple: [number, string] = [12, 'zx']

// const age = tuple[0]
// const name = tuple[1]

const [ age, name ] = tuple

const a = Object.entries({
    foo: 123,
    bar: 456
})

console.log(a)