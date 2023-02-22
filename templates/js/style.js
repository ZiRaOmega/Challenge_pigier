let button1 = document.getElementById("goo");


button1.addEventListener('click',function transision1() {
    document.getElementById("main").style.animation = "quit 1s linear";
    setTimeout(()=> {document.getElementById("main").style.display = "none"},1000);
    setTimeout(()=> {document.getElementById("game_set").style.zIndex = '0'},1000);
});


function transitionvideo() {
    setTimeout(()=> {
        let video = document.getElementById("video");
        video.style.display = "none";
        console.log("yeep");
    },6000)
}
transitionvideo();
//choix nombres équipae


// nmbr équipe
let numbr_team = 4
let buttonnmr2 = document.querySelector("#j2");
let buttonnmr3 = document.querySelector("#j3");
let buttonnmr4 = document.querySelector("#j4")
// eventlestner
buttonnmr2.addEventListener('click',function transision1() {
        if(numbr_team === 3){
            document.querySelector("#j3").classList.add('joueur3');
            document.querySelector("#j3").classList.remove('joueur3_clicked');
            document.querySelector("#j2").classList.remove('joueur2');
            document.querySelector("#j2").classList.add('joueur2_clicked');
            numbr_team = 2;
        }
        if(numbr_team === 4){
            document.querySelector("#j4").classList.add('joueur4');
            document.querySelector("#j4").classList.remove('joueur4_clicked');
            document.querySelector("#j2").classList.remove('joueur2');
            document.querySelector("#j2").classList.add('joueur2_clicked');
            numbr_team = 2;
        }
});

buttonnmr3.addEventListener('click',function transision1() {
    if(numbr_team === 2){
        document.querySelector("#j2").classList.add('joueur2');
        document.querySelector("#j2").classList.remove('joueur2_clicked');
        document.querySelector("#j3").classList.remove('joueur3');
        document.querySelector("#j3").classList.add('joueur3_clicked');
        numbr_team = 3;
    }
    if(numbr_team === 4){
        document.querySelector("#j4").classList.add('joueur4');
        document.querySelector("#j4").classList.remove('joueur4_clicked');
        document.querySelector("#j3").classList.remove('joueur3');
        document.querySelector("#j3").classList.add('joueur3_clicked');
        numbr_team = 3;
    }
});
buttonnmr4.addEventListener('click',function transision1() {
    if(numbr_team === 3){
        document.querySelector("#j3").classList.add('joueur3');
        document.querySelector("#j3").classList.remove('joueur3_clicked');
        document.querySelector("#j4").classList.remove('joueur4');
        document.querySelector("#j4").classList.add('joueur4_clicked');
        numbr_team = 4;
    }
    if(numbr_team === 2){
        document.querySelector("#j2").classList.add('joueur2');
        document.querySelector("#j2").classList.remove('joueur2_clicked');
        document.querySelector("#j4").classList.remove('joueur4');
        document.querySelector("#j4").classList.add('joueur4_clicked');
        numbr_team = 4;
    }
});

// button commencer
let buttonstart = document.getElementById("start");


buttonstart.addEventListener('click',function transision2() {
    document.getElementById("game_set").style.animation = "quit 1s linear";
    setTimeout(()=> {document.getElementById("game_set").style.display = "none"},1000);
    setTimeout(()=> {document.getElementById("gameboard").style.zIndex = '0'},1000);
});


function transitionvideo() {
    setTimeout(()=> {
        let video = document.getElementById("video");
        video.style.display = "none";
        console.log("yeep");
    },6000)
}


//Récuperer afficher question

class Question {
    constructor(text, choices1,choices2,choices3,choices4, answer, dif) {
        this.text = text;
        this.choices1 = choices1;
        this.choices2 = choices2;
        this.choices3 = choices3;
        this.choices4 = choices4;
        this.answer = answer;
        this.dif = dif;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}
var dif =0
let Questions=[]
let dif1 = []
let dif2 = []
let dif3 = []
let dif4 = []
let dif5 = []
let dif6 = []

async function getAllQuestions(){
    await fetch('/templates/result.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        data.forEach(element => {
            var quest = new Question(element.Intitulé,element["Choix 1"],element["Choix 2"],element["Choix 3"],element["Choix 4"],element.Réponse,element.Difficulté)
            if (element.Difficulté == 1){
                dif1.push(quest)
            }else if (element.Difficulté == 2){
                dif2.push(quest)
            }else if (element.Difficulté == 3){
                dif3.push(quest)
                
            }else if (element.Difficulté == 4){
                dif4.push(quest)
                
            }else if (element.Difficulté == 5){
                dif5.push(quest)
                
            }else if (element.Difficulté == 6){
                dif6.push(quest)
                
            }
            Questions.push(quest)
        });
    }
    )

}

function getQuestion(dif){
    if (dif == 1){
        var random = Math.floor(Math.random() * dif1.length);
        var question = dif1[random]
        
        return question
    }else if (dif == 2){
        var random = Math.floor(Math.random() * dif2.length);
        var question = dif2[random]
        
        return question
    }else if (dif == 3){
        var random = Math.floor(Math.random() * dif3.length);
        var question = dif3[random]
        
        return question
    }else if (dif == 4){
        var random = Math.floor(Math.random() * dif4.length);
        var question = dif4[random]
        
        return question
    }else if (dif == 5){
        var random = Math.floor(Math.random() * dif5.length);
        var question = dif5[random]
        
        return question
    }else if (dif == 6){
        var random = Math.floor(Math.random() * dif6.length);
        var question = dif6[random]
        
        return question
    }
    var random = Math.floor(Math.random() * Questions.length);
    var question = Questions[random]
    if(question.dif == dif){
        return question
    }
    else{
        return getQuestion()
    }
}

function displayQuestion(dif){
    var question = getQuestion(dif)
    document.getElementById("question").innerHTML = question.text
    document.getElementById("choice1").innerHTML = question.choices1
    document.getElementById("choice2").innerHTML = question.choices2
    document.getElementById("choice3").innerHTML = question.choices3
    document.getElementById("choice4").innerHTML = question.choices4
    document.getElementById("choice1").value = question.choices1
    document.getElementById("choice2").value = question.choices2
    document.getElementById("choice3").value = question.choices3
    document.getElementById("choice4").value = question.choices4
}
class Player{
    win = false;
    constructor(x,y,color,id){
        this.x = x;
        this.y = y;
        this.color = color;
        this.id = id;
    }
}
var Players = []
var canvas = document.getElementById("canvas");
/**
 * @type {CanvasRenderingContext2D}
 */
var ctx = canvas.getContext("2d");
var svgImage = new Image();
svgImage.src = "/templates/img/boardgame.png";
svgImage.onload = function() {
    ctx.drawImage(svgImage, 0, 0);
    ctx.strokeStyle = "red";
    ctx.fillRect(250, 250, 100, 100);
    ctx.strokeRect(40, 250, 100, 100);
    ctx.strokeRect(250, 40, 100, 100);
    ctx.strokeRect(460, 250, 100, 100);
    ctx.strokeRect(250, 460, 100, 100);
    ctx.strokeRect(366.7-50, 424.5-50, 100, 100);
    ctx.strokeRect(82.3-50, 366.7-50, 100, 100);
    ctx.strokeRect(133-50, 75.4-50, 100, 100);
    ctx.strokeRect(424.5-50, 133-50, 100, 100);
    for (let i=0;i<numbr_team;i++){
        var player = new Player(250,250,"red",i)
        Players.push(player)
    }
    for (let i=0;i<Players.length;i++){
        ctx.fillStyle = Players[i].color;
        ctx.fillRect(Players[i].x, Players[i].y, 100, 100);
    }
}
