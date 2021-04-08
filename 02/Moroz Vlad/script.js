const languages = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
let languagesResult = [];

for (let i = 0; i < languages.length; i++) {
  if (!languagesResult.includes(languages[i])) {
    languagesResult.push(languages[i]);
  }
}

console.log(languagesResult);

const repeatingNums = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];
let numsResult = {};
for (let i = 0; i < repeatingNums.length; ++i) {
  let a = repeatingNums[i];
  if (numsResult[a]) {
    numsResult[a] += 1;
  } else {
    numsResult[a] = 1;
  }
}
for (let key in numsResult) {
  console.log("Число " + key + " == " + numsResult[key] + " раз(а)");
}

const falsyArray = [NaN, 0, 77, false, -17, '', undefined, 99, null];
let trueArray = [];

for (let i = 0; i < falsyArray.length; ++i) { 
    if (falsyArray[i]){
        trueArray.push(falsyArray[i]);
    }
}

console.log(trueArray);