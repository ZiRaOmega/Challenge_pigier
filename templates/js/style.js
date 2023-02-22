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

async function getAllQuestions(){
    await fetch('/templates/result.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            Questions.push(new Question(element.Intitule,element.Choix1,element["Choix 2"],element["Choix 3"],element["Choix 4"],element.Reponse,element.Difficulte))
        });
    }
    )

}

function getQuestion(){
    var random = Math.floor(Math.random() * Questions.length);
    var question = Questions[random]
    if(question.dif == dif){
        return question
    }
    else{
        return getQuestion()
    }
}

function displayQuestion(){
    var question = getQuestion()
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