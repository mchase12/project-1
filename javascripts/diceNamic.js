//jshint esversion: 7
/ jshint esversion: 7


let rollDie = () => {
return Math.floor(Math.random() * 6) + 1;
}

let controller = () => {
  let target, die1, die2, rollCount = 0,
  die1URL, die2URL, imgElem1;

  target = document.querySelector("input").value;
  console.log(target);

  do {
    die1 = rollDie();
    die2 = rollDie();

console.log(``)
  } while (die1 + die2 != target);

  die1URL = `image/die${die1}.gif`;
  console.log(die1URL);
  imgElem1 = document.querySelector("#imgElem1");
  imgElem1.setAttribute("src", die1URL);


  die2URL = `image/die${die2}.gif`;
  console.log(die2URL);
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);
}

window.addEventListener("load",() => {
  let button = document.querySelector("button");
  button.addEventListener("click", controller);
});
