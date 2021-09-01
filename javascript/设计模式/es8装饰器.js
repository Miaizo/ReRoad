function classDecorator(target) {
  target.say = 'hello world'
}

@classDecorator
class Person {
  
}

console.log(Person['say'])