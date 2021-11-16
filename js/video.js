var video = document.querySelector('#player1');
var volumeforslider;


window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

 document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volumeforslider = document.querySelector('#slider').value;
	volume.innerHTML = (volumeforslider + '%');
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
 });

 document.querySelector('#slower').addEventListener('click', function(){
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
 });

 document.querySelector('#faster').addEventListener('click', function(){
	video.playbackRate *= 1.05;
	console.log("New speed is " + video.playbackRate);
 });

document.querySelector('#mute').addEventListener('click', function(){
	if (video.muted==true){
		video.muted=false;
		document.getElementById('mute').innerHTML = 'Mute';
		console.log('Video unmuted');
	}
	else{

		video.muted=true;
		document.getElementById('mute').innerHTML = 'Unmute';
		console.log('Video muted')
	}
	
});

document.querySelector('#skip').addEventListener('click', function(){
	if(video.currentTime < video.duration - 15){
		video.currentTime += 15;
	}
	else{
		video.currentTime=0;
		console.log(' Start of Video');
	}
	console.log(video.duration);
	console.log('Current viewing location' + video.currentTime);
	video.play();
});

document.querySelector('#vintage').addEventListener('click', function(){
	console.log('Old School')
	video.classList.add('oldSchool')
});

document.querySelector('#orig').addEventListener('click', function(){
	console.log('Original');
	video.classList.remove('oldSchool')
});

document.querySelector('#slider').addEventListener('click', function(){
	var volumeforslider = document.querySelector('#slider').value;
	video.volume = volumeforslider/100;
	volume.innerHTML = (volumeforslider + '%');
	console.log(video.volume);
});








