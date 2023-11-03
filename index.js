function random(){
   let n = Math.random();
    n = n * 3 + 1;
return  Math.floor(n);
 }

random();

const button = document.querySelector('#quoates');
console.log(button);
const quot = document.querySelector('.quot');
console.log(quot);
const person = document.querySelector('.person');
console.log(person);

const moreQuotes = [
  '"Abmhhgg"',
  '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus totam quae impedit architecto delectus neque."',
  '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint iusto. The man GOD helped."',
  '"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam esse numquam sapiente, voluptas minus placeat ipsum. Dolore eligendi doloribus veritatis."',
  '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sapiente! Quasi, quae? Quia modi consectetur minus in."',
];


const persons = ["hahjj", "Abraham Lincon", "Chibuzor", "Micheal", "Enjoyment"];

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