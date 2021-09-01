'use strict';

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function classDecorator(target) {
  target.say = 'hello world';
}

var Person = classDecorator(_class = function Person() {
  _classCallCheck(this, Person);
}) || _class;

console.log(Person['say']);
