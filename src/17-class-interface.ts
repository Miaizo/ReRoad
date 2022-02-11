interface Eat {
  eat (food: string): void
}

interface Run {
  run (distance: number): void
}

class Person implements Eat, Run {
  eat () {

  }

  run () {

  }
}

class Animal implements Eat, Run {
  eat () {

  }
  
  run () {

  }
}