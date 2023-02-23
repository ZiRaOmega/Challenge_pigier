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

var NbrPlayer=0
buttonstart.addEventListener('click',function transision2() {
    document.getElementById("game_set").style.animation = "quit 1s linear";
    setTimeout(()=> {document.getElementById("game_set").style.display = "none"},1000);
    setTimeout(()=> {document.getElementById("gameboard").style.zIndex = '0'},1000);
    NbrPlayer = numbr_team
    StartGame()
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
    angle = 0;
    constructor(x,y,color,id,width,height,angle){
        this.x = x-width/2;
        this.y = y-height/2;
        this.color = color;
        this.id = id;
        this.width = width
        this.height=height
        this.angle = angle
    }
    moveOnCircle(centerX, centerY, radius, angle) {
        this.x = centerX + Math.cos(angle) * radius - this.width / 2;
        this.y = centerY + Math.sin(angle) * radius - this.height / 2;
      }
}
var Players = []
const centerX = 250;
const centerY = 250;

// Set the radius of the circle
const radius = 210;

// Set the starting angle
let angle = 0;
var canvas = document.getElementById("canvas");
var ctx = undefined;
let svgImage = undefined;
const PrintPlayers = ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(svgImage, 0, 0);
    for (let i=0;i<Players.length;i++){
        ctx.fillStyle = Players[i].color;
        ctx.fillRect(Players[i].x, Players[i].y, Players[i].width,Players[i].height);
    }
}
const StartGame= ()=>{
    
/**
 * @type {CanvasRenderingContext2D}
 */
ctx = canvas.getContext("2d");
svgImage = new Image();
svgImage.src = "/templates/img/boardgame.png";

const InitPLayer = ()=>{
    if (NbrPlayer>=2){
        Players.push(new Player(366.7, 424.5, "blue", 1,35,35,0.975));
    //ctx.strokeRect(82.3-50, 366.7-50, 100, 100);
        Players.push(new Player(75.4, 366.7, "green", 2,35,35,2.535));
    }
    if (NbrPlayer>=3){

        Players.push(new Player(133, 75.4, "yellow", 3,35,35,4.095));
    }
    if (NbrPlayer==4){

        Players.push(new Player(424.5, 133, "red", 4,35,35,5.655));
    }
    PrintPlayers();
}
svgImage.onload = function() {
   InitPLayer();
  
}


}
const MovePlayerCase = (id,nbrCase)=>{
    /**
     * @type {Player}
     */
    var player = Players.find(x => x.id == id);
    //What is the angle that need to be added to the current angle to move the player to the next base around a circle of 210 radius. Every base is at equal distance from each other.There is 32 bases in total.
    player.angle+=0.195*(nbrCase);
    console.log(player.angle,player.color)
    player.moveOnCircle(centerX, centerY, radius, player.angle);

}