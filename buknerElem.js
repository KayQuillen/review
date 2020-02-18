var userInput = Array();
var answers = Array[B,C,A,C,D,D,B,D,C,A];

function getScore(){
var score=0;
var numQuestions=10;

for (var i=0;i<numQuestions;i++){
if (userInput[i]==answers[i]){
score += 1;
}
else{
score += 0;
}
}
return score;
}
function returnScore(){
alert("Your score is "+getScore()+"/10");
}