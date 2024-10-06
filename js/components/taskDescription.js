async function ChallengeDescription(){
	var challenge = get_params()["challenge"];

	var challengeDescription = await fetch("/js/json/challenges.json").then(response => response.json());

	var parent = document.getElementById("taskDescription");

		var header = document.createElement("div");
		header.className = "page-header";
		header.innerHTML = `<h1>${challengeDescription[challenge]["header"]}</h1>`;

		parent.appendChild(header);

		var lead = document.createElement("p")
		lead.className = "lead";
		lead.innerHTML = challengeDescription[challenge]["lead"];

		parent.appendChild(lead);

		for(description of challengeDescription[challenge]["descriptions"]){
			var desc = document.createElement("p");
			desc.innerHTML = description;

			parent.appendChild(desc);
		}
}

ChallengeDescription();
