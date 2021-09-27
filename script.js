var userInput = document.querySelector(".user-input");
var btn = document.querySelector("#btn-translate");
var output = document.querySelector(".output");
var url = "	https://api.funtranslations.com/translate/morse.json?text="


btn.addEventListener("click", function(){
    fetchTranslation(userInput.value);
});

function fetchTranslation(userInput){
    fetch(url+userInput)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        output.innerText = json.contents.translated;
    })
    .catch((error) => {
        console.log("error occured: "+error);
    });

}