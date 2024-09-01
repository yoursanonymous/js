// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!
const facialHair = (word.slice(5)).replace("o", "e");

console.log(facialHair);
if (phrase === stop) {
    console.log("red")
}
else if (phrase === "slow") {
    console.log("yellow")
}
else if (phrase === "go") {
    console.log("green")
}
else {
    console.log("purple")
}
var lottoNumbers = [1, 2, 3, 4, 5, 6]
leaderboard[1] = "luna"
leaderboard[3] = "Draco"
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");
airplaneSeats[2][1] = "Hugo"
var product = {
    name: "Gummy bears",
    inStock: true,
    price: 1.9,
    flavors: ["grape", "apple", "cherry"]
};
restaurent.fullAddress = restaurent.address + ", " + restaurent.city + ", " + restaurent.state + " " + restaurent.zipcode;
for (let i = 25; i <= 0; i -= 5) {
    console.log(i);
}
for (i = 5; i > 0; i++) {
    console.log(people[i])
}

let message = 'i hate beets';

function rant(message) {
    console.log(message.toUpperCase())
}
rant();
rant();
rant();
function isSnakeEyes(i, j) {
    if (i === 1 && j === 1) {
        console.log("Snake Eyes!")
    }
    else {
        console.log("Not Snake Eyes!")
    }
}
function multipy(i, j) {
    return i * j;
}
function square(num) {
    return num * num;
}
function call(func) {
    func();
    func();
}
function rollDie() {
    const roll = Math.floor(Math.random() * 6 + 1);
    console.log(roll);
}
call(rollDie);
const movies = [
    {
        title: 'holiday',
        score: 10
    },
    {
        title: 'infinity war',
        score: 98
    }
];
movies.forEach(function (m) {
    console.log(`${this.title}=${this.score}`);
})
const num = [1, 2, 3, 4, 5, 6];
const double = num.map(function (n) {
    return n * 2;
});
const title = movies.map(function (movie) {
    return movie.title.toUpperCase();
})
var firstNames

const user = {
    email: 'harvey@gmail.com',
    password: 'lololooo',
    firstName: 'harvey',
    lastName: 'specter',
    born: 1960,
    died: 2004,
    bio: 'harvey bernard milk was an american lawyer',
    city: 'san francisco',
    state: 'california'
};
const { email, firstName, lastName, city, state } = user;
const { born: birthyear, died = 'n/a' } = user;
let temperature;
function isShortsWeather(temperature){
    if(temperature>=75){
        true;
    }
    else{
        false;
    }
}
function lastElement(a){
    let lenth=a.lenght;
    if(lenth=0){
        return  null;
    }
    else{
        return a[lenth-1];
    }
}
function capatlize(str){
        return str[0]-=32;
        for(let i=1;i<str.length;i++){
            return str[i];
        }
}
str.slice(0,1)
function sumArray(a) {
    for(let i=0;i<a.length;i++){
         let sum+=a[i];
    }
    return sum;
}
function returnDay(){
    let week=[,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday];
    function plug(i){
        return week[i];
    }
}
// const { query } = require("express");

function returnDay(i){
    let week=[,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    function plug(i){
        return week[i];
    }
}
console.log(returnDay(1));
var doneTodos=document.querySelectorAll('.done');
var checkbox=document.querySelector('#scales');
document.querySelector('input[type="text"]')
onclick=console.log("boo");
onclick=console.log("clicked")