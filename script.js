function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  var cytaty = [
    "flopa dobry flopa mana flopa sana",
    "flopa super",
    "flopa pala pa pa la pa",
    "flopa myje mopa",
    "flopa sopa lopa"
  ]
var button = document.querySelector(".button");
console.log(button);
var h2 = document.querySelector(".h2");
console.log(h2);     
button.onclick = function(){
    h2.innerHTML = cytaty[getRandomInt(cytaty.length)]
}
