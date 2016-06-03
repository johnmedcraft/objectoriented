$(".die").hide();


function printNumber(number) {
  switch(number) {
	  	case 1:
		  	$('.die.one').show();
		  	break;
		 case 2:
		  	$('.die.two').show();
		  	break;
		 case 3:
		  	$('.die.three').show();
		  	break;
		 case 4:
		  	$('.die.four').show();
		  	break;
		 case 5:
		  	$('.die.five').show();
		  	break;
		 case 6:
		  	$('.die.six').show();
		  	break;
		 default:
		 	$('.die').text('Error!'); 	 	 	 	
	  }
}
var button = document.getElementById("button");
button.onclick = function() {
  var result = dice.roll();
  $(".die").hide();
  printNumber(result);
};
var dice = {
	sides: 6,
	roll: function () {
	  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
	  return randomNumber;
	}
}