const readlineSync=require('readline-sync');
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));


let userAnswer=readlineSync.question("Whats your Name :)");
let score=0;
let highestScore=2 ,highestScoreBy="Dhawani";

console.log("Welcome  "+userAnswer+ " to the world of Kundan...lets see how much you know me ");

console.log("_____Lets begin the game_____");


function play(question,answer){

  let userAnswer=readlineSync.question(question);
  if(userAnswer===answer)
  {
    score++;
    console.log("right!");
  }
  else{
    console.log("not right!");
  }
  console.log("Your score at this stage is "+ score);
  console.log("*****************");
  
}
let QnAarray=[
  {question:"Whats my favourite song ", answer:"adiyogi"},
  {question:"Whats my residential place ", answer:"delhi"},
  {question:"Whats my favourite place ", answer:"tamil nadu"},
  ]

for(let i=0;i<QnAarray.length;i++)
  {
    play(QnAarray[i].question,QnAarray[i].answer);
  }
if(score>highestScore)
{
  console.log("Hurrraay!! you have beaten the higest score");
  console.log("highest score was "+ highestScore +" by " +highestScoreBy);
}
else{
  console.log("Hurrraay!! you played well");
  console.log("but the highest score was "+ highestScore +" by "+highestScoreBy);
}




