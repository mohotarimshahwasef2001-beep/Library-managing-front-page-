function showMembercard(Name, Age, Email, Phone, Membership){
	
	let Welcome = [
		"Welcome " + Name
	];
	console.log("Welcome");

	document.getElementById("output").innerHTML =
		"<h2> Student Information</h2>" +
		"Name : " + Name + "<br>" +
		"Age : " + Age + "<br>" +
		"Email : " + Email + "<br>" +
		"Phone number  : " + Phone + "<br>" +
		"Membership Type : " + Membership + "<br>" +
		"Status : " + (Age >= 13 ? "regular " : "Junior") + "<br><br>" + 
		Welcome.join("<br>");
}

document.addEventListener("submit", function(event){
	event.preventDefault(); 
	
	let Name = document.getElementById("Name").value;
	let Age = document.getElementById("Age").value;
	let Email = document.getElementById("Email").value;
	let Phone = document.getElementById("Phone").value;
	
	let Membership = document.querySelector('input[name="Membership"]:checked').value;

	showMembercard(
		Name,
		Age,
		Email,
		Phone,
		Membership
	);
});