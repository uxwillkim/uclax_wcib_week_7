jQuery(document).ready(function($){

	$('#button').click(function(){

		//set var 'src' to point to #image-box element and find attribute for first available src value
		let src = $('#image-box).attr('src');
		//if the current image is force.png, change it to dark.png
		if (src == 'force.png')
		$('#image-box').attr('src','/images/dark.png');
		//if the current image is dark.png, change it to light.png
	}else if(src == 'dark.png') {
		$('#image-box').attr('src','/images/light.png');
		//if the current image is light.png, change it to force.png
	}else if(src == 'light.png') {
		$('#image-box').attr('src','/images/force.png');
});
