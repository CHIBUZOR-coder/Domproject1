function random(){
   let n = Math.random();
    n = n * 4 + 1;
return  Math.floor(n);
 }

random();
const a = random();
console.log(a);

const button = document.querySelector('#quoates');
console.log(button);
const quot = document.querySelector('.quot');
console.log(quot);
const person = document.querySelector('.person');
console.log(person);

const moreQuotes = [
  '"Abmhhgg"',
  ` "My concern is not whether GOD is on our side; my greatest concern is to be on GOD'S side, for GOD is always right."`,
  `"I may not have yet what i want, but i will always be greatfull to GOD because my position today, is somebody's prayer point."`,
  `"May your choise reflect your hopes not your fears"`,
  `"He who has never learned to obey cannot be a commander"`,
];


const persons = ["hahjj", "Abraham Lincon", "Chibuzor", "Nelson Mandela", "Aristotle"];

console.log(moreQuotes);

function MoreQoutes(){
  const b = random();
  console.log(b);
const change = moreQuotes[b];
const changePerson = persons[b];
console.log(change);
quot.innerText = change;
person.innerText = changePerson;



};

MoreQoutes();


 button.addEventListener('click', MoreQoutes);