function submit() {
	var flag = document.getElementById("flag").value;
	if (flag === "ssl{DEADBEEF}") {
		document.getElementById("status").innerHTML = "Success!";
		document.getElementById("result").style.visibility = "visible";
	} else {
		document.getElementById("status").innerHTML = "Incorrect";
	}
}
