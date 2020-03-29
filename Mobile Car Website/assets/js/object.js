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
	var myRow = "";
	function listTemplate(items) {
  	//beginning    
	  for(myRow in items) {
		myData += "<ul><a href = 'details.html'><img src='assets/img/" + items[myRow].pic + ".png' alt='Car Image' onclick=(localStorage.setItem('ID',"+items[myRow].id+"))></img></a>";
		myData += "<li>Car brand: " + items[myRow].brand + "</li></ul>";
  	}  	//end of list  
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