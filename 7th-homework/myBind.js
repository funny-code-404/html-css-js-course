// 2. Написать функцию myBind, которая привязывает контекст аналогично методу .bind
const user = {};

function setName(name) {
  this.name = name;
}

function getName() {
  console.log(this.name);
}

function setAge(age) {
  this.age = age;
}

function myBind(obj, func, ...args) {
  return function (...argsFunc) {
    obj.func = func;
    obj.func(...args, ...argsFunc);
  };
}

myBind(user, setName, "Polina")();
myBind(user, getName)();
myBind(user, setAge)(26);
console.log(user);
