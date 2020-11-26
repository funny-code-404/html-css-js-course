// Создать объект машины car, который имеет свойство "передача" и
// метод, который повышает/понижает передачу на 1.
// Также у объекта
// должен быть метод, который в зависимости от передачи
// возвращает сообщение о скорости: (-1) - 'back', 0 - 'neutral', 1 - 'slow',
// 2 - 'medium', 3 - 'fast', 4 - 'very fast'.

// При попытке сложить объект car с числом - число должно складываться в свойство speed и speed
// должна возвращаться.
// Если скорость больше 5 - должно быть выведено сообщение "Warning! Your speed is too high!"

const car = {
  gear: 0,

  changeGear(toIncrease = false) {
    let currentGear = this.gear;

    if (toIncrease) {
      currentGear++;
    } else {
      currentGear--;
    }

    if (currentGear >= -1 && currentGear < 4) {
      this.gear = currentGear;
      return `Gear changed to ${this.gear}th`;
    } else {
      return `Error! Gear can't be less than -1 or more than 4!!!`;
    }
  },

  getInfo() {
    switch (this.gear) {
      case -1:
        return "back";
      case 0:
        return "neutral";
      case 1:
        return "slow";
      case 2:
        return "medium";
      case 3:
        return "fast";
      case 4:
        return "very fast";
    }
  },

  valueOf() {
    return this.gear;
  },
};

console.log(car.gear);
console.log(car.changeGear());
console.log(car.changeGear());
console.log(car.changeGear());
console.log(car.changeGear(1));
console.log(car.changeGear(1));
console.log(car.changeGear(1));
console.log(car.changeGear(1));
console.log(car.changeGear(1));
console.log(car.changeGear(1));
console.log(car.getInfo());

// console.log(car + 11);
