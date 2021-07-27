/*
//Example Stuff
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

if (car === 'Jane') {
    alert('Its fuckin Jane!');
}
else {
    alert('Oh no!');
}
*/
/*
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/RobotSketch.JPG') {
      myImage.setAttribute('src','images/RobotSketch.JPG');
    } else {
      myImage.setAttribute('src','images/RobotSketch.JPG');
    }
}
*/
//Part 1
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//Part 2
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//Part 3
randomize.addEventListener('click', result);

function result() {

    //Part 3 Written Stuff
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem);
    //End Part 3 Written Stuff


  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14)  + ' stone'; 
    let temperature =  Math.round((94-32) * (5/9)) + ' centigrade';

    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


