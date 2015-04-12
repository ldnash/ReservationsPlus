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
			
			
			// set light progress bar and text
			var darkPercentage = (1-lite/255) * 100
			var newLightWidth = "width:"+ darkPercentage + "%";
			$("#light-progress-inner").attr("style", newLightWidth);
			
			if(darkPercentage > 50){
				$("#light-title").html('Evening Darkness: <b>Dark</b>');
			}
			else{
				$("#light-title").html('Evening Darkness: <b>Bright</b>');
			}
			
			
			// set sound progress bar and text
			var soundPercentage = sound/3 + 100
			var newSoundWidth = "width:"+ soundPercentage + "%";
			$("#sound-progress-inner").attr("style", newSoundWidth);
			
			if(sound = 0){
				$("#sound-title").html('Noise Level: <b>Very Low</b>');
			}
			if(sound = 1){
				$("#sound-title").html('Noise Level: <b>Low</b>');
			}
			if(sound = 2){
				$("#sound-title").html('Noise Level: <b>Medium</b>');
			}
			if(sound = 3){
				$("#sound-title").html('Noise Level: <b>High</b>');
			}

			// set highway distance progress bar and text
			var distPercentage = distanceness/25 * 100
			var newDistWidth = "width:"+ distPercentage + "%";
			$("#distance-progress-inner").attr("style", newDistWidth);
			
			if(distanceness < 1){
				$("#distance-title").html('Distance from Highway: <b>Less than 1 mile</b>');
			}
			if(distanceness > 25){
				$("#distance-title").html('Distance from Highway: <b>More than 25 miles</b>');
			}
			if(distanceness > 25 && distanceness < 1){
				$("#distance-title").html('Distance from Highway: <b>' + distanceness + ' miles</b>');
			}			
			
			
			
		});
		
	

}
	
	
	