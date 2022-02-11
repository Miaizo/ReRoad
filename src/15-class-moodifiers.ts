export {}

class Person {
  name: string
  private age: number
  protected gender: boolean

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi (msg: string): void {
    console.log(msg)
    console.log(this.age)
  }
}

class Student extends Person {
  private constructor (name: string, age: number) {
    super(name, age)
    console.log(this.gender)
  }

  static create (name: string, age: number) {
    return new Student(name, age)
  }
}

const tom = new Person('tom', 18)
console.log(tom.name)
// console.log(tom.age)
// console.log(tom.gender)

// const jack = new Student()
const jack = Student.create('jack', 19)