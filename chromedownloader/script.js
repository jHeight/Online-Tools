ccCallbutton.addEventListener("click", downloader)
ccCallbutton.onclick = function()downloader

function downloader() {
	var chromeCode = document.getElementByID("ccCallbox").value; // Calls for Script
	var returnSite = "https://clients2.google.com/service/update2/crx?response=redirect&prodversion=49.0&x=id%3D" + chromeCode + "%26installsource%3Dondemand%26uc"; //Defines Site

	window.open(returnSite) // Downloads Extension
}


// All rights reserved.
// A Serum INC Project
// Copyright (C) 2017 jHeight INC
