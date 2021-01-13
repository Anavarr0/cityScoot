let addToFavsBtn = document.getElementById("addtofavorites");
addToFavsBtn.onclick = function() {
	const url = $(location).attr("search"); 
	const params = new URLSearchParams(url);
	const routelId = params.get("routelId");
	let routes;
	if (localStorage.getItem("routes") === null) {
		routes = [];
	} else {
		routes = JSON.parse(localStorage.getItem("routes"));
	}
	routes.push(routelId);
	localStorage.setItem('routes', JSON.stringify(routes));
}