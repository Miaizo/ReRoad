export {}

function func1 (a: number, b: number = 10, ...rest: number[]): string {
  return 'func1'
}

func1(1,2,3,4,5)

const func2: (a: number, b: number) => string = function (a: number, b: number): string {
  return 'func2'
}