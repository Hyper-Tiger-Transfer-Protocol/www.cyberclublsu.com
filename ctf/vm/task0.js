function submit() {
	var flag = document.getElementById("flag").value;
	if (flag === "ssl{DEADBEEF}") {
		document.getElementById("status").innerHTML = "Success!";
	} else {
		document.getElementById("status").innerHTML = "Incorrect";
	}
}
