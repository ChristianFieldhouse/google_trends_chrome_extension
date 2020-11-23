function embed_graph(){
	var title = document.getElementById("firstHeading").innerHTML
	var first_heading = document.getElementById("firstHeading");
	trends.embed.renderExploreWidgetTo(
		first_heading,
		"TIMESERIES",
		{"comparisonItem":[{"keyword":title,"geo":"","time":"today 5-y"}],"category":0,"property":""},
		{"exploreQuery":"date=all&q="+title,"guestPath":"https://trends.google.com:443/trends/embed/"}
	);
}


//{"comparisonItem":[{"keyword":title,"geo":"","time":"2004-01-01 today"}],"category":0,"property":""}, {"exploreQuery":"date=all&q="+title,"guestPath":"https://trends.google.com:443/trends/embed/"}


var button = document.createElement("button");
button.onclick=embed_graph;
button.innerHTML = "Google Trends";
document.getElementById("bodyContent").prepend(button);

