window.onload = function(){
var dynamicDate = document.querySelector(".dynamic-date");

var date = new Date();
const month = ["January ","February ","March ","April ","May ","June ","July ","August ","September ","October ","November ","December "];
let newMonth = month[date.getMonth()];
var todayDate = date.getDate() ;
var year = date.getFullYear();

var fullDate = newMonth + todayDate + ", " + year

dynamicDate.innerHTML = fullDate
}

