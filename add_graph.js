function embed_graph(){
	var title = document.getElementById("firstHeading").innerHTML
	trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"sierra leone","geo":"","time":"today 5-y"}],"category":0,"property":""}, {"exploreQuery":"date=today%205-y&q=sierra%20leone","guestPath":"https://trends.google.com:443/trends/embed/"});
}
var button = document.createElement("button");
button.onclick=embed_graph;
button.innerHTML = "Trends";
document.body.appendChild(button);


trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"sierra leone","geo":"","time":"today 5-y"}],"category":0,"property":""}, {"exploreQuery":"date=today%205-y&q=sierra%20leone","guestPath":"https://trends.google.com:443/trends/embed/"});
