function main() {
	var chromeCode = document.getElementByID("ccCallbox").value; // Calls for Script
	var fSite = "https://clients2.google.com/service/update/crx?response=redirecr&prodversion=49.0&x=id%3d" + chromeCode + "%26installsource%3Dondemand%26uc"; //Defines Site

	window.open(fsite) // Downloads Extension
}


// All rights reserved.
// A Serum INC Project
// Copyright (C) 2017 jHeight INC
