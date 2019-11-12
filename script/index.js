const START_HP = 20;
const START_SP = 10;
class Fighter {
  constructor(name, charaName) {
    //'contructor' is in all JS classes
    // It gets run immediately when a new object is created from a class

    // Set all of our deafult values for this new fighter here
    this.name = name;
    this.hp = 20;
    this.sp = 10;
    this.atk = 5;
    this.def = 5;
    this.tek = 5;
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
