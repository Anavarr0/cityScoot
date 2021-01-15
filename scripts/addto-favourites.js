let addToFavsBtn = document.getElementById("addtofavorites");
addToFavsBtn.onclick = function() {
	const url = $(location).attr("search"); 
	const params = new URLSearchParams(url);
	const routeId = params.get("routeID");
	let routes;
	if (localStorage.getItem("routes") === null) {
		routes = [];
	} else {
		routes = JSON.parse(localStorage.getItem("routes"));
	}
	routes.push(routeId);
	localStorage.setItem('routes', JSON.stringify(routes));
}	
