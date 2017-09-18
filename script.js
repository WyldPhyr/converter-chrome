document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('button').addEventListener('click', calc);      
});
function calc() {
	var num_cel = document.getElementById("celsius").value;
	var num_fahr = celsius_to_fahrenheit(num_cel)
	var text_fahr = num_fahr + " degrees Fahrenheit";
	document.getElementById("f").innerHTML = text_fahr;
}
function celsius_to_fahrenheit(celsius) {
	var fahrenheit = (1.8*celsius)+32;
	return fahrenheit;
}