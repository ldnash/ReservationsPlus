var lite;
var sound;
var distanceness;

function init(){

console.log('viz fired');
	
	
	// open json
	$.getJSON("stats/mather.json",function(data){
			lite = data[0].Lux;
			sound = data[0].SoundLvl;
			distanceness = data[0].Miles;
			console.log(lite);
		});
		
	// find facility

	// find stat we care about

	// turn that stat into a thing to display

	// turn that stat into a text label

	// turn that text label into a thing to display
	
	}