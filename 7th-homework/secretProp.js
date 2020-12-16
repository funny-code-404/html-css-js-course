// 3. Cоздать объект с волшебным свойством, чтобы при присвоении ему значения,
// в консоль выводилась текущая дата и значение, которое присваиваем.
// А при чтении всегда выводилось число на 1 больше предыдущего

const user = {
  firstName: "Ann",
  surName: "Green",
  interests: ["books", "cooking", "travels"],

  get secretProp() {
    return `Value is ${this._secretProp + 1}`;
  },

  set secretProp(value) {
    this._secretProp = value;

    const date = getDate();
    console.log(`Today is ${date} | ${this._secretProp}`);
  },
};

///получить текущую дату
function getDate() {
  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  return `${day}.${month}.${year}`;
}

user.secretProp = 2;
console.log("------------------");
console.log(user.secretProp);
