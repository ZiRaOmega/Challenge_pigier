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