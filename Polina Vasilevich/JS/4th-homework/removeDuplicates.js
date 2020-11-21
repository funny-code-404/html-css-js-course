// 1. напишите функцию removeDuplicates(arr), которая возвращает массив, 
// в котором удалены повторяющиеся элементы из массива arr 
// (игнорируйте чувствительность к регистру)

function removeDuplicates(arr) {
  const newArr = [];
  arr.forEach(item => {
    if (!newArr.includes(item.toLowerCase())) {
      newArr.push(item.toLowerCase());
    }
  });

  return newArr;
}

const arr = ["php", "PHP", "css", "CSS",
  "script", "script", "html", "html", "java"
];
console.log(removeDuplicates(arr));  // [php,css,script,html,java]
