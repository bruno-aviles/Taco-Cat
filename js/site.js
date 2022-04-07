// get user input
function getValues(){
    document.getElementById("displayBox").classList.add("invisible");
    
    let userText = document.getElementById("userInput").value;
    let onlyText = removeSpecialCharacters(userText);

    verifyInput(onlyText);
}

// remove any special characters
function removeSpecialCharacters(text){
    let lettersOnly = "";
    for(i = 0;i < text.length; i++){
        // special characters
        let specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]/;

        if(specialChar.test(text[i]) == true) {
            lettersOnly += "";
        } else {
            lettersOnly += text[i];
        }
    }
    return lettersOnly;
}

// verify if word, phrase, sequence is a palindrome
function verifyInput(validate){
    let reverse = "";
    // arrange the text reading backwards
    for(i = (validate.length - 1); i >= 0; i--){
        reverse += validate[i];
    }
    
    if(validate == reverse){
        alertDisplay.innerHTML = "Success!";
        msgDisplay.innerHTML = "Your Palindrome is:";
        resultDisplay.innerHTML = `${validate} = ${reverse}`;
    
        displayBox.classList.remove("invisible");
    } else {
        alertDisplay.innerHTML = "Sorry...";
        msgDisplay.innerHTML = "Your Input Is Not A Palindrome";
        resultDisplay.innerHTML = `${validate} = ${reverse}`;

        displayBox.classList.remove("invisible");
    }
}