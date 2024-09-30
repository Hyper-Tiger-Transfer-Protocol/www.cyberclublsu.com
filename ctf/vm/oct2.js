function submit() {
	var flag = document.getElementById("flag").value;
	if (flag === "ssl{8b01d358}") {
		document.getElementById("status").innerHTML = "Success!";
	} else {
		document.getElementById("status").innerHTML = "Incorrect";
	}
}
