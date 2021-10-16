function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/cX1cMpp_E/model.json",modelReady);   
}

function modelReady() {
    classifier.classify(gotResults);
}