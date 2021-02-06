console.log("DONUTS 4 DRAGONS!")

// DONUTS 4 DRAGONS TOMAGOTCHI 

// 1. As a user, I should be able to start a tomagotchi game 
// 2. As a user, I should be able to feed the night fury donuts
// 3. As a user, I should be shown updates in health level at top of screen 
// via setInterval Method everytime the night fury needs, food, water, play or sleep/or receives it
// 4. As a user, I should be able to water the night fury
// 5. As a user, I should be able to play with the night fury
// 6. As a user, I should be able to put the night fury to bed
// 7. As a user, I should not be able to continue playing the game if night fury goes hungry as he will scorch me
// 7. As a user, I should be alerted when night fury has scorched me due to hunger/neglect i.e game over


// Tomagotchi
// If he doesnt play, he gets bored and if constantly bored feels neglected - blow fire
// If he doesn't eat, he blows fire and burns you
// If he doesn't sleep, he will get cranky and may blow fire
// if he doesn't drink water he will blow fire and burn you
// if fed, watered, well-rested and played with = happy dragon 

// need more than just a for loop or a while loop
// setInterval Method to continuously check Dragon's happiness level via, hunger, water, sleep/play level
// if scorched, image change dragon blowing fire 
// metrics - i.e. health levels at top upper right (setInterval can run and constantly update those metrics)
// 

let nightFuryHappiness = 3
let nightFuryHunger = 3
let nightFuryRestLevel = 3
let nightFuryThirst = 3

// objects: 

class nightFury {
	constructor() {
		this.name = name
		this.happines = happiness
		this.fullness = fullness
		this.rest = rest
		this.hydration = hydration
		this.objects = {
			donuts: 5,
			water: 5,
			play: 5,
			sleep: 5
		}
	}	


	announceHappiness() {
		nightFury.happiness = `${nightFury.happiness}` 
			console.log(this.happiness)
		if (nightFury.happiness <= 3) {
			console.log("Play with Night Fury! He's getting bored!")
		}else{
			console.log("Night Fury is happy!")
		}
		
	}

	announceFullness() {
		nightFury.fullness = `${nightFury.fullness}`
			console.log(this.fullness)
		if(nightFury.fullness >= 3) {
			console.log("Feed Night Fury donuts!")
		}else{
			console.log("Night Fury is full!")
		}
	}

	announceRest = () => {
		nightFury.rest = `${nightFury.rest}`
			console.log(this.rest)
		if (nightFury.rest <= 3){
			console.log("Put Night Fury to sleep before he gets cranky!")
		}else{
			console.log("Night Fury is well-rested!")
		}
	}

	announceThirst = () => {
		nightFury.hydration = `${nightFury.hydration}`
			console.log(this.hydration)
		if (nightFury.hydration <= 3){
			console.log("Night Fury is thirsty!")
		}else{
			console.log("Night Fury is hydrated!")
		}
	}
}

// const nightFury = new nightFury('toothless')


function waterNightFury() {
	nightFury.hydration = `${nightFury.hydration}` + this.objects.water
	console.log(this.objects.water)
	console.log(nightFury)
	console.log(`${nightFury.name}` + " was hydrated! Hydration is now at " + `${nightFury.hydration}`)

}

function sleepNightFury() {
	nightFury.rest = `${nightFury.rest}` + this.objects.sleep
	console.log(this.sleep)
	console.log(nightFury)
	console.log(`${nightFury.rest}` + " is sleeping! Rest is now at " + `${nightFury.rest}`)

}

function playWithNightFury() {
	nightFury.happiness = `${nightFury.happiness}` + this.objects.play
	console.log(this.play)
	console.log(nightFury)
	console.log(`${nightFury.name}` + " was hydrated! Happiness is now at " + `${nightFury.happiness}`)

}

function feedNightFuryDonuts() {
	nightFury.fullness = `${nightFury.fullness}` + this.objects.donuts
	console.log(this.donuts)
	console.log(nightFury)
	console.log(`${nightFury.name}` + " was fed donuts! Fullness is now at " + `${nightFury.fullness}`)

}

function nightFuryBlowsFire() {
	if(this.happiness = 0){
		console.log("Night Fury has scorched you due to feeling neglected! Game over")
	}else if(this.fullness = 0) {
		console.log("Night Fury has scorched you because he was starving! Game over")
	}else if(this.hydration = 0) {
		console.log("Night Fury has scorched you because he was thirsty! Game over")
	}else if(this.rest = 0) {
		console.log("Night Fury has scorched you because he was sleep deprived! Game over")
	}

}	

//setInterval checks 


// setInterval
let start = 0
const testTimer = setInterval(timerCount,2000);

function timerCount() {
	start++
	console.log(start)
	if(start == 10) {
		clearInterval(testTimer)
	}

}

window.setInterval(function(){
	if(this.hydration && this.fullness && this.happiness && this.rest <= 3) {
		waterNightFury();
  		sleepNightFury();
  		playWithNightFury();
  		feedNightFuryDonuts();
	}else if(this.hydration && this.fullness && this.happiness && this.rest <= 0) {
		nightFuryBlowsFire();
} 	}, 2000);

window.addEventListener("click", () => {
	console.log()
})



// click events that adjust value of hunger/happiness/thirst/rest

// don't have more than one timer (runGame timer running all the cycles)
// in that function timerCount you'd have your logic to determine when to update
// values and animation

// <button>Click me</button>
// <p>No handler here.</p>
// <script>
//   let button = document.querySelector("button");
//   button.addEventListener("click", () => {
//     console.log("Button clicked.");
//   });
// </script>




































