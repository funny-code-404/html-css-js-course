// 1. Создать кэш данных в объекте и возвращать данные из
// кэша, если значение имеется или записывать в него
// новые значения, если не имеется

// 2. Дополнить объект методом, который возвращает
// количество всех его ключей

function getData() {
  const obj = {
    getCountKeys() {
      let count = 0;
      for (let in obj) {
        count++;
      }
      return `Object has ${count} keys.`;
    },
  };

  return function someFunc(prop, value) {
    someFunc.getCountKeys = obj.getCountKeys;

    if (prop in obj) {
      return obj[prop];
    } else {
      obj[prop] = value;
      return `Added new key "${prop}". `;
    }
  };
}

const cash = getData();
console.log(cash("name", "Polina"));

console.log(cash("name", ""));

console.log(cash.getCountKeys());
