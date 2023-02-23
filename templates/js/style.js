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
getAllQuestions()
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
    /**
     * @type {Question}
     */
    var question = getQuestion(dif)
    console.log(question)
    document.getElementById("question").hidden = false
    document.getElementById("question_text").innerText = question.text
    document.getElementById("choix1").innerText = question.choices1
    document.getElementById("choix2").innerText = question.choices2
    document.getElementById("choix3").innerText = question.choices3
    document.getElementById("choix4").innerText = question.choices4
    if (question.choices1 == undefined){
        document.getElementById("choix1").innerText = ""
    }
    if (question.choices2 == undefined){
        document.getElementById("choix2").innerText = ""
    }
    if (question.choices3 == undefined){
        document.getElementById("choix3").innerText = ""
    }
    if (question.choices4 == undefined){
        document.getElementById("choix4").innerText = ""
    }
    document.getElementById("choix1").value = question.choices1
    document.getElementById("choix2").value = question.choices2
    document.getElementById("choix3").value = question.choices3
    document.getElementById("choix4").value = question.choices4
    document.getElementById("choix1").onclick = function(){if (question.isCorrectAnswer(question.choices1)){document.getElementById("question").hidden = true;document.getElementById("difficulte").hidden=false} }
    document.getElementById("choix2").onclick = function(){if (question.isCorrectAnswer(question.choices2)){document.getElementById("question").hidden = true;document.getElementById("difficulte").hidden=false}}
    document.getElementById("choix3").onclick = function(){if (question.isCorrectAnswer(question.choices3)){document.getElementById("question").hidden = true;document.getElementById("difficulte").hidden=false}}
    document.getElementById("choix4").onclick = function(){if (question.isCorrectAnswer(question.choices4)){document.getElementById("question").hidden = true;document.getElementById("difficulte").hidden=false}}
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
//position
const widthimg = 556;
const heightimg = widthimg*(500/556);
const centre = {x:0,y:0};
departrouge = 29;
departvert = 13;
departjaune = 21;
departbleu = 5;
arrivebleu = 0;
arriverouge = 24;
arrivejaune = 16;
arrivevert = 8;
// Definir les position par raport à la taille de l'image et 
var positioncercle = [
    {x : centre.x + (485 / 556 * widthimg), y : centre.y + (244 / 500 * heightimg)},
    {x : centre.x + (482 / 556 * widthimg), y : centre.y + (286 / 500 * heightimg)},
    {x : centre.x + (472 / 556 * widthimg), y : centre.y + (320 / 500 * heightimg)},
    {x : centre.x + (453 / 556 * widthimg), y : centre.y + (355 / 500 * heightimg)},
    {x : centre.x + (427 / 556 * widthimg), y : centre.y + (389 / 500 * heightimg)},
    {x : centre.x + (394 / 556 * widthimg), y : centre.y + (415 / 500 * heightimg)},
    {x : centre.x + (357 / 556 * widthimg), y : centre.y + (436 / 500 * heightimg)},
    {x : centre.x + (320 / 556 * widthimg), y : centre.y + (448 / 500 * heightimg)},
    {x : centre.x + (279 / 556 * widthimg), y : centre.y + (451 / 500 * heightimg)},
    {x : centre.x + (237 / 556 * widthimg), y : centre.y + (446 / 500 * heightimg)},
    {x : centre.x + (196 / 556 * widthimg), y : centre.y + (435 / 500 * heightimg)},
    {x : centre.x + (160 / 556 * widthimg), y : centre.y + (414 / 500 * heightimg)},
    {x : centre.x + (128 / 556 * widthimg), y : centre.y + (386 / 500 * heightimg)},
    {x : centre.x + (102 / 556 * widthimg), y : centre.y + (355 / 500 * heightimg)},
    {x : centre.x + (84 / 556 * widthimg), y : centre.y + (319 / 500 * heightimg)},
    {x : centre.x + (73 / 556 * widthimg), y : centre.y + (284 / 500 * heightimg)},
    {x : centre.x + (69 / 556 * widthimg), y : centre.y + (242 / 500 * heightimg)},
    {x : centre.x + (73 / 556 * widthimg), y : centre.y + (201 / 500 * heightimg)},
    {x : centre.x + (84 / 556 * widthimg), y : centre.y + (163 / 500 * heightimg)},
    {x : centre.x + (102 / 556 * widthimg), y : centre.y + (130 / 500 * heightimg)},
    {x : centre.x + (127 / 556 * widthimg), y : centre.y + (97 / 500 * heightimg)},
    {x : centre.x + (159 / 556 * widthimg), y : centre.y + (71 / 500 * heightimg)},
    {x : centre.x + (197 / 556 * widthimg), y : centre.y + (51 / 500 * heightimg)},
    {x : centre.x + (235 / 556 * widthimg), y : centre.y + (37 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (32 / 500 * heightimg)},
    {x : centre.x + (318 / 556 * widthimg), y : centre.y + (37 / 500 * heightimg)},
    {x : centre.x + (355 / 556 * widthimg), y : centre.y + (48 / 500 * heightimg)},
    {x : centre.x + (395 / 556 * widthimg), y : centre.y + (72 / 500 * heightimg)},
    {x : centre.x + (428 / 556 * widthimg), y : centre.y + (97 / 500 * heightimg)},
    {x : centre.x + (451 / 556 * widthimg), y : centre.y + (127 / 500 * heightimg)},
    {x : centre.x + (470 / 556 * widthimg), y : centre.y + (161 / 500 * heightimg)},
    {x : centre.x + (483 / 556 * widthimg), y : centre.y + (200 / 500 * heightimg)},
];
var positionarrbleu = [
    {x : centre.x + (453 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (427 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (399 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (372 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (346 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (319 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (296 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
];
var positionarrjaune = [
    {x : centre.x + (104 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (131 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (157 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (184 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (211 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (238 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
    {x : centre.x + (262 / 556 * widthimg), y : centre.y + (243 / 500 * heightimg)},
];
var positionarrrouge = [
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (68 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (95 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (122 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (148 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (175 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (201 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (226 / 500 * heightimg)},
];
var positionarrvert = [
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (417 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (391 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (363 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (337 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (311 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (284 / 500 * heightimg)},
    {x : centre.x + (278 / 556 * widthimg), y : centre.y + (257 / 500 * heightimg)},
];
const MovePlayerCase = (id,nbrCase)=>{
    /**
     * @type {Player}
     */
    var player = Players.find(x => x.id == id);
    //What is the angle that need to be added to the current angle to move the player to the next base around a circle of 210 radius. Every base is at equal distance from each other.There is 32 bases in total.
    var curx = player.x;
    var cury = player.y;
    
    

}
var difficulcontainer = document.getElementById("difficulte");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");
var d6 = document.getElementById("d6");
var difficulte = 0;
//Add event listener to the buttons to change the difficulty
d1.addEventListener("click",()=>{
    difficulte = 1
    difficulcontainer.hidden = true
    displayQuestion(difficulte)
    difficulte = 0
}
)
d2.addEventListener("click",()=>{
    difficulte = 2
    difficulcontainer.hidden = true
    displayQuestion(difficulte)
    difficulte=0
}
)
d3.addEventListener("click",()=>{
    difficulte = 3
    difficulcontainer.hidden = true
    displayQuestion(difficulte)
    difficulte=0
}
)
d4.addEventListener("click",()=>{
    difficulte = 4
    difficulcontainer.hidden = true
    displayQuestion(difficulte)
    difficulte=0
}
)
d5.addEventListener("click",()=>{
    difficulte = 5
    difficulcontainer.hidden = true
    displayQuestion(difficulte)
    difficulte=0
}
)
d6.addEventListener("click",()=>{
    difficulte = 6
    difficulcontainer.hidden = true
    displayQuestion(difficulte)
    difficulte=0
}
)
