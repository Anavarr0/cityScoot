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
			for (let i in data.routes) {
				if (data.routes[i].routeID === params.get("routeId")) {
					dataText += "<h4>" + data.routes[i].name + "</h4>" +
					"<img src='images/" + data.routes[i].image + "' class='float-left mb-4' alt='Image of Route'>" +
					"<table class='table table-striped'><tbody><tr><th>Start Point:</th><td>" + 
					data.routes[i].start.lat + " / " + data.routes[i].start.lng +
					"</td></tr><tr><th>End Point:</th><td>" + 
                    data.routes[i].end.lat + " / " + data.routes[i].end.lng +
                    "</td></tr></tbody></table>";
					
					
				}
			}
			document.getElementById("insertpoint").innerHTML = dataText;
		} else {
		document.getElementById("statusmessage").innerHTML = "Error. Could not perform the stated request Error: " + xhr.status;
		}
	}
}

