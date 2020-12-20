



//let fillbar = document.querySelector(".fill");
//let audios = ["audio/Audio_One.mp3", "audio/Audio_Two.mp3", "audio/Audio_Three.mp3"];
//let covers = ["imgs/cover1.jpg", "imgs/cover2.jpg", "imgs/cover3.jpg"];
let fillbar = document.querySelector(".fill");
//let audios = ["../audio/Audio_One.mp3", "../audio/Audio_Two.mp3", "../audio/Audio_Three.mp3"];
let audios = ["../audio/dog.mp3", "../audio/caow.mp3", "../audio/cheep.mp3", "../audio/pow.mp3", "../audio/frog.mp3", "../audio/Audio_One.mp3"];
let covers = ["../imgs/cover1.jpg", "../imgs/cover2.jpg", "../imgs/cover3.jpg"];
// Create An Object Of Audio

let audio = new Audio();


// whenever the window load, song should play automaticly

//window.onload = playSong;

// let's play the song by this function whenever window load

function playSong() {   
    audio.src = audios[currentSong];
    audio.play();
}

// Now let's Work on next and prev buttons
function changeImage(){


}
function animalsSound(elemSuond) {

    if (elemSuond == 'dog'){
        currentSong = 0;
        currentImage=0;
        document.getElementById("imgClickAndChange").src == currentImage
        console.log('dog', currentSong);
    }
    else if (elemSuond == 'frog') {
        currentSong = 4;
        console.log('frog', currentSong); 
     }
     else if (elemSuond == 'pow') {
        currentSong = 1;
        console.log('pow', currentSong); 
     }
//   else if (elemSuond == 'pow') {
//     currentSong = 1;
//     console.log('POW', currentSong);
//   }
  else if (elemSuond == 'hourse') {
    currentSong = 2;
    console.log('hourse', currentSong);
  }
  else if (elemSuond == 'dove') {
    currentSong = 3;
    console.log('dove', currentSong);
  }
  else if (elemSuond == 'cat') {
    currentSong = 5;
    console.log('dove', currentSong);
  }
  playSong();


  
  
//   playBtn.innerHTML = '<i class="fa fa-pause"></i>';
//   playBtn.style.paddingLeft = "30px";
  // just one line jquery for changing the covers

//   $(".img img").attr("src", covers[currentSong]);
}

// function animalsSound() {
//   currentSong--;
//   if (currentSong < 0) {
//     currentSong = 2;
//   }
//   playSong();
//   playBtn = document.querySelector(".play-pause");
//   playBtn.innerHTML = '<i class="fa fa-pause"></i>';
//   playBtn.style.paddingLeft = "30px";
//   // just one line jquery for changing the covers

//   $(".img img").attr("src", covers[currentSong]);
// }

// // let's work on the volume up , down and mute

// function decreaseVolume() {
//   audio.volume -= 0.25;
// }

// function increaseVolume() {
//   audio.volume += 0.25;
// }

// // fix the speaker muted button

// let volumeUp = document.querySelector(".volume-up");
// volumeUp.addEventListener("click", function() {
//   if (audio.volume === 1) {
//     audio.volume = 0;
//     document.querySelector(".volume-up i").className = "fa fa-volume-mute";
//   } else {
//     audio.volume = 1;
//     document.querySelector(".volume-up i").className = "fa fa-volume-up";
//   }
// });

// // Adapted from this example:
// // https://medium.com/@bryanjenningz/how-to-record-and-play-audio-in-javascript-faa1b2b3e49b

// // Document elements
// let startBtn = document.getElementById(`start`)
// let stopBtn = document.getElementById(`stop`)

// // Load up the microphone, setup the event listeners, etc
// // this is the main execution that does all the work, it's called when the document is loaded fully (listener is at the bottom of this script)!
// let loadMicrophone = async function() {
// 	let audioChunks = [] // An array to store all of the recording bits
// 	recordingNow(false) // Not recording to start
	
// 	// Get the microphone ready
// 	let stream = await navigator.mediaDevices.getUserMedia({ audio: true })
	
// 	// Setup a stream for recording to
// 	const mediaRecorder = new MediaRecorder(stream)
	
// 	// When the stream STARTS recording
// 	mediaRecorder.addEventListener("start", function(event) {
// 		audioChunks = []
// 		recordingNow(true)
// 	})
	
// 	// When the stream STOPS recording
// 	mediaRecorder.addEventListener("stop", function(event) {
// 		const audioBlob = new Blob(audioChunks)  // Compile the recording bits
// 		const audioUrl = URL.createObjectURL(audioBlob)  // Turn into a file
// 		const audio = new Audio(audioUrl)
// 		audio.play()
// 		recordingNow(false)  // Inform the UI that we're not recording
// 	})
	
// 	// As soon as some bytes are ready to save
// 	mediaRecorder.addEventListener("dataavailable", function(event) {
// 		audioChunks.push(event.data)
// 	})
	
// 	// When the start button is clicked, start recording
// 	startBtn.addEventListener(`click`, function(event) {
// 		mediaRecorder.start()
// 	})
  
// 	// When the stop button is clicked, stop recording
// 	stopBtn.addEventListener(`click`, function(event) {
// 		mediaRecorder.stop()
// 	})
// }

// // Handle the UI stuff, like toggling the buttons and put the recording border
// let recordingNow = function(isRecording) {
// 	// Toggle the button activation
// 	startBtn.disabled = isRecording
// 	stopBtn.disabled = !isRecording
	
// 	// Border around the body
// 	if (isRecording) {
// 		document.body.classList.add(`recording`)
// 	} else {
// 		document.body.classList.remove(`recording`)
// 	}
// }




