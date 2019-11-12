const START_HP = 20;
const START_SP = 10;
const DEFAULT_ATK = 5;
const DEFAULT_DEF = 5;
const DEFAULT_TEK = 5;

const P0NAME = "Crash"
const P0ID = "crashr"
const P1NAME = "Sam"
const P1ID = "saml"

let playerTurn = false;
let logging = true;

let Player0;
let Player1;

class Fighter {
  constructor(name, charaID) {
    //'contructor' is in all JS classes
    // It gets run immediately when a new object is created from a class

    // Set all of our default values for this new fighter here
    this.name = name;
    this.hp = START_HP;
    this.sp = START_SP;
    this.atk = DEFAULT_ATK;
    this.def = DEFAULT_DEF;
    this.tek = DEFAULT_TEK;
    this.charaID = charaID;
  }
  attack(target) {
    console.log(this.name + " attacked " + target.name)
  }
  single(target) {
    this.attack(target);
  }
  double(target) {
    this.attack(target);
    this.attack(target);
  }
  recover() {
    console.log("Recovered!")
  }
}


//  Creates a character img element based on given id
function setPlayerIMG(charaID) {
  //  Creates an img element
  let playerIMG = document.createElement("img");
  //  adds the id attribute
  playerIMG.setAttribute("id", charaID);
  //  adds the class attribute
  playerIMG.setAttribute("class", "fighterIMG");
  //  adds the alt attribute
  playerIMG.setAttribute("alt", charaID);
  //  adds the src attribute
  playerIMG.setAttribute("src", "img/" + charaID + "_idle.png");
  //  returns the html element that was created
  return playerIMG;
}

function startup() {
  Player0 = new Fighter(P0NAME, P0ID);
  Player1 = new Fighter(P1NAME, P1ID);

  document.getElementById("graphicsBox").appendChild(setPlayerIMG(Player0.charaID))
  document.getElementById("graphicsBox").appendChild(setPlayerIMG(Player1.charaID))

  console.log("My name is " + Player0.name + " and my ATK is " + Player0.atk)
  console.log("My name is " + Player1.name + " and my ATK is " + Player1.atk)
}