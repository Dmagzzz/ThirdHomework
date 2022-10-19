// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    if (!max) {
        max = min
        min = 0
    }
    const rand = Math.random()
    return Math.floor(min * (1 - rand) + rand * max)
}


function getRandomItem(list) {
    return list[randomInt(list.length)]
}


function generatePassword() {
    console.log("You clicked the Button!")

    const userInput = window.prompt("How many characters would you like your password to be?")

    if (userInput === null)
        return

    const passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
        window.alert("That is not a number")
        return
    }

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length must be between 8 and 128 characters")
        return
    }

    const userWantsNumbers = window.confirm("Would you like to include numbers ?")
    const userWantsSymbols = window.confirm("Would you like to include symbols ?")
    const userWantsLowerCase = window.confirm("Would you like to include lower case letters ?")
    const userWantsUpperCase = window.confirm("Would you like to include lower case letters ?")

    const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]
    const lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const optionsCart = []

    for (var i = 0; i < lowerCaseList.length; i++) {
        upperCaseList[i] = lowerCaseList[i].toUpperCase()
    }

    if (numericCharacters === true) {
        optionsCart.push(numberList)
    }

    if (specialCharacters === true) {
        optionsCart.push(symbolList)
    }
    if (userWantsLowerCase === true) {
        optionsCart.push(lowerCaseList)
    }

    if (userWantsUpperCase === true) {
        optionsCart.push(upperCaseList)
    }

    const generatedPassword = ""

    for (const i = 0; i < passwordLength; i++) {
        const randomList = getRandomItem(optionsCart)
        const randomChar = getRandomItem(randomList)
        generatedPassword += randomChar
    }

    return generatedPassword

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    if (password) {
        passwordText.value = password;
    }
}
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword); 


