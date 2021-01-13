window.onload = getRouteDetails;

let xhr = false;

function getRouteDetails() {
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		if (window.ActiveXObject) {
				xhr = newActiveXObject("Microsoft.XMLHTTP");
		}
	}
	if (xhr) {
		xhr.open("GET", "data/routes.json", true);
		xhr.send(); 
		xhr.onreadystatechange = displayRouteDetails; 
	} else {
		document.getElementById("statusmessage").innerHTML = "Error. Could not perform the stated request";
	}	
}

function displayRouteDetails () {
	if (xhr.readyState == 4) {
	    if (xhr.status == 200) {
		    const data = JSON.parse(xhr.responseText); 
			let dataText = "";
			const url = $(location).attr("search"); 
            const params = new URLSearchParams(url);
            var currentRouteID = parseInt(params.get("routeID"));
            
            dataText += "<h4>" + data.routes[currentRouteID].name + "</h4>" +
            "<img src='images/" + data.routes[currentRouteID].image + "' class='float-left mb-4' alt='Image of route'>" +
            "<table class='table table-striped'><tbody><tr><th>Start Point:</th><td>" + 
            data.routes[currentRouteID].startLat + " / " + data.routes[currentRouteID].startLng +
            "</td></tr><tr><th>End Point:</th><td>" + 
            data.routes[currentRouteID].endLng + " / " + data.routes[currentRouteID].endLng +
            "</td></tr><tr><th>Day:</th><td>" + 
            data.routes[currentRouteID].day +
            "</td></tr><tr><th>Time:</th><td>" + 
            data.routes[currentRouteID].time +
            "</td></tr><tr><th>Hightlights:</th><td>" + 
            data.routes[currentRouteID].highlights +
            "</td></tr></tbody></table>";
				
			
			document.getElementById("insertpoint2").innerHTML = dataText;
		} else {
		document.getElementById("statusmessage").innerHTML = "Error. Could not perform the stated request Error: " + xhr.status;
		}
	}
}


