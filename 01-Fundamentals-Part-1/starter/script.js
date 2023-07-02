"use strict";

const RetirmentYear = (birthyear, firstName) => {
  const age1 = 2037 - birthyear;
  const retirementyear = 65 - age1;
  // return retirementyear;
  return `${firstName} retires in ${retirementyear} years`;
};
console.log(RetirmentYear(1990, "Siddhant"));

function fruitpeices(fruit) {
  const pieces = fruit * 4;
  return pieces;
}

function fruitProcessor(apple, oranges) {
  const applepieces = fruitpeices(apple);
  const orangespieces = fruitpeices(oranges);
  const juice = `we need ${applepieces} of apple and ${orangespieces}  oranges for fruit processing`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//coding chalenge 1
const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`winner is dolhphins ${avgDolphins} vs ${avgKoalas}`);
  }
  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`winner is kolas ${avgDolphins} vs ${avgKoalas}`);
  } else {
    console.log(`its a draw ${avgDolphins} vs ${avgKoalas}`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

const names = new Array("Siddhant", "Deep", "Deepannshu", "kartik");
const years = new Array(1991, 2001, 2202, 1100);
console.log(years[0], names[0]);
const firstName = "siddhant";
const names2 = new Array(firstName, 2023 - 1972, "deepanshu", "yash", names);
console.log(names2);

//var query=prompt('Enter the name you want to search')

//if(names.includes(query)){
//console.log(`you have a friend name ${query}`)
//}else{
//      console.log(`you dont have a friend name ${query}`);
//}

//coding challenge 2

// var billamount = prompt("Enter the total amount");
// function calcTip(billamount) {
//   if (billamount >= 50 && billamount <= 300) {
//     var tip = billamount * 0.15;
//     return tip;
//   } else {
//     var tip = billamount * 0.2;
//     return tip;
//   }
// }

// console.log(calcTip(billamount));

const bills = new Array(125, 555, 44);

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    var tip = bill * 0.15;
    return tip;
  } else {
    var tip = bill * 0.2;
    return tip;
  }
}
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

const total = new Array(
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
);

console.log(bills, tips, total);

const sid = {
  firstName: "Siddhant",
  lastName: "Tomar",
  age: 2023 - 2000,
  Profession: "SDE",
  Friends: ["Yash", "Kartik", "Deepanshu", "Deep", "Paaji"],
};

console.log(sid);
console.log(sid.Friends[1]);

const intrestedIn = prompt(
  "What do you want to search for firstname, lastname ,age , profession , friends ?"
);
if (sid[intrestedIn]) {
  console.log(sid[intrestedIn]);
} else {
  alert("Wrong request");
  console.log("Wrong request");
}

console.log(
  `${sid.firstName} has ${sid.Friends.length} friends and his best friend is ${sid.Friends[3]}`
);