(function () {
    
    

	const firebaseConfig = {
        apiKey: "AIzaSyCuKVE1xZC8PWo8Art0vg_C88Kmn7KnXGs",
        authDomain: "cityscoot-730a1.firebaseapp.com",
        databaseURL: "https://cityscoot-730a1-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "cityscoot-730a1",
        storageBucket: "cityscoot-730a1.appspot.com",
        messagingSenderId: "978196230659",
        appId: "1:978196230659:web:ee19b9ffe48ca3f1a3d436"
        
  };
  //try admin.initializeApp
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
	
    const guidesRef = firebase.database().ref().child("guides");
	
	guidesRef.orderByChild("age").on("child_added", snap => {
    
    let guideName = snap.child("name").val();    
	let guideAge = snap.child("age").val();
	let guideOccupation = snap.child("occupation").val();
	let guideBlueBadge = snap.child("blueBadge").val();
	let guideTours = snap.child("tours").val();

	$("#insertpoint3").append(
    "<tr><td>" + guideName + "</td>"+
    "<td>" + guideAge + "</td>" +
	"<td>" + guideOccupation + "</td>" +
    "<td>" + guideBlueBadge + "</td></tr>"+
    "<td>" + guideTours + "</td></tr>");
   
    });
    
	
}());