
var parent = document.getElementById("header");

var nav = document.createElement("nav");
nav.className = "navbar navbar-inverse navbar-fixed-top";

	var inner = document.createElement("div");
	inner.className = "navbar-inner";

		var container = document.createElement("div");
		container.className = "container";

			var button = document.createElement("button");
			button.className = "btn btn-navbar";
			button.type = "button";
			button.setAttribute("data-toggle", "collapse");
			button.setAttribute("data-target", ".nav-collapse");

			var a = document.createElement("a");
			a.className = "brand";
			a.href = "/";
			a.innerHTML = "Security Society at LSU";

			var collapse = document.createElement("div");
			collapse.className = "nav-collapse collapse";

				var list = document.createElement("ul");
				list.className = "nav";

					var about = document.createElement("li");
					var aboutLink = document.createElement("a");
					aboutLink.href = "/pages/about/";
					aboutLink.innerHTML = "<span>About</span>"
					about.appendChild(aboutLink);

					var ctf = document.createElement("li");
					var ctfLink = document.createElement("a");
					ctfLink.href = "/pages/ctf/";
					ctfLink.innerHTML = "<span>Challenges</span>"
					ctf.appendChild(ctfLink);

				list.appendChild(about);
				list.appendChild(ctf);

			collapse.appendChild(list);

		container.appendChild(button);
		container.appendChild(a);
		container.appendChild(collapse);

	inner.appendChild(container);

nav.appendChild(inner);

parent.appendChild(nav);