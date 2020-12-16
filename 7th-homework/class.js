// 5. Создать конструктор (класс) с методами, так, чтобы следующий код работал и
//  делал соответствующие вещи, т.е. запуск кода ниже должен делать то, что говорят
//   методы, например obj.askName().askAge().showAgeInConsole().showNameInAlert();

class Person {
  //   constructor() {}

  askName() {
    const name = prompt("What's your name?");
    this._name = name;
    return this;
  }

  askAge() {
    const age = prompt("How old are you?");
    this._age = age;
    return this;
  }

  showAgeInConsole() {
    console.log(this._age);
    return this;
  }

  showNameInAlert() {
    alert(this._age);
    return this;
  }
}

const person1 = new Person();
person1.askName().askAge().showAgeInConsole().showNameInAlert();
