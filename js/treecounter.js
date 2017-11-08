/*
FILE NAME: treecounter.js
WRITTEN BY: Mikkel Svagaard
WHEN: October 2017
PURPOSE: Generates counter on front page to illustrate number of trees saved
*/


//Setup canvas and context
var tree_canvas = document.getElementById("treeCanvas");
var tctx = tree_canvas.getContext("2d");

//Helping function to calculate length of bar based on percentage
function getLengthFromPercentage(value){
  return 300*value
}

//Function returing amount of trees based on timestamp in ms
function getTree(value){
  return Math.round(value/years*20000000);
}

//Calculate ms in year
const minutes = 1000 * 60;
const hours = minutes * 60;
const days = hours * 24;
const years = days * 365;


//function that draws the bars
function drawBars(p){
  tctx.beginPath();
  tctx.fillStyle="gray";
  tctx.rect(0,0,getLengthFromPercentage(1),150);
  tctx.fill();

  tctx.beginPath();
  tctx.fillStyle="green";
  tctx.rect(0,0,getLengthFromPercentage(p),150);
  tctx.fill();
}

let d = new Date(); //current ms
let r = d.getTime() % years //remaining ms this year
const goal = getTree(years) //goal in trees
let current = getTree(r) //current tree count

function updateCounter(){
  //updates tree count
  r = new Date().getTime() % years
  current = getTree(r)
  //updates output field
  document.getElementById("canvasCounterField").innerHTML = current  + " / " + goal + " Trees";
}

drawBars(current/goal); //these are drawn only once, not scaling with the counter
updateCounter(); //initial showing of the counter
setInterval(updateCounter,2000); //updates the counter every 2 seconds
