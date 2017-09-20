document.addEventListener('DOMContentLoaded', function () {
      document.getElementById("calculate").addEventListener('click', calc);      
});
function calc() {
	var num_cel = document.getElementById("celsius").value;
	var num_fahr = celsiusToFahrenheit(num_cel);
	var text_fahr = num_fahr + " degrees Fahrenheit";
	document.getElementById("f").innerHTML = text_fahr;
}
function celsiusToFahrenheit(celsius) {
	var fahrenheit = (1.8*celsius)+32;
	return fahrenheit;
}
document.addEventListener('DOMContentLoaded', function () {
      document.getElementById("calculate").addEventListener('click', convertPage);    
});
function convertPage() {
	//somehow convert page to string
	var page_string = 'apple banana 5 celsius 3 6 8'; //GET PAGE TEXT
	var page_array = page_string.split(" ");
	var ar_length = page_array.length();
	var i = 0;
	while (i<ar_length) {
		var current_string = page_array[i];
		if (current_string == "celsius") {
			var num_at = i-1;
			var num = page_array[num_at];
			var fah = celsiusToFahrenheit(num);
			page_array[i] = "Fahrenheit";
			page_array[num_at] = fah;
		}
		i+=1;
	}
	var new_page_string = page_array.join(" ");
	window.alert(new_page_string); //not working
}
