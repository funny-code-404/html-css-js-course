 /**Создать кэш данных в объекте и возвращать данные из
кэша, если значение имеется или записывать в него
новые значения, если не имеется. */

function AnyFunc () {
    const user = {
        name: "Tom",
        status: 0,
    }
        return function returnObj (key) {
            if (!user.hasOwnProperty(key)) {
                user.key = 'new key';
                }            
                    return user;
                }
}

const changeKey = AnyFunc();

console.log(changeKey('name'));
console.log(changeKey('status'));
console.log(changeKey('just'));