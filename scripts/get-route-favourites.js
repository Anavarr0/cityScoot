window.onload = getFavoriteroutes;

let xhr = false;

function getFavoriteroutes() {
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
		xhr.onreadystatechange = displayFavoriteRoutes; 
	} else {
		document.getElementById("statusmessage").innerHTML = "Error. Could not perform the stated request";
	}	
}

function displayFavoriteRoutes () {
	if (xhr.readyState == 4) {
	    if (xhr.status == 200) {
		    const data = JSON.parse(xhr.responseText); 
			let dataText = "";
			const favorites = getLocalStorage();
			for (let l = 0; l < favorites.length; l++){
				for (let i in data.routes) {
					if (parseInt(favorites[l]) === parseInt(data.routes[i].routeID)){
					dataText += "<tr><td class='text-left'><h5 class='mr-4'>" + 
					data.routes[i].name + "</h5></td><td>" +
					"<a href='route.html?routeID=" + data.routes[i].routeID + "' class='btn btn-sm btn-primary mr-4'>Details</a>" + 
					"</td><td>" + "<i class='fa fa-trash fa-2x' aria-hidden='true'></i>" + 
					"</td></tr>";
					}
				}
			}
			document.getElementById("insertpoint4").innerHTML = dataText;
		} else {
		document.getElementById("statusmessage").innerHTML = "Error. Could not perform the stated request Error: " + xhr.status;
		}
	}
}

function getLocalStorage() {
	let routeFavorites = JSON.parse(window.localStorage.getItem('routes'));
	return routeFavorites;
}
