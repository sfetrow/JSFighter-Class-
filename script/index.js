const START_HP = 20;
const START_SP = 10;
const DEFAULT_ATK = 5;
const DEFAULT_DEF = 5;
const DEFAULT_TEK = 5;

//sets constants names
const P0NAME = 'Crash'
const P0CHARA = 'crashr'
const P1NAME = 'Sam'
const P1CHARA = 'saml'
let playerTurn = false;
let logging = true;
let Player0;
let Player1;

//varible for finding % of players HP used for the HealthBar
let player0PercentHP;
let player1PercentHP;
let player0PercentSP;
let player1PercentSP;

// declared variables for the boxes
let gameBox;
let headerBox;
let graphicsBox;
let barsBox;
let controlsBox;
let outputBox;

class Fighter {

  constructor(name, charaName) {
    //'contructor' is in all JS classes
    // It gets run immediately when a new object is created from a class
    // Set all of our default values for this new fighter here
    this.name = name;
    this.hp = START_HP;
    this.sp = START_SP;
    this.atk = DEFAULT_ATK;
    this.def = DEFAULT_DEF;
    this.tek = DEFAULT_TEK;
    this.charaName = charaName;
  }

  //this logs who attacked who
  attack(target) {
    let damageDone = Math.floor(Math.random() * 5) + 1;
    console.log(koCheck(target, damageDone));
    console.log(this.name + ' attacked ' + target.name + ' doing ' + damageDone + ' points of damage!');
    console.log(target.name + ' has ' + target.hp + ' hp points left!');
  }

  single(target) {
    this.attack(target);
    endTurn();
  }

  double(target) {
    this.attack(target);
    this.attack(target);
  }

  //this logs that they recovered
  recover(target) {
    let healthHealed = Math.floor(Math.random() * 5) + 1; //Sets healthHealed to a random number between 1 & 5
    if (((target.hp < START_HP) && (target.sp > 0)))  {//If targets stats aren't too low or too high
      target.hp = target.hp + healthHealed; //Heals
      target.sp = target.sp - 15; //Depletes SP
      console.log(target.name + ' Recovered ' + healthHealed + ' health'); //Logs
      endTurn(); //Ends the turn
    } else {
      return; //Does Nothing
    }
  }




}

function startup() {
  Player0 = new Fighter(P0NAME, P0CHARA);
  Player1 = new Fighter(P1NAME, P1CHARA);
  //this makes a shortcut for 'document.getElementById'
  gameBox = document.getElementById('gameBox');
  headerBox = document.getElementById('headerBox');
  graphicsBox = document.getElementById('graphicsBox');
  barsBox = document.getElementById('barsBox');
  controlsBox = document.getElementById('controlsBox');
  outputBox = document.getElementById('outputBox');
  //this shows the fighter images in the graphics box
  graphicsBox.innerHTML = '<img id ="' + Player0.charaName + '" src="img/' + Player0.charaName + '_idle.png" alt="' + Player0.name + '" class="fighterIMG">'
  graphicsBox.innerHTML += '<img id ="' + Player1.charaName + '" src="img/' + Player1.charaName + '_idle.png" alt="' + Player1.name + '" class="fighterIMG">'
  console.log("My name is " + Player0.name + " and my ATK is " + Player0.atk)
  console.log("My name is " + Player1.name + " and my ATK is " + Player1.atk)
  showControls() //runs the showControls() function
  updateBars() //runs the updateBars() function
}

function showControls() {
  //checks to see which players turn it is and show the apropriate controls
  if (playerTurn) {
    //show buttons for player1 and overwrites player0's controls
    controlsBox.innerHTML = '<button type="button" name="attack" onclick="Player1.single(Player0)">Single Attack!</button>'
    controlsBox.innerHTML += '<button type="button" name="recover" onclick="Player1.recover(Player1)">Recover!</button>'
  } else {
    //show buttons for player0 and overwrites player1's controls
    controlsBox.innerHTML = '<button type="button" name="attack" onclick="Player0.single(Player1)">Single Attack!</button>'
    controlsBox.innerHTML += '<button type="button" name="recover" onclick="Player0.recover(Player0)">Recover!</button>'
  }
}

//checks the target's HP is less than or equal to 0, Then retuns true or false.
function koCheck(target, amount) {
  target.hp = target.hp - amount;
  if (target.hp <= 0) {
    hideControls();
    return true;
  } else {
    return false;
  }
}

function updateBars() {
  //calculates the percent of HP
  player0PercentHP = (Player0.hp / START_HP) * 100
  player1PercentHP = (Player1.hp / START_HP) * 100
  player0PercentSP = (Player0.sp / START_SP) * 100
  player1PercentSP = (Player1.sp / START_SP) * 100

  //Makes sure Player0's health is not greater than 100% or less than 0%
  if (player0PercentHP <= 0) {
    player0PercentHP = 0
  } else if (player0PercentHP > 100) {
    player0PercentHP = 100
  } else {
    player0PercentHP = player0PercentHP
  }

  //Makes sure Player1's health is not greater than 100% or less than 0%
  if (player1PercentHP <= 0) {
    player1PercentHP = 0
  } else if (player1PercentHP > 100) {
    player1PercentHP = 100
  } else {
    player1PercentHP = player1PercentHP
  }

  //Makes sure Player0's SP is not greater than 100% or less than 0%
  if (player0PercentSP <= 0) {
    player0PercentSP = 0
  } else if (player0PercentSP > 100) {
    player0PercentSP = 100
  } else {
    player0PercentSP = player0PercentSP
  }

  //Makes sure Player1's SP is not greater than 100% or less than 0%
  if (player1PercentSP <= 0) {
    player1PercentSP = 0
  } else if (player1PercentSP > 100) {
    player1PercentSP = 100
  } else {
    player1PercentSP = player1PercentSP
  }

  barsBox.innerHTML = ''
  barsBox.innerHTML += 'P0<div class="hpBar"><div style="height: 100%; width:' + player0PercentHP + '%;" id="p0HPfill" class="HPfill"></div></div>'
  barsBox.innerHTML += '<div class="spBar"><div style="height: 100%; width:' + player0PercentSP + '%;" id="p0SPfill" class="SPfill"></div></div>'
  barsBox.innerHTML += 'P1<div class="hpBar"><div style="height: 100%; width:' + player1PercentHP + '%;" id="p1HPfill" class="HPfill"></div></div>'
  barsBox.innerHTML += '<div class="spBar"><div style="height: 100%; width:' + player1PercentSP + '%;" id="p1SPfill" class="SPfill"></div></div>'
}

// EndTurn code
function endTurn() {
  updateBars(); //Updates Bars
  Player0.sp = Player0.sp + (Math.floor(Math.random() * 2) + 1); //Adds 1 to 2 SP per turn to Player0
  Player1.sp = Player1.sp + (Math.floor(Math.random() * 2) + 1); //Adds 1 to 2 SP per turn to Player1
  playerTurn = !playerTurn
  if (koCheck(Player0, 0) || koCheck(Player1, 0)){
    hideControls();
  }else{
    showControls();
  }
}

function hideControls() {
  controlsBox.innerHTML = "";
}

/*
MHW = 'delicious'
MHWoutput > MHWinput
*/
