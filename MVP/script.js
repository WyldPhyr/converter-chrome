document.addEventListener('DOMContentLoaded', function () { //call function with button
      document.getElementById("calculate").addEventListener('click', calc);      
});
function calc() { //take text inside text box and calculate
	var num_cel = document.getElementById("celsius").value;
	var num_fahr = celsiusToFahrenheit(num_cel);
	var text_fahr = num_fahr + " degrees Fahrenheit";
	document.getElementById("f").innerHTML = text_fahr;
}
function celsiusToFahrenheit(celsius) { //method used for calculating celcius from farenheit
	var fahrenheit = (1.8*celsius)+32;
	return fahrenheit;
}
document.addEventListener('DOMContentLoaded', function () { //call function for convert with button
      document.getElementById("convert").addEventListener('click', convertPage);    
});
function convertPage() {
	//somehow convert page to string
	var page_string = 'apple banana 5 celsius 3 6 8'; //GET PAGE TEXT
	var page_array = page_string.split(" ");
	var ar_length = page_array.length();
	var i = 0;
	while (i<ar_length) { //loop to find celciuses
		var current_string = page_array[i];
		if (current_string == "celsius") { //if celcius found
			var num_at = i-1;
			var num = page_array[num_at];
			var fah = celsiusToFahrenheit(num); //convert to f
			page_array[i] = "Fahrenheit";
			page_array[num_at] = fah; //put it in array
		}
		i+=1;
	}
	var new_page_string = page_array.join(" "); //put the array back into a string
	window.alert(new_page_string); //not working
}
