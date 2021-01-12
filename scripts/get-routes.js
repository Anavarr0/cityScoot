
window.onload = getRoutes;

let xhr = false;

function getRoutes() {
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} 
	if (xhr) {
		xhr.open("GET", "data/routes.json", true);
		xhr.send(); 
		xhr.onreadystatechange = displayRoutes; 
	} else {
		document.getElementById("statusmessage").innerHTML = 
		"Error. Could not perform the stated request";
	}	
}

function displayRoutes() {
	if (xhr.readyState == 4) {
	    if (xhr.status == 200) {
		    const data = JSON.parse(xhr.responseText); 
			let dataText = "";
			for (let i in data.routes) { {
					dataText += "<tr><td><strong>" + 
					data.routes[i].name + "</strong></td><td class='text-center'>" +
					data.routes[i].day + "</td><td>" +
					data.routes[i].time + "</td><td class='text-center'>" +
					data.routes[i].highlights + "</td><td>" +
					"<a href='" + data.routes[i].name.replace(/\s/g, '-').toLowerCase()  + ".html' class='btn btn-outline-secondary'>Details</a>" + 
					"</td></tr>";
				}  
			}
		
			if (dataText.length < 1) {
					document.getElementById("datatable").style.display = "none";
					document.getElementById("trailwarning").style.display = "none";
					document.getElementById("statusmessage").style.display = "block";
					document.getElementById("statusmessage").innerHTML = "No Trails Found";	
			}
			document.getElementById("insertpoint").innerHTML = dataText;
		} else {
		document.getElementById("statusmessage").innerHTML = "Error. Could not perform the stated request Error: " + xhr.status;
		}
	}
}


           
	
