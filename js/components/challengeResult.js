var parent = document.getElementById("challengeResult");

	var resultTable = document.createElement("table");
	resultTable.id = "result"
	resultTable.style = "visibility=hidden"
		var row = document.createElement("tr");
			var statusIndicator = document.createElement("td");
			statusIndicator.innerHTML = "<h1 id='status'></h1>"

			var formLink = document.createElement("td");
			formLink.id = "link";

				var googleForm = document.createElement("a");
				googleForm.href = "https://docs.google.com/forms/d/e/1FAIpQLSe2U40kd2YZ1z-lAdet2ltbJ9bmWXi3YtVB7yn4RoGj66pP7w/viewform"
				googleForm.innerHTML = "Record your Progress"

				formLink.appendChild(googleForm);

			row.appendChild(statusIndicator);
			row.appendChild(formLink);

		resultTable.appendChild(row);
parent.appendChild(resultTable);