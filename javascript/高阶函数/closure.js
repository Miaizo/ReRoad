function makeSalary (base) {
  return function (performance) {
    return base + performance;
  }
}

let salaryLevel1 = makeSalary(10000);
let salaryLevel2 = makeSalary(12000);

console.log(salaryLevel1(1000));
console.log(salaryLevel2(1000));