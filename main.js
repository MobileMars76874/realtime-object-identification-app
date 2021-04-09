function preload(){
}

function setup(){
canvas = createCanvas(275, 275);
canvas.position(540, 330);

Video = createCapture(VIDEO);
Video.hide();
}

function draw(){
image(Video, 0, 0, 275, 275);
classifier.classify(Video, gopose);
}

console.log("ml5 version is: "+ ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zjj367ePj/model.json", model_loaded ,);

function model_loaded(){
console.log("Model Loaded!");
}


function gopose(error, results){
if(error){
console.log("error");
}
else{
console.log("results");
document.getElementById("OJ").innerHTML = results[0].label;
document.getElementById("AR").innerHTML = results[0].confidence;
}
}




 