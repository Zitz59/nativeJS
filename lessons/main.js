//primitives:

// string
// number
// boolean
// undefined ( отсутсвие определённости )
// null ( отсутсвие объекта )

// symbol специальная уникальная строка
// BigInt числа разрядность которых > 26 (10 в 26й степени)

// составные типы данных === object

// array    --used as data save structure--
// упорядоченная коллекция ( привязанная к интексу 0, 1, 2 итп) === key : value (медленно перебирается список)
// object   --used as data save structure--
// неупорядоченная коллекция ===  ключ : значение (очень быстрый доступ по ключу вне зависимости от размера объекта)
// function

//Особенности объектов

//1. Сложная структура
//2. ССылочный тип данных
//3. Имеют свойства и методы

// const obj = {name: 'Alex'} // создание с помощью литерала
//
// const obj2 = new Object() // создание с помощью функции-конструктора
//
// const obj3 = obj
//
// const num = 1
// const num2 = num
//
// const user = {
//     name: 'Bob',
//     age: 32,
//     isStudent: false
// }
//
// // const copyUser = {...user, age: user.age + 1}
// // console.log(user === copyUser)
//
// const array = [1, 2, 3, 4, 5]
//
// array[array.length] = 6
//
// console.log(array)
//
// const copyArray = [0, ...array, 7]
// console.log(copyArray)
//
// const users = [
//     {
//         id: 1,
//         name: "Bob",
//         isStudent: true
//     },
//     {
//         id: 2,
//         name: "Alex",
//         isStudent: true
//     },
//     {
//         id: 3,
//         name: "Ann",
//         isStudent: true
//     },
//     {
//         id: 4,
//         name: "Donald",
//         isStudent: true
//     }
// ]
//
// console.log(users)
//
// const fullCopy = structuredClone(users)// вариант полного копирования
//
// console.log(fullCopy === users)
// console.log(fullCopy[0] === users[0])

//C create
//R read
//U update
//D delete

//CREATE-----------------------------------------------------
// const newUser =  {id: 5, name: 'Helga', isStudent: true}
//
// let copyUsers = [...users, newUser];
//
// console.log(copyUsers )
//-----------------------------------------------------------
//
//DELETE-----------------------------------------------------
//
// const filteredUsers = []
// for (let i = 0; i < users.length; i++) {
//    if(users[i].id !== 3){
//        filteredUsers.push(users[i])
//    }
// }
// console.log(filteredUsers)
//
// const filteredUsers = users.filter(user => user.id !==3)
// console.log(filteredUsers === users)
//------------------------------------------------------------
//
//UPDATE------------------------------------------------------
//
// const updatedUsers = [...users] //копия исходного массива
// const userId4 = updatedUsers.find(u => u.id === 4) // нашли нужного студента
// const index = updatedUsers.indexOf(userId4) // определили индекс
// const copyUser4Id = {...userId4, isStudent: false} // сделали копию объекта и поменяли свойство
// updatedUsers[index] = copyUser4Id // в новый массив закинули копию объекта с новым свойством
//
//const updatedUsers = users.map(u => u.id === 4 ? {...u, isStudent: false} : u)
//console.log(updatedUsers)
//-------------------------------------------------------------
// const superUser = {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//         street: 'Kattie Turnpike',
//         suite: 'Suite 198',
//         city: 'Lebsackbury',
//         zipcode: '31428-2261',
//         geo: {
//             lat: '-38.2386',
//             lng: '57.2232',
//         },
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//         name: 'Hoeger LLC',
//         catchPhrase: 'Centralized empowering task-force',
//         bs: 'target end-to-end models',
//     },
// }
//
// const copySuperUser = {...superUser,company: {...superUser.company, name: 'Tesla'}}
//
// console.log(copySuperUser.company.name)
//
// const copySuperUser2 = structuredClone(superUser)
// console.log(copySuperUser2 === superUser)

//---------------------------------------------------------------------------------------------//

// function calcValues(a, b) {
//     return [a + b, undefined, a * b, a / b]
// }
//
// const [sum, sub = 'вычитания нет', mult, ...other] = calcValues(5, 3)
// console.log(sum,sub, mult, other)

// const person = {
//     name: 'Kirill',
//     age: 24,
//     adress: {
//         country: 'Poland',
//         city: 'Warsaw',
//     },
// }
// const {name: newName, age, car = 'no car'} = person // Эквивалентно const name = person.name; const age = person.age;
// console.log(newName, age, car)

// // Функция принимает объект в качестве аргумента
// function printPersonInfo({name, age, city}) {
//     console.log(`${name}, ${age} years old, from ${city}`)
// }
//
// const person = {name: 'Eva', age: 35, city: 'Paris'}
//
// // Вызов функции с передачей объекта
// printPersonInfo(person)

const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const total = names.push('Nina')
//
// console.log('names', names) // [ 'Alex', 'Bob', 'Ivan', 'Sasha', 'Nina' ]
// console.log('total', total) //5

function itPush(array, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        array[array.length] = elements[i]
    }
    return array.length
}

console.log(itPush(names, 'Brunhilda', 'Izolda', 'Sigmar'))
console.log(names)

function itPop(array) {
    const lastElement = array[array.length - 1]
    array.length = array.length - 1
    return lastElement
}

console.log(itPop(names))
console.log(names)


function itShift(array) {
    const firstElement = array[0]
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1]
    }
    array.length = array.length - 1
    return firstElement
}

console.log(itShift(names))
console.log(names)

function inUnShift(array, ...elements) {
    array.length = array.length + elements.length
    for (let i = 0; i < elements.length; i++) {
        array[i + elements.length] = array[i]
        array[i] = elements[i]
    }

    // const temp = [...elements, ...array]
    // for (let i = 0; i < temp.length; i++) {
    //     array[i] = temp[i]
    // }
    return array.length
}

console.log(inUnShift(names, 'Gvidon', 'Saltan'))
console.log(names)

const numNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function itReverse(array) {
    let temp;
    for (let i = array.length - 1; i >= array.length / 2; i--) {
        temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }
    return array
}

console.log(itReverse(numNum))


function itToReversed(array) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[array.length - 1 - i] = array[i]
    }
    return result
}

console.log(itToReversed(numNum))

const names2 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const joinArr = names.join('-')

console.log('names', names) // [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
console.log('joinArr', joinArr) //joinArr Alex-Bob-Ivan-Sasha


function itJoin(array, separator = ',') {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if (i === array.length){
            result += array[i]
        } else {

        }
        result += array[i] + separator
    }
    return result
}




//1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

function converter (mpg) {
    const result = (1.609344 / 4.54609188) * mpg
    return (Math.round(result * 100) / 100)
}

console.log(converter(20))