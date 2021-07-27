let car = 'Mosh';
car = 5;
console.log(car);
const truck = true;
console.log(truck);

let person = {
    name: 'Mosh',
    age: 30
};
console.log(person);

person.name = 'John';
console.log(person);

person['name'] = 'Mary';
console.log(person.name);

let selectedColors = ['red', 'blue'];
console.log(selectedColors);

selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

function greet(card, word) {
    console.log('Hello ' + card + ' ' + word);
}

greet('John', 'Mary');

function square(number) {
    return number * number;
}

console.log(square(4));

//Comments still work like this