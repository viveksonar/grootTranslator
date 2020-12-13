var btnTranslate = document.querySelector("#btn-translate")
var getInput = document.querySelector("#text-input")
var outputDiv = document.querySelector("#output")

var apiURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text){
    return apiURL + "?" +"text=" + text 
}

function errorHandler(error){
    console.log(error);
    alert("Something went wrong with the server")
}

function clickEventHandler(){
    var inputText = getInput.value
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then((json) =>{
        var tranlatedText = json.contents.translated;
        outputDiv.innerText = tranlatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler)