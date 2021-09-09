var readlinesync = require("readline-sync")
const chalk = require('chalk');
const log = console.log;

var userScore = 0 
var welcome
console.log(chalk.yellow("welcome"))

var userName = readlinesync.question(chalk.cyan("May I have Your Name?"))
console.log(chalk.blueBright("Hello " + userName))

function quiz(question, answer){
  var userInput = readlinesync.question(chalk.magentaBright(question))

  if(userInput === answer){
    console.log(chalk.magenta("You are Right!"))
    userScore = userScore + 1
    console.log(chalk.green("Your Score is: " + userScore))
  }
  else{
    console.log("You are Wrong")
    userScore = userScore - 1
    console.log("Your score is: " + userScore)
    console.log("The Correct Answer is: " + answer)
  }
}
var questions = [
  {
   question: "Would you like to play a quiz a. Yes b. No",
   answer: "a",
  },
  {
   question: "What is Blue  a. colour b. cloth",
   answer: "a",
  },
  {
   question: "How water Feels a. Solid b. Gas c. Liquid",
   answer: "c"
 }
]
for(var i=0; i<questions.length; i++) {
//var quest = questions[i]
quiz(questions[i].question, questions[i].answer)
}


var highScore = {
  score : "2"
}
console.log("The HighScore is " + highScore.score)

if(userScore > highScore.score){
  console.log("Congratulation you have a High Score")
}
else{
  console.log("Better Luck Next Time ")
}