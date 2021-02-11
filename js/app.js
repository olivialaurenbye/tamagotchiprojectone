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

// CREATE GAME OBJECT 
// const game = {
// start method/ feed/ water/ play /sleep
// instantiating nightfury class
// then assign to be instance of nightfury class
// then start timer when user hits start
// setInterval use it's ID to clear it 
// }
// objects: 
// have a method on game object that you pass into as callback to interval 
// that runs everytime interval tics 
// then everything you want to happen is in one place
// every tic gets more hungry aka <= 3 value 

const tamagotchiGame = {
	feedNightFuryDonuts() {
		return `${nightFuryFullness}` + 3;
	},
	playWithNightFury() {
		return `${nightFuryHappiness}` + 3;
	},
	waterNightFuryWater() {
		return `${nightFuryThirst}` +3;
	},
	sleepNightFury() {
		return `${nightFuryRestLevel}` +3;
	},
}


class nightFury {
	constructor(name,happiness,fullness,rest,hydration) {
		this.name = name
		this.happiness = happiness
		this.fullness = fullness
		this.rest = rest
		this.hydration = hydration
		this.objects = {
			donuts: 3,
			water: 3,
			play: 3,
			sleep: 3
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

	sleepNightFury = () => {
		(this.rest += this.objects.sleep)
		console.log(this.rest)
		console.log(this.name + " was put to bed! Rest is now at " + `${this.rest}`)
	

}
	waterNightFury = () => {
		this.hydration = this.hydration + this.objects.water
		console.log(this.hydration)
		console.log(this.name + " was hydrated! Hydration is now at " + `${this.hydration}`)
}

	playWithNightFury = () => {
		this.happiness = this.happiness + this.objects.play
		console.log(this.happiness)
		console.log(this.name + " enjoyed play! Happiness is now at " + `${this.happiness}`)
	}

	feedNightFuryDonuts = () => {
		this.fullness = this.fullness + this.objects.donuts 
		console.log(this.fullness)
		console.log(this.name + " ate 3 donuts! Fullness is now at " + `${this.fullness}`)
	}

	nightFuryBlowsFire = () => {
		if(this.happiness = 0) {
			console.log(this.name + " has scorched you due to feeling neglected :( game over")
		}
	}


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


function endGame() {
	if(toothless.happiness <= 0) {
		clearInterval(game)
		console.log(" Toothless has scorched you due to feeling neglected! Game over :( ")

	}
	if(toothless.hydration <= 0) {
		clearInterval(game)
		console.log(" Toothless has scorched you due to being thirsty! Game over :( ")

	}
	if(toothless.rest <= 0) {
		clearInterval(game)
		console.log(" Toothless has scorched you due to being sleep deprived and cranky! Game over :( ")
	} 
	if(toothless.fullness <= 0) {
		clearInterval(game)
		console.log(" Toothless has scorched you due to being hangry! Game over :( ")

	}
}



let toothless = new nightFury('toothless',3, 3, 3, 3)
console.log(toothless)
const game = window.setInterval(function(){
	console.log(toothless.rest)
	toothless.rest -- 
	console.log(toothless.happiness)
	toothless.happiness -- 
	console.log(toothless.fullness)
	toothless.fullness --
	console.log(toothless.hydration)
	toothless.hydration --

	

	endGame()
}, 2000);



document.getElementById("rest").addEventListener("click", () => {
	console.log('increase rest')
	toothless.sleepNightFury()
})

document.getElementById("happiness").addEventListener("click", () => {
	console.log('increase happiness')
	toothless.playWithNightFury()
})
document.getElementById("fullness").addEventListener("click", () => {
	console.log('increase fullness')
	toothless.feedNightFuryDonuts()
})
document.getElementById("hydration").addEventListener("click", () => {
	console.log('increase hydration')
	toothless.waterNightFury()
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




































