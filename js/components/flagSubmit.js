
var parent = document.getElementById("flagSubmit");

	var submitField = document.createElement("textarea");
	submitField.id = "flag";
	submitField.placeholder = "Type flag here";
	parent.appendChild(submitField);

	var submitButton = document.createElement("button");
	submitButton.setAttribute("onclick", "submit()");
	submitButton.innerHTML = "Submit";
	parent.appendChild(submitButton);

	var backHome = document.createElement("h4");
	backHome.innerHTML = "<a href='/'>Back to Home</a>";
	parent.appendChild(backHome);


async function submit() {
	const flags = await fetch("/js/json/flags.json").then(response => response.json());

	var challenge = get_params()["challenge"];

	const answer = flags[challenge];

	var flag = document.getElementById("flag").value;
	if (flag == answer) {
		document.getElementById("status").innerHTML = "Success!";
		document.getElementById("result").style.visibility = "visible";
		document.getElementById("link").style.visibility = "visible";
	} else {
		document.getElementById("status").innerHTML = "Incorrect";
		document.getElementById("result").style.visibility = "visible";
		document.getElementById("link").style.visibility = "hidden";
	}
}