var mainElement = document.getElementById("main");
var btn = document.getElementById("answers");
var timeLeft = 0
var quizTime = 0
var score = 0
var timer = document.getElementById("time")



var points = 0;
var ans = ""
let i =0;

var initals = "";
var user = {
    name: initals,
    score: points
   
};



highScoresArray=[];
highScorsShow="";
var arr= [
        {
            q:"How would you call the object's startup method?", 
            a:[" 1 . computer.startUp;         ",
               " 2 . computer.startup();       " ,
               " 3 . computer.startUp();       " ,
               " 4 . computer(startUp);        "        ],
            ra:" 3 . computer.startUp();       " ,
          },
        {
            q:"In startUp(), what does this refer to?", 
            a:[" 1 . The computer object       ",
               " 2 . The startUp() method      ",
               " 3 . The JavaScript file       ", 
               " 4 . The window object         " ],
            ra:" 1 . The computer object       "
        },
        {
            q:"How would you console log the computer's RAM?", 
            a:[
                " 1 . console.log(computer[ram]);",
                " 2 . console.log(computer.ram); ",
                " 3 . console.log(computer(ram));",
                " 4 . console.log(computer->ram);"
            ],
            ra: " 2 . console.log(computer.ram); "   
        },
        {
            q:"What is getItem commonly used for?", 
            a:[
                "1. adding drama",
                "2. online shopping",
                "3. naming a variable",
                "4. local storage"
            ],
            ra:"4. local storage"
        }
];

        // clear function
function clearBox() {
    document.getElementById("main").innerHTML = "";
    document.getElementById("answers").innerHTML = "";
}
        //clean high score 
var clesrHighScore = function(){
    highScoresArray = [];
    localStorage.clear();
    document.getElementById("ns").innerHTML = "";
}
        //saving to local storage
var savinLocalSorage =function(){
    user.name=initals;
    user.score=points;
    localStorage.setItem('user',JSON.stringify(user));
    retriveLocalSorage();     
}
        //geting data back from local stoarge 
var retriveLocalSorage =function(){
    var    myDate=JSON.parse( localStorage.getItem('user' ) );
        
    highScoresArray.push(myDate);
}

highScoresArray=[];
        //high score function 
var highScores =function(){
    clearBox();
    document.getElementById("answer-display").innerHTML = ""
    var hs = document.createElement("h2");
    hs.setAttribute("id", "hs");
    hs.innerHTML = "High scores!";
    document.getElementById("answers").appendChild(hs); 
    div2=document.createElement("div");
    div2.className="div2";
    div2.setAttribute("id", "div2");
    document.getElementById("answers").appendChild(div2);
    var ns = document.createElement("h3");
    ns.setAttribute("id", "ns");
    ns.className="ns";
    for(j=0; j<highScoresArray.length;j++){
        ns.innerHTML +=`${highScoresArray[j].name} ${highScoresArray[j].score}<br />`
    }
    document.getElementById("div2").appendChild(ns); 
    
    div=document.createElement("div");
    div.className="d-grid gap-2 d-md-block";
    div.setAttribute("id", "div");
    document.getElementById("answers").appendChild(div);
    var goback = document.createElement("button");
    goback.innerHTML = "Go back";
    goback.className="btn btn-primary";
    goback.setAttribute("id", "goback");
    document.getElementById("div").appendChild(goback);
    document.getElementById("goback").addEventListener("click", function(event) {
        document.getElementById("answers").innerHTML = "";
        event.stopPropagation();
        start();
    });
    var chs = document.createElement("button");
    chs.className= "btn btn-primary";
    chs.innerHTML = "Clear high score";
    chs.setAttribute("id", "chs");
    document.getElementById("div").appendChild(chs);
    document.getElementById("chs").onclick=function(){
        clesrHighScore();
    }
   
}

// set initial timer value and fire off two functions

//  function changes timer display every tick (second)
function startTimer() {
    timer.innerHTML = (timeLeft);
    quizTime = setInterval(tick, 1000);
}
//  function equates a tick to a second and determines when timer reaches zero
function tick() {
    
    if (timeLeft !== 0) {
     timeLeft--;
     timer.innerHTML = (timeLeft);
    }
    else {
        clearInterval(quizTime)
        timeLeft=0;
        end();
       
    }
    
    return;
}
    // stop timer and subtract 10
function stopTimer() {
    clearInterval(quizTime);
    timeLeft-=10;
    startTimer();
    
}
        // input function
var inputName =function(){
    // document.getElementById("answer-display").innerHTML = "";
    clearBox()
    var p = document.createElement("h2");
    p.setAttribute("id", "p1");
    p.innerHTML = "All done!";
    document.getElementById("answers").appendChild(p); 

    var pa = document.createElement("p");
    pa.setAttribute("id", "pa");
    if(points<0){
        points=0;
    }
    pa.innerHTML = "Your final score is"+ " "  +points;
    document.getElementById("answers").appendChild(pa); 

    div1 = document.createElement("div");
    div1.className="input-group mb-3";
    div1.setAttribute("id", "div1");
    document.getElementById("answers").appendChild(div1); 

    var input = document.createElement("input");
    input.type = "text";
    input.className="form-control";
    input.placeholder="Enter your initials"
    input.setAttribute("name", "input");
    input.setAttribute("id", "input");
    input.setAttribute ("aria-label","Recipient's username" );
    input.setAttribute("aria-describedby", "button-addon2");
    document.getElementById("div1").appendChild(input); 

    var submit = document.createElement("button");
    submit.className= "btn btn-primary";
    // submit.setAttribute("onclick","highScores()");
    submit.innerHTML = "Submit";
    submit.setAttribute("id", "submit");
    document.getElementById("div1").appendChild(submit); 
    document.getElementById("submit").onclick = function(event) {
        event.stopPropagation();
        initals = document.getElementById("input").value;
        savinLocalSorage();
        highScores();
    };
}
function end() {
    clearBox();

    endGame = document.createElement("h1");
    endGame.className = "endGame";
    endGame.setAttribute("id", "EndGame");
    endGame.innerHTML = "Time is Up";
    document.getElementById("answers").appendChild(endGame);
    newGame = document.createElement("button");
    newGame.className = "btn btn-primary";
    newGame.setAttribute("id", "newGame");
    newGame.innerHTML = "Start Over";
    document.getElementById("answers").appendChild(newGame);
    ocument.getElementById("newGame").onclick = function (event) {
        event.stopPropagation();
        start();
    };

}
        // strat function
var start = function(){
    clearInterval(quizTime)
    timeLeft = 40;
    points = 0;
    ans = ""
    i =0;  
    initals = "";
    var h ="Coding Quiz Challenge";
    var p = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answer will penalize your score/time by ten esconds!";
    var header = document.createElement("h1");
    header.className = "h1";
    header.innerHTML = h;
    var para = document.createElement("p");
    para.className = "h3"
    para.innerHTML = p;
    document.getElementById("main").appendChild(header);
    document.getElementById("main").appendChild(para);
    var btn = document.createElement("BUTTON");
    btn.className = "btn btn-primary"
    btn.setAttribute("id", "ntbq");
    btn.innerHTML = "Start Quiz";
    btn.setAttribute("id", "btn");
    document.getElementById("main").appendChild(btn);
    document.getElementById("btn").onclick =  function () {
        startTimer();
        questionsAndAnswers();
    };
}
       //displaying the correct word  
var correctAnswer = function(){
    document.getElementById("answer-display").innerHTML = "";
    var para = document.createElement("h2");
    para.className = "para"
    para.innerHTML = "Correct";
    document.getElementById("answer-display").appendChild(para); 
}
        //displaying the wrong word  
var wrongAnswer = function(){
    document.getElementById("answer-display").innerHTML = "";
    var par = document.createElement("h2");
    par.className = "para"
    par.innerHTML = "Wrong";
    document.getElementById("answer-display").appendChild(par);
}
        //quetions and the answers
var questionsAndAnswers =function(){
    clearBox()
    if (i < arr.length){
        console.log(i)
         
             // questin
        var questin = document.createElement("h3");
        questin.setAttribute("id", "question");
        questin.innerHTML = arr[i].q;
        mainElement.appendChild(questin);
        answ = document.createElement("div");
        answ.className="d-grid gap-2 col6 mx-auto";
        answ.setAttribute("id","answ");
        document.getElementById("answers").appendChild(answ);
            //answer one
        answ1 = document.createElement("button");
        answ1.className="btn btn-primary";
        answ1.setAttribute("id", "btn1");
        answ1.textContent = arr[i].a[0];
        document.getElementById("answ").appendChild(answ1);
        //answer two
        answ2 = document.createElement("button");
        answ2.className="btn btn-primary";
        answ2.textContent = arr[i].a[1];
        answ2.setAttribute("id", "btn1");
        document.getElementById("answ").appendChild(answ2);
        //answer three
        answ3 = document.createElement("button");
        answ3.className="btn btn-primary";
        answ3.textContent = arr[i].a[2];
        answ3.setAttribute("id", "btn1");
        document.getElementById("answ").appendChild(answ3);
        //answer four
        answ4 = document.createElement("button");
        answ4.className="btn btn-primary";
        answ4.textContent = arr[i].a[3];
        answ4.setAttribute("id", "btn1");
        document.getElementById("answ").appendChild(answ4);
        }else{
            inputName()
            document.getElementById("answers").addEventListener("click", function(event) {
            event.stopPropagation();              
            });
    }     
}
document.getElementById("answers").onclick =  function (event) {
    ans = event.target.innerHTML
    // console.log(ans);
    checkingAnswer();
};
        //checking the ansers
var checkingAnswer = function(){ 
    if(i<arr.length){  
        if (ans === arr[i].ra){
            // console.log("correct");
            points= points + 10;
            // console.log(points);
            correctAnswer();
        }
        else  {
            // console.log("wrong");
            wrongAnswer();
            stopTimer();
            
            
        } 
    
        if (i < arr.length) {
            i++;
        
        // console.log(i)   
        questionsAndAnswers();   
    
        }else{
            return;
            
        }
    }else{
        return;
        
    }
       
}
start()






