let CurrentPlayer = 1
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
class Player{
    win = false;
    atend = false;
    step = 0;
    constructor(x,y,color,id,width,height,image){
        this.x = x;
        this.y = y;
        this.color = color;
        this.id = id;
        this.width = width
        this.height=height
        this.image = image
    }
    Update(x,y,step,atend){
        this.x = x
        this.y = y;
this.step += step;
this.atend = atend;
    }
    
}
var Players = []
const centerX = 250;
const centerY = 250;
//position
const widthimg = 556;
const heightimg = widthimg*(500/556);
const centre = {x:0,y:0};
let departrouge = 29;
let departvert = 13;
let departjaune = 21;
let departbleu = 5;
arrivebleu = 0;
arriverouge = 24;
arrivejaune = 16;
arrivevert = 8;
// Set the radius of the circle
const radius = 210;

// Set the starting angle
let angle = 0;
var canvas = document.getElementById("canvas");
var ctx = undefined;
let svgImage = undefined;
let Player1img = new Image();
Player1img.src = "/templates/img/Piont 1.svg";
let Player2img = new Image();
Player2img.src = "/templates/img/Piont 2.svg";
let Player3img = new Image();
Player3img.src = "/templates/img/Piont 3.svg";
let Player4img = new Image();
Player4img.src = "/templates/img/Piont 4.svg";

const PrintPlayers = ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(svgImage, 0, 0);
    for (let i=0;i<Players.length;i++){
        console.log(Players[i].x, Players[i].y)
        ctx.fillStyle = Players[i].color;
        //ctx.fillRect(Players[i].x-Players[i].width/2, Players[i].y-Players[i].height/2, Players[i].width,Players[i].height);
        if (Players[i].id==1){
        ctx.drawImage(Player1img, Players[i].x-Players[i].width/2, Players[i].y-Players[i].height/2, Players[i].width,Players[i].height);
        }else if (Players[i].id==2){
            ctx.drawImage(Player2img, Players[i].x-Players[i].width/2, Players[i].y-Players[i].height/2, Players[i].width,Players[i].height);
        }else if (Players[i].id==3){
            ctx.drawImage(Player3img, Players[i].x-Players[i].width/2, Players[i].y-Players[i].height/2, Players[i].width,Players[i].height);
        }else if (Players[i].id==4){
            ctx.drawImage(Player4img, Players[i].x-Players[i].width/2, Players[i].y-Players[i].height/2, Players[i].width,Players[i].height);
        }
    }
}
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
const StartGame= ()=>{
    
/**
 * @type {CanvasRenderingContext2D}
 */
ctx = canvas.getContext("2d");
svgImage = new Image();
svgImage.src = "/templates/img/boardgame.png";


// Definir les position par raport à la taille de l'image et 

const InitPLayer = ()=>{
    var x = positioncercle[departbleu].x;
    var y = positioncercle[departbleu].y;
    if (NbrPlayer>=2){
        
        Players.push(new Player(x,y, "blue", 1,50,50,0.975));
    //ctx.strokeRect(82.3-50, 366.7-50, 100, 100);
        x = positioncercle[departvert].x;
        y = positioncercle[departvert].y;
        Players.push(new Player(x,y, "green", 2,50,50,2.535));
    }
    if (NbrPlayer>=3){
        x = positioncercle[departjaune].x;
        y = positioncercle[departjaune].y;
        Players.push(new Player(x,y, "yellow", 3,50,50,4.095));
    }
    if (NbrPlayer==4){
        x = positioncercle[departrouge].x;
        y = positioncercle[departrouge].y;
        Players.push(new Player(x,y, "red", 4,50,50,5.655));
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
    var curx = player.x;
    var cury = player.y;
    for (let i = 0; i < positioncercle.length; i++) {
        console.log(positioncercle[i].x,positioncercle[i].y,curx,cury)
        if (positioncercle[i].x == curx && positioncercle[i].y == cury) {
            if (i + nbrCase > positioncercle.length-1) {
                var nextpos = positioncercle[(i + nbrCase) - positioncercle.length];
            } else{

                var nextpos = positioncercle[(i + nbrCase)];
            }
            if (player.step+nbrCase>=27){
                if (player.atend == false){
                    console.log(player.atend)
                    nbrCase = player.step+nbrCase-27;
                    if (player.color == "blue"){
                        nextpos = positionarrbleu[0]
                    }else if (player.color == "green"){
                        nextpos = positionarrvert[0]
                    }else if (player.color == "yellow"){
                        nextpos = positionarrjaune[0]
                    }else if (player.color == "red"){
                        nextpos = positionarrrouge[0]
                    }
                    player.atend = true;
                }
            }
            console.log(nextpos)
            player.x = nextpos.x;
            player.y = nextpos.y;
            break;
        }
    }
    if (player.atend == true){
        if (player.color == "blue"){
            if (player.step+nbrCase>=27){
                if (player.step+nbrCase-27<positionarrbleu.length){
                    nextpos = positionarrbleu[player.step+nbrCase-27]
                }else{
                    nbrCase=0
                }
            }
        }else if (player.color == "green"){
            if (player.step+nbrCase>=27){
                if (player.step+nbrCase-27<positionarrvert.length){
                    nextpos = positionarrvert[player.step+nbrCase-27]
                }else{
                    nbrCase=0
                }
            }
        }else if (player.color == "yellow"){
            if (player.step+nbrCase>=27){
                if (player.step+nbrCase-27<positionarrjaune.length){
                    nextpos = positionarrjaune[player.step+nbrCase-27]
                }else{
                    nbrCase=0
                }
            }
        }else if (player.color == "red"){
            if (player.step+nbrCase>=27){
                if (player.step+nbrCase-27<positionarrrouge.length){
                    nextpos = positionarrrouge[player.step+nbrCase-27]
                }else{
                    nbrCase=0
                }
            }
        }
        if (player.step+nbrCase-27==positionarrbleu.length-1){
            player.win = true;
        }
        player.x = nextpos.x;
        player.y = nextpos.y;
    }
    
    player.Update(player.x,player.y,nbrCase,player.atend);
    CurrentPlayer = player.id+1;
    if (CurrentPlayer>NbrPlayer){
        CurrentPlayer = 1;
    }
    for (let i = 0; i < Players.length; i++) {
        if (Players[i].id != player.id && Players[i].x === player.x && Players[i].y === player.y){
            if (Players[i].color === "blue"){
                console.log(player.color,Players[i].color)
                console.log(Players[i].x,Players[i].y,player.x,player.y)
                Players[i].x = positioncercle[departbleu].x;
                Players[i].y = positioncercle[departbleu].y;
                Players[i].step = 0;
                Players[i].atend = false;
                Players[i].Update( positioncercle[departjaune].x,Players[i].y = positioncercle[departjaune].y,-1,false)
                console.log(Players[i].x,Players[i].y,player.x,player.y)
            }else if (Players[i].color === "green"){
                console.log(player.color,Players[i].color)
                console.log(Players[i].x,Players[i].y,player.x,player.y)
                Players[i].x = positioncercle[departvert].x;
                Players[i].y = positioncercle[departvert].y;
                Players[i].step = 0;
                Players[i].atend = false;
                Players[i].Update( positioncercle[departjaune].x,Players[i].y = positioncercle[departjaune].y,-1,false)
                console.log(Players[i].x,Players[i].y,player.x,player.y)
            }else if (Players[i].color === "yellow"){
                console.log(player.color,Players[i].color)
                console.log(Players[i].x,Players[i].y,player.x,player.y)
                Players[i].x = positioncercle[departjaune].x;
                Players[i].y = positioncercle[departjaune].y;
                Players[i].step = 0;
                Players[i].atend = false;
                Players[i].Update( positioncercle[departjaune].x,Players[i].y = positioncercle[departjaune].y,-1,false)
                console.log(Players[i].x,Players[i].y,player.x,player.y)
            }else if (Players[i].color === "red"){
                console.log(player.color,Players[i].color)
                console.log(Players[i].x,Players[i].y,player.x,player.y)
                Players[i].x = positioncercle[departrouge].x;
                Players[i].y = positioncercle[departrouge].y;
                Players[i].step = 0;
                Players[i].atend = false;
                Players[i].Update( positioncercle[departjaune].x,Players[i].y = positioncercle[departjaune].y,-1,false)
                console.log(Players[i].x,Players[i].y,player.x,player.y)
            }
        }
    }
    PrintPlayers();
    

}
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
const GoodAnswer = (question,dif,choice) => {
    if (question.isCorrectAnswer(choice)){
        document.getElementById("question").hidden = true;
        document.getElementById("modal").style.display = "none"
        setTimeout(()=>{document.getElementById("modal").style.display = "flex";document.getElementById("difficulte").style.display="flex";document.getElementById("diff").innerText="Player "+CurrentPlayer},5000)
        //document.getElementById("difficulte").style.display="flex"
        MovePlayerCase(CurrentPlayer,dif)
    }else{
        document.getElementById("question").hidden = true;
        document.getElementById("difficulte").style.display="flex"
        CurrentPlayer = CurrentPlayer+1
        if (CurrentPlayer>NbrPlayer){
            CurrentPlayer = 1;
        }
        document.getElementById("diff").innerText="Player "+CurrentPlayer
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
    document.getElementById("choix1").onclick =function(){GoodAnswer(question,dif,question.choices1)}
    document.getElementById("choix2").onclick =function(){GoodAnswer(question,dif,question.choices2)}
    document.getElementById("choix3").onclick =function(){GoodAnswer(question,dif,question.choices3)}
    document.getElementById("choix4").onclick =function(){GoodAnswer(question,dif,question.choices4)}
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
    difficulcontainer.style.display = "none"
    displayQuestion(difficulte)
    difficulte = 0
}
)
d2.addEventListener("click",()=>{
    difficulte = 2
    difficulcontainer.style.display = "none"
    displayQuestion(difficulte)
    difficulte=0
}
)
d3.addEventListener("click",()=>{
    difficulte = 3
    difficulcontainer.style.display = "none"
    displayQuestion(difficulte)
    difficulte=0
}
)
d4.addEventListener("click",()=>{
    difficulte = 4
    difficulcontainer.style.display = "none"
    displayQuestion(difficulte)
    difficulte=0
}
)
d5.addEventListener("click",()=>{
    difficulte = 5
    difficulcontainer.style.display = "none"
    displayQuestion(difficulte)
    difficulte=0
}
)
d6.addEventListener("click",()=>{
    difficulte = 6
    difficulcontainer.style.display = "none"
    displayQuestion(difficulte)
    difficulte=0
}
)
