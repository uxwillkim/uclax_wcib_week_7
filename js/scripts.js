jQuery(function() {

$('.block').hide().fadeIn(1250);

	$('#button').click(function(){

		//set var 'src' to point to #image-box element and find attribute for first available src value
		let src = $('#image-box').attr('src');
		//if the current image is force.png, change it to dark.png
		if (src == 'images/force.png') {
			$('.block').hide().fadeIn(1250);
			$('#image-box').attr('src','images/dark.png');
			$('#forcetitle').text('The Dark Side');
			$('p').text('Individuals who used the dark side drew their power from more intense, raw and darker emotions such as fear, anger, hatred, passion, and aggression. The dark side of the Force was so-named because it was secretive. Yoda taught that the dark side of the Force was not stronger than the light side of the Force but rather merely quicker, easier, more seductive.');
			$('#button').text('Next: Show Me The Light >');
			//if the current image is dark.png, change it to light.png
		}else if(src == 'images/dark.png') {
			$('.block').hide().fadeIn(1250);
			$('#image-box').attr('src','images/light.png');
			$('#forcetitle').text('The Light Side');
			$('p').text('This light side of the Force was built around the alignment of tranquility, compassion, selflessness, and unconditional love for all living creatures. In order to achieve harmony and a state of benevolence, its practitioners, namely Jedi, would meditate and let the Force flow through them. The light side of the Force was primarily used for defensive abilities as opposed to aggressive ones.');
			$('#button').text('Back To: What Is The Force? >');
			//if the current image is light.png, change it to force.png
		}else if(src == 'images/light.png') {
			$('.block').hide().fadeIn(1250);
			$('#image-box').attr('src','images/force.png');
			$('#forcetitle').text('What Is The Force?');
			$('p').text('The Force is a mysterious energy field created by life that binds the galaxy together. Harnessing the power of the Force gives the Jedi, the Sith, and others sensitive to this spiritual energy extraordinary abilities, such as levitating objects, tricking minds, and seeing things before they happen. While the Force can grant users powerful abilities, it also directs their actions.');
			$('#button').text('Next: Take Me To The Dark Side >');
		}
	});
});
