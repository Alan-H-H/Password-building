const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordbtnEl = document.getElementById("password-btn")
let passwordEl = document.getElementById("password") 
let passwordTwoEl = document.getElementById("password-two") 

function passwordreset(){
document.getElementById("password").value = "";
}

function passwordGen(){
let randomCharacter = (Math.floor(Math.random(characters) * characters.length))
let randomCharacter1 = (Math.floor(Math.random(characters) * characters.length))
let randomCharacter2 = (Math.floor(Math.random(characters) * characters.length))
let randomCharacter3 = (Math.floor(Math.random(characters) * characters.length))
let randomCharacter4 = (Math.floor(Math.random(characters) * characters.length))
let randomCharacter5 = (Math.floor(Math.random(characters) * characters.length))
let randomCharacter6 = (Math.floor(Math.random(characters) * characters.length))
let randomCharacter7 = (Math.floor(Math.random(characters) * characters.length))
let randomCharacter8 = (Math.floor(Math.random(characters) * characters.length))
let randomCharacter9 = (Math.floor(Math.random(characters) * characters.length))


passwordEl.textContent = characters[randomCharacter] + characters[randomCharacter1] + characters[randomCharacter2] + characters[randomCharacter3] + characters[randomCharacter4] + characters[randomCharacter5] + characters[randomCharacter6] + characters[randomCharacter7] + characters[randomCharacter8] + characters[randomCharacter9]

let randomIndex = (Math.floor(Math.random(characters) * characters.length))
let randomIndex1 = (Math.floor(Math.random(characters) * characters.length))
let randomIndex2 = (Math.floor(Math.random(characters) * characters.length))
let randomIndex3 = (Math.floor(Math.random(characters) * characters.length))
let randomIndex4 = (Math.floor(Math.random(characters) * characters.length))
let randomIndex5 = (Math.floor(Math.random(characters) * characters.length))
let randomindex6 = (Math.floor(Math.random(characters) * characters.length))
let randomIndex7 = (Math.floor(Math.random(characters) * characters.length))
let randomIndex8 = (Math.floor(Math.random(characters) * characters.length))
let randomIndex9 = (Math.floor(Math.random(characters) * characters.length))

passwordTwoEl.textContent = characters[randomIndex] + characters[randomIndex1] + characters[randomIndex2] + characters[randomIndex3] + characters[randomCharacter4] + characters[randomIndex5] + characters[randomindex6] + characters[randomIndex7] + characters[randomIndex8] + characters[randomIndex9]
}







