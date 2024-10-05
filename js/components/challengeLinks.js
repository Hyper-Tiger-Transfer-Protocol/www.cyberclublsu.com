var parent = document.getElementById("challengeLinks");

var list = document.createElement("ul");
list.id = "links";

	// Halloween Tasks
	var day1 = document.createElement("li");
	day1.className = "halloween";
	var day1Link = document.createElement("a");
	day1Link.href = "/pages/ctf/oct1/";
	day1Link.innerHTML = "2024-10-01 | Halloween Day 1 - Lost Flag"
	day1.appendChild(day1Link);

	var day2 = document.createElement("li");
	day2.className = "halloween";
	var day2Link = document.createElement("a");
	day2Link.href = "/pages/ctf/oct2/";
	day2Link.innerHTML = "2024-10-02 | Halloween Day 2 - Backup Fail"
	day2.appendChild(day2Link);

	var day3 = document.createElement("li");
	day3.className = "halloween";
	var day3Link = document.createElement("a");
	day3Link.href = "/pages/ctf/oct3/";
	day3Link.innerHTML = "2024-10-03 | Halloween Day 3 - Badly Lost Flag"
	day3.appendChild(day3Link);

	var day4 = document.createElement("li");
	day4.className = "halloween";
	var day4Link = document.createElement("a");
	day4Link.href = "/pages/ctf/oct4/";
	day4Link.innerHTML = "2024-10-04 | Halloween Day 4 - Ransomware!"
	day4.appendChild(day4Link);

	//Intro Tasks
	var task0 = document.createElement("li");
	task0.className = "intro";
	var task0Link = document.createElement("a");
	task0Link.href = "/pages/ctf/task0/";
	task0Link.innerHTML = "2024-09-26 | Task 0 - Find the Flag"
	task0.appendChild(task0Link);

// Halloween Tasks
list.appendChild(day4);
list.appendChild(day3);
list.appendChild(day2);
list.appendChild(day1);

//Intro Tasks
list.appendChild(task0);

//Final Append
parent.appendChild(list);
