const START_HP = 20;
const START_SP = 10;
const START_ATK = 5;
const START_DEF = 5;
const START_TEK = 5;

class Fighter {
  constructor(name, charaName) {
    //'contructor' is in all JS classes
    // It gets run immediately when a new object is created from a class

    // Set all of our deafult values for this new fighter here
    this.name = name;
    this.hp = START_HP;
    this.sp = START_SP;
    this.atk = START_ATK;
    this.def = START_DEF;
    this.tek = START_TEK;
    this.charaName = charaName;
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


let Player0;
let Player1;

function startup() {
  Player0 = new Fighter("Crash", "crashr");
  Player1 = new Fighter("Sam", "saml");

  console.log("My name is " + Player0.name + " and my ATK is " + Player0.atk)
  console.log("My name is " + Player1.name + " and my ATK is " + Player1.atk)
}








/*
MHW = 'delicious'
MHWoutput > MHWinput
*/
