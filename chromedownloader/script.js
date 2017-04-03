function main(){
	var extensionID = document.getElementById('ccCallbox').value;
	$('a#ccCallbutton').attr({target: '_blank', 
                    href  : '//clients2.google.com/service/update2/crx?response=redirect&prodversion=49.0&x=id%3D'+extensionID+'%26installsource%3Dondemand%26uc'});
}
