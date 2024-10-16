async function Hints(){
	var challenge = get_params()["challenge"];

	var hintList = await fetch("/js/json/hints.json").then(response => response.json());
	hintList = hintList[challenge];
	var parent = document.getElementById("hints");

	for(var i = 1; i <= hintList.length; i++){
		var hoverDiv = document.createElement("div");
		hoverDiv.className = "mouseover";

			var hintTable = document.createElement("table");
					var row = document.createElement("tr");
						var head = document.createElement("td");
						head.innerHTML = `Hint ${i}`;

						var hint = document.createElement("td");
						hint.className = "content";
						hint.innerHTML = hintList[i-1];

						row.appendChild(head);
						row.appendChild(hint);

					hintTable.appendChild(row);

			hoverDiv.appendChild(hintTable);
			parent.appendChild(hoverDiv);
	}
}

Hints();

