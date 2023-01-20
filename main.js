Webcam.attach(camera);
camera=document.getElementById("camera");
 Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
 function ci(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="img1" src="'+data_uri+'"/>';
    } ); 
 }
 console.log("ml5version is",ml5.version);
 x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bBSIOQtFB/model.json',modelloaded);
 function modelloaded(){
    console.log("Model is loaded");
 }
 function ii(){
    y=document.getElementById("img1");
    x.classify(y,answer);
 }
 function answer(error,result){
if(error){
console.log(error);
}
else{
    console.log(result);
    document.getElementById("obj").innerHTML=result[0].label;
    document.getElementById("acc").innerHTML=Math.floor(result[0].confidence*100)+"%" ;
}
 }
