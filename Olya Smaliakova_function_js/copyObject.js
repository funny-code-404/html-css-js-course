/*7. Написать функцию, которая копирует один объект в другой*/

const user1 = {
    name: "Olya",
    age: "28",
    city: "Minsk",
    int: "music",
}

const user2 = {

}

function copyObject (objectOrigin, objectCopy) {
    for (let prop in objectOrigin) {
        objectCopy[prop] = objectOrigin[prop];
    }
    console.log(objectCopy);    
} 

copyObject(user1, user2);