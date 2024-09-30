function submit() {
	var flag = document.getElementById("flag").value;
	if (flag === "ssl{5eea915f}") {
		document.getElementById("status").innerHTML = "Success!";
	} else {
		document.getElementById("status").innerHTML = "Incorrect";
	}
}
