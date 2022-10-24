function embed_graph(){
	var url_path = window.location.href.split("/");
	var title = url_path[url_path.length - 1].replace("_", " ");
	var first_heading = document.getElementById("firstHeading");
	
	trends.embed.renderExploreWidgetTo(
		first_heading,
		"TIMESERIES",
		{"comparisonItem":[{"keyword":title,"geo":"","time":"today 5-y"}],"category":0,"property":""},
		{"exploreQuery":"date=today%205-y&q="+title,"guestPath":"https://trends.google.com:443/trends/embed/"}
	);
}

var button = document.createElement("button");
button.onclick=embed_graph;
button.innerHTML = "Google Trends";
document.getElementById("bodyContent").prepend(button);

