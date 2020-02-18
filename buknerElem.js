var userInput = studAnsw;
var answers = ["B","C","A","C","D","D","B","D","C","A"];
var studAnsw = ["B","A","A","C","D","A","B","B","A","A"]

function getScore(){
var score = 0;
var numQuestions= answers.length;

for (var i = 0;i<numQuestions;i++){
if (studAnsw[i]==answers[i]){
score += 1;
}
else{
score += 0;
}
}
return score;
}var x = getScore()
function returnScore(x){
alert("Your score is "+getScore()+"/10");

var grade = score ; 

            if (grade < 5) {

               letterGrade = "F";

           }else

           if (grade < 6) {

               letterGrade = "D";

           }else

           if (grade < 7) {

               letterGrade = "C";

           }else

           if (grade < 9) {

               letterGrade = "B";

           }else

           if (grade <= 10) {

               letterGrade = "A";

           }

           total += grade;   

           entryCount += 1;  

           alert("Number grade = " + grade + "\nLetter grade = " + letterGrade);

        }

        