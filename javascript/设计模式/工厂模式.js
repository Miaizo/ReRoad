// 1.
// const liLei = {
//   name: '李雷',
//   age: 25,
//   career: 'coder'
// }
// // 2.
// function User (name, age, career) {
//   this.name = name;
//   this.age = age;
//   this.career = career;
// }

// const user = new User('miaizo', 18, 'coder')

// console.log(user)

// 3.
function User (name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

function Factory (name, age, career) {
  let work;
  switch (career) {
    case 'coder':
      work = ['写代码'];
      break;
    case 'boss':
      work = ['喝茶'];
      break;
  }
  return new User(name, age, career, work);
}

const user = new Factory('miaizo', 18, 'coder');

console.log(user);