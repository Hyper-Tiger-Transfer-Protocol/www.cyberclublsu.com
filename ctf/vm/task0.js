function submit() {
	var flag = document.getElementById("flag").value;
	if (flag === "ssl{DEADBEEF}") {
		document.getElementById("status").innerHTML = "Success!";
		document.getElementById("result").style.visibility = "visible";
		document.getElementById("link").style.visibility = "visible";
	} else {
		document.getElementById("status").innerHTML = "Incorrect";
		document.getElementById("result").style.visibility = "visible";
		document.getElementById("link").style.visibility = "hidden";
	}
}
