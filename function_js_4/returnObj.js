 /**Создать кэш данных в объекте и возвращать данные из
кэша, если значение имеется или записывать в него
новые значения, если не имеется. 

Дополнить объект методом, который возвращает
количество всех его ключей*/

function AnyFunc () {
    const user = {
        name: "Tom",
        status: 0,
        count: function CountObj(){
             Object.key(this).length;
        },

    }
        return function returnObj (p, value) {
            if (!user.hasOwnProperty(p)) {
                user[p] = value;
                }            
                    return user;
                }
}

const changeKey = AnyFunc();

console.log(changeKey('name', "Tom"));
console.log(changeKey('status', '0'));
console.log(changeKey('just', 'just'));
console.log(changeKey('just2', 'just2'));

