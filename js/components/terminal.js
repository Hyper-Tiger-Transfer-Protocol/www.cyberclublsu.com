var challenge = get_params()["challenge"];

var parent = document.getElementById("virt");

	var terminal = document.createElement("iframe");
	terminal.src = `/pages/ctf/vm/vm.html?url=${challenge}.cfg`
	terminal.innerHTML = "Incompatible Browser D:";

parent.appendChild(terminal);