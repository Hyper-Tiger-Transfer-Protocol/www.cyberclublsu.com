function submit() {
	var flag = document.getElementById("flag").value;
	if (flag === "ssl{2a55ed2a}") {
		document.getElementById("status").innerHTML = "Success!";
	} else {
		document.getElementById("status").innerHTML = "Incorrect";
	}
}
