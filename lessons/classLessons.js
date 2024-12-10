class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    introduce(){
        console.log(`Привет! Меня зовут ${this.name}, мне ${this.age} лет.`)
    }
}

const person = new Person('Alex',34)
person.introduce()


class Car{
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo(){
        console.log(`Это машина марки ${this.brand}, модель ${this.model}, ${this.year} года.`)
    }
    getCarAge(){
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - this.year;
        return carAge;

    }
}
const car1 = new Car('Toyota','Camry',2020);

car1.displayInfo();

console.log(`Возраст машины:${car1.getCarAge()} лет.`);

class Ghost{
    constructor(){
        this.color = ['white','yellow','purple','red'][Math.floor(Math.random()*4)];
    }
}

ghost1 = new Ghost();
console.log(ghost1.color);

ghost2 = new Ghost();
console.log(ghost2.color);


function drawStairs(n) {
    let stairs = ''
for (let i = 0; i < n; i++) {
   stairs +=  ' '.repeat(i) + 'I'
    if (i < n - 1) {
        stairs +=  '\n';
    }
}
return stairs;
}

console.log(drawStairs(11))











