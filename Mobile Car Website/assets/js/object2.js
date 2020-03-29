const xhr = new XMLHttpRequest(),
      url = "assets/js/car.json";
  
  xhr.onreadystatechange = function() {
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
      const menuItems = JSON.parse( xhr.responseText );
	  // menuItems now holds the objects parsed from the JSON file. You will need to iterate over this and build a template html
	  listTemplate(menuItems);
    }
  };
  xhr.open( "GET", url, true );
  xhr.send();
  
  // Good place to put that function that will generate the template html
	var myData = "";
    var myRow = localStorage.getItem("ID");
    
	function listTemplate(items) {
  	//beginning    
	  
		myData += "<ul><img src='assets/img/" + items[myRow].pic + ".png' alt='Car Image'></img>";
		myData += "<li>Car ID number: " + items[myRow].id + "</li>";
		myData += "<li>Car brand: " + items[myRow].brand + "</li>";
		myData += "<li>Car model: " + items[myRow].model + "</li>";
	  	myData += "<li>Body style: " + items[myRow].body + "</li>";
	  	myData += "<li>Horsepower: " + items[myRow].horsepower + "</li>";
	  	myData += "<li>Cylinders: " + items[myRow].cylinders + "</li>";
	  	myData += "<li>Weight: " + items[myRow].weight + "</li>";
	  	myData += "<li>Quick description: " + items[myRow].description + "</li></ul></br>";
  	
	document.getElementById("listMenu").innerHTML = myData;
}

//Function for relocating to a different page (for index.html)  
function goto(){
	location.href = "menu.html"
}

function goback(){
	location.href = "menu.html"
}

//Function for Loading data from JSON based on the image clicked
function gotoNextPage(){
	location.href = "details.html"
}