//jshint esversion: 7

let rollDie = () => {
  return Math.floor (Math.random() * 6) +1;
}

let controller = () => {
  let target, die1, die2, rollCount = 0,
  die1URL, die2URL, imgElem1, cheeryMsg;

  target = document.querySelector("input").value;
  console.log(target);

  do {
    die1 = rollDie();
    die2 = rollDie();

    console.log(``);
  }
while (die1 + die2 != target);

die1URL = `images/die${die1}.gif`;
imgElem1 = document.querySelector("img");
imgElem1.setAttribute("src", die1URL);


imgElem2 = document.querySelectorAll("img");

cheeryMsg= `You hit your number in ${rollCount} roll ${(rollCount == 1)? "":"s"}!`;
document.querySelector("div").innerHTML = cheeryMsg;

}


window.addEventListener("load", () => {
  let button = document.querySelector("button");

  button.addEventListener("click", controller);
});
