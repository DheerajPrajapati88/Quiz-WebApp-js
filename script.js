function animation(){

    const tl=gsap.timeline();
    tl.from(".img",{
        y:50,
        duration:2,
        rotate:"40deg",
        repeat:-1,
        yoyo:true,
        repeatDelay:0,
        stagger:0.2
    })
    gsap.from(".jsIcon",{
        x:-5,
        repeat:-1,
        yoyo:true,
        duration:2,


    })
}
animation();

const data=[
    {
        id:1,
        question:"1. Who invented Javascript ? ",
        answers:[
            {answer:"Brendan Eich",isCorrect:true},
            {answer:"Guido van Rossum",isCorrect:false},
            {answer:"Bjarne Stroustrup",isCorrect:false},
            {answer:"James Gosling",isCorrect:false},
        ]
    },
    {
        id:2,
        question:"2. What is the index of the first element in an array? ",
        answers:[
            {answer:"1",isCorrect:false},
            {answer:"-1",isCorrect:false},
            {answer:"0",isCorrect:true},
            {answer:"10",isCorrect:false},
        ]
    },
    {
        id:3,
        question:"3. How do you remove the last element from an array? ",
        answers:[
            {answer:"removeLast() ",isCorrect:false},
            {answer:"pop()",isCorrect:true},
            {answer:"splice() ",isCorrect:false},
            {answer:"none of these",isCorrect:false},


        ]
    },
    {
        id:4,
        question:"4. How do you define a function in JavaScript?  ",
        answers:[
            {answer:"function myFunction() {} ",isCorrect:false},
            {answer:"All",isCorrect:true},
            {answer:"const myFunction = () => {};",isCorrect:false},
            {answer:"let myFunction = function() {};",isCorrect:false},


        ]
    },
    {
        id:5,
        question:"5. What is the correct way to write a JavaScript array?",
        answers:[
            {answer:"var x=>[\"a\",\"b\"]",isCorrect:false},
            {answer:"var x=[\"a\",\"b\"]",isCorrect:true},
            {answer:"var x=(\"a\",\"b\")",isCorrect:false},
            {answer:"var x={\"a\",\"b\"}",isCorrect:false},


        ]
    }
]

const gameScreen=document.querySelector(".game");
const resultScreen=document.querySelector(".result");
const question=document.querySelector(".ques");
const answersContainer=document.querySelector(".answers");
const submit=document.querySelector(".submit");
const play=document.querySelector(".play");

let qIndex=0;
let correctCount=0;
let wrongCount=0;
let total=0;
let selectedAns;

const playAgain=()=>{
 qIndex=0;
 correctCount=0;
 wrongCount=0;
 total=0;
showQuestion(qIndex);
}
play.addEventListener("click",()=>{
    resultScreen.style.display="none";
    gameScreen.style.display="block";
    playAgain();
})
const showResult=()=>{
    resultScreen.style.display="block";
    gameScreen.style.display="none";
    resultScreen.querySelector(".correct").textContent=`correct answer:${correctCount} `;
    resultScreen.querySelector(".wrong").textContent=`wrong answer:${wrongCount} `;
    resultScreen.querySelector(".score").textContent=`score:${(correctCount - wrongCount) * 10} `;


    
}

const showQuestion=(qNumber)=>{
    if(qIndex==data.length) return showResult()
    selectedAns=null;
    question.textContent=data[qNumber].question;
    answersContainer.innerHTML=data[qNumber].answers.map((item,index)=>
        `<div class="answer">
        <input class="input" name="answer" type="radio" id="${index}" value="${item.isCorrect}">
        <label for="${index}">${item.answer}</label>
    </div>`
    ).join("")
    selectAns();
}

const selectAns=()=>{
    answersContainer.querySelectorAll(".input").forEach(el=>{
        el.addEventListener("click",(e)=>{
            selectedAns=e.target.value;
        });
    });
};

const submitAns=()=>{

    submit.addEventListener("click",()=>{
        if(selectedAns !== null){

            selectedAns === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
        }
        else alert("select an answer");
        
    });
};
showQuestion(qIndex);
submitAns();







