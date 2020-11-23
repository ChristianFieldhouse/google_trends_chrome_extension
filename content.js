
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var inject_graph = function() { 
	loadScript(chrome.runtime.getURL("add_graph.js"));
}
loadScript("https://ssl.gstatic.com/trends_nrtr/2402_RC03/embed_loader.js", inject_graph);


//var title = document.getElementById("firstHeading").innerHTML
//var mybox = document.getElementsByClassName("infobox vcard")[0];

