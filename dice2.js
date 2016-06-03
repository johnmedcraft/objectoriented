function Dice(sides){
	this.sides = sides;
	this.roll = diceRoll;
}
Dice.prototype.roll = function(){
	var randomNumber = Math.floor(Math.random() + this.sides) + 1;
	return randomNumber;
}
var dice6 = new Dice(6);
var dice10 = new Dice(10);