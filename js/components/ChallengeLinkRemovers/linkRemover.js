function Remover(className){
	var list = document.getElementById("links");

	var links = list.children;

	for(let i = 0; i < links.length;){
		var link = links[i];
		if(link.className == className){
			list.removeChild(link);
			continue;
		}
		i++;
	}
}