async function Terminal(){
	var challenge = get_params()["challenge"];

	var challengeDescription = await fetch("/js/json/challenges.json").then(response => response.json());

	if(challengeDescription[challenge]["hasTerminal"]){
		var parent = document.getElementById("vm");
			var virtual = document.createElement("div");
			virtual.id = "virt";

				var terminal = document.createElement("iframe");
				terminal.src = `/pages/ctf/vm/vm.html?url=${challenge}.cfg`
				terminal.innerHTML = "Incompatible Browser D:";

			virtual.appendChild(terminal);
		parent.appendChild(virtual);
	}
}

Terminal();