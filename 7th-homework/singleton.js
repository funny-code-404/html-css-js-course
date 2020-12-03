// 4. Написать синглтон

class SomeClass {
  constructor() {
    if (SomeClass._insence) {
      return SomeClass._insence;
    }
    return (SomeClass._insence = this);
  }
}

const obj1 = new SomeClass();
const obj2 = new SomeClass();
