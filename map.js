'use strict';

let people = [
  {name: 'Cynthia', hairColor: 'brown'},
  {name:'Clayton', hairColor: 'purple'},
  {name: 'Jose', hairColor: 'blond'},
  {name: 'Maureen', hairColor: 'blue'},
  {name: 'Dmitri', hairColor: 'white'},
];

let sortedPeople = people.sort((person1, person2) => person1.name.localeCompare(person2.name));
console.log(sortedPeople);

function display(string){
  console.log(string);
}

people.map(person => `hi ${person.name}`).map(display);
people.map(person => `bye ${person.name}`).map(display);

let missingNames = ['Sean', 'Jameson'];
missingNames.map(name => `hi ${name}`).map(display);
missingNames.map(name => `bye ${name}`).map(display);

missingNames.map(display);

sortedPeople.map(person => {
  return person.name
}).map(display);