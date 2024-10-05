var parent = document.getElementById("footer");

var footer = document.createElement("footer");
footer.className = "container";

	var hr = document.createElement("hr");
	hr.className = "soften";

	var copyright = document.createElement("p");
	copyright.innerHTML = "&copy;";

		var year = document.createElement("span");
		year.innerHTML = "2024";
		year.innerHTML = new Date().getFullYear();

	copyright.appendChild(year);

	var github = document.createElement("p");
	github.className = "text-center";

		var gitLink = document.createElement("a");
		gitLink.href = "https://github.com/Hyper-Tiger-Transfer-Protocol";
		gitLink.innerHTML = "GitHub";

	github.appendChild(gitLink);

footer.appendChild(hr);
footer.appendChild(copyright);
footer.appendChild(github);

parent.appendChild(footer);
