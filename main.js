//https://teachablemachine.withgoogle.com/models/gsdz7Uuel/
Webcam.set({
    width:450,
    height:350,
    image_format : 'jpeg',
    jpeg_quality:90,
    crop_width:400,
    crop_height: 300
})

camera = document.getElementById("camera");

Webcam.attach('#camera')

function capture(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id"captured_image" src="'+data_uri+'"/>';
  });

}


console.log('ml5 version:'+ml5.version)
classifier =ml5.imageClassifier("https:teachablemachine.withgoogle.com/models/gsdz7Uuel/model.json",modelLoaded);
function modelLoaded(){
    console.log('model loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" +prediction_1
    speak_data_2 = "And the second prediction is" +prediction_2
   var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2) 
   synth.speak(utterThis);
}


//