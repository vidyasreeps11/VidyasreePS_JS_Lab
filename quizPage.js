//Declaring and assigning questions, answer choices and corresponding correct answers to variables
const q1="Inside which element do you put JavaScript?";
const choices_question1=["<var>","<script>","<section>","<code>"];
const a1="<script>";

const q2="Which of the following keywords is used to define a variable in Javascript?";
const choices_question2=["var","let","Both var and let","None of the options"];
const a2="Both var and let";

const q3="How can a datatype be declared to be a constant type?";
const choices_question3=["const","var","let","constant"];
const a3="const";

const q4="When an operator's value is NULL, the typeof returned by the unary operator is:";
const choices_question4=["Boolean","Undefined","Object","Integer"];
const a4="Object";

const q5="Which of the following is not a Javascript framework?";
const choices_question5=["Node","Vue","React","Cassandra"];
const a5="Cassandra";

//creating an array of questions, answer choices and correct answers
const questionCollection=[q1,q2,q3,q4,q5];
const choiceCollection=[choices_question1,choices_question2,choices_question3,choices_question4,choices_question5];
const answerCollection=[a1,a2,a3,a4,a5];

var totalQuestions=questionCollection.length;
var count=0;
var score=0;

// displaying question and answer choices
function displayContent()
{
    document.getElementById("question").innerText=questionCollection[count];
    document.getElementById("button1").innerText=choiceCollection[count][0];
    document.getElementById("button2").innerText=choiceCollection[count][1];
    document.getElementById("button3").innerText=choiceCollection[count][2];
    document.getElementById("button4").innerText=choiceCollection[count][3];
    document.getElementById("x").innerText=count+1;
    document.getElementById("y").innerText=totalQuestions;

}

//displaying content on PageLoad/Refresh
function onPageLoad()
{
   displayContent();   
}

const buttons=document.querySelectorAll(".answer_div");

//adding eventListner to buttons
buttons.forEach(b=>{
    b.addEventListener("click",function handleClick(e){

        var selectedAnswer=e.target.innerText;
        var correctAnswer=answerCollection[count];

        //checking if option selected by user is the correct answer and increasing score value accordingly
        if(selectedAnswer===correctAnswer)
        {
            score++;  
        }

        count++;
        if(count<totalQuestions)
        {
            displayContent();  
        }
        else 
        {
            //hiding question and answer choice divisions and displaying result once all questions are completed
            document.getElementById("heading").innerText="Result";
            document.getElementById("question").style.display="none";
            document.getElementById("ans_div").style.display="none";
            document.getElementById("index").style.display="none";
            document.getElementById("score").innerText=score;
            document.getElementById("totalScore").innerText=totalQuestions;
            document.getElementById("percnt").innerText=(score/totalQuestions)*100;
            document.getElementById("result").style.display="block";

        }
    });
});


