var canvas;
var database;
var gameState = 0, contestantCount, quiz, question, person, allPeople;
var backgroundColor = "lavender";


function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(backgroundColor);
 console.log("Efforts By ASTHA RANJAN")
 console.log("HOPE U LOVED N ENJOYED THE QUIZ")
  
//remember to CALL play() here with some expression or condition
}
