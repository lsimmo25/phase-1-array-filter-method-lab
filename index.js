// Code your solution here

//findMatching
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const findMatching = (array, name) => array.filter(driver => driver.toLowerCase() === name.toLowerCase());

//fuzzyMatch
const fuzzyMatch = (array, letter) => array.filter(driver => driver.startsWith(letter));

//matchName

const matchName = (array, name) => array.filter(obj => obj.name === name);