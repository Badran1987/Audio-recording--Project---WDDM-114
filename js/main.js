



 

  // Adapted from this example:
// https://medium.com/@bryanjenningz/how-to-record-and-play-audio-in-javascript-faa1b2b3e49b

// Document elements
let startBtn = document.getElementById(`start`)
let stopBtn = document.getElementById(`stop`)

// Load up the microphone, setup the event listeners, etc
// this is the main execution that does all the work, it's called when the document is loaded fully (listener is at the bottom of this script)!
let loadMicrophone = async function() {
	let audioChunks = [] // An array to store all of the recording bits
	recordingNow(false) // Not recording to start
	
	// Get the microphone ready
	let stream = await navigator.mediaDevices.getUserMedia({ audio: true })
	
	// Setup a stream for recording to
	const mediaRecorder = new MediaRecorder(stream)
	
	// When the stream STARTS recording
	mediaRecorder.addEventListener("start", function(event) {
		audioChunks = []
		recordingNow(true)
	})
	
	// When the stream STOPS recording
	mediaRecorder.addEventListener("stop", function(event) {
		const audioBlob = new Blob(audioChunks)  // Compile the recording bits
		const audioUrl = URL.createObjectURL(audioBlob)  // Turn into a file
		const audio = new Audio(audioUrl)
        audio.play()

  var context = new AudioContext();
  var src = context.createMediaElementSource(audio);
  var analyser = context.createAnalyser();

  var canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext("2d");

  src.connect(analyser);
  analyser.connect(context.destination);

  analyser.fftSize = 256;

  var bufferLength = analyser.frequencyBinCount;
  console.log(bufferLength);

  var dataArray = new Uint8Array(bufferLength);

  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;

  var barWidth = (WIDTH / bufferLength) * 2.5;
  var barHeight;
  var x = 0;

  function renderFrame() {
    requestAnimationFrame(renderFrame);

    x = 0;

    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    for (var i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i];
      
      var r = barHeight + (25 * (i/bufferLength));
      var g = 150 * (i/bufferLength);
      var b = 50;

      ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

      x += barWidth + 1;
    }
   
  }


        renderFrame();        
		recordingNow(false)  // Inform the UI that we're not recording
	})
	
	// As soon as some bytes are ready to save
	mediaRecorder.addEventListener("dataavailable", function(event) {
		audioChunks.push(event.data)
	})
	
	// When the start button is clicked, start recording
	startBtn.addEventListener(`click`, function(event) {
		mediaRecorder.start()
	})
  
	// When the stop button is clicked, stop recording
	stopBtn.addEventListener(`click`, function(event) {
		mediaRecorder.stop()
	})
}

// Handle the UI stuff, like toggling the buttons and put the recording border
let recordingNow = function(isRecording) {
	// Toggle the button activation
	startBtn.disabled = isRecording
	stopBtn.disabled = !isRecording
	
	// Border around the body
	if (isRecording) {
		document.body.classList.add(`recording`)
	} else {
		document.body.classList.remove(`recording`)
	}
}

// When the window is loaded and ready to go, get the Microphone ready
window.addEventListener(`load`, loadMicrophone)




let fillbar = document.querySelector(".fill");
let audios = ["audio/Audio_One.mp3", "audio/Audio_Two.mp3", "audio/Audio_Three.mp3"];
let covers = ["imgs/cover1.jpg", "imgs/cover2.jpg", "imgs/cover3.jpg"];


// Create An Object Of Audio

let audio = new Audio();
let currentSong = 0;

// whenever the window load, song should play automaticly

window.onload = pauseSong;

// let's play the song by this function whenever window load

function playSong() {
  audio.src = audios[currentSong];
  audio.play();
  
}

// let's pause the song by this function whenever window load
function pauseSong() {
    audio.src = audios[currentSong];
    audio.pause();
    
  }

// switch between Play and Pause click 

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
    playBtn.style.paddingLeft = "30px";
  } else {
    audio.pause();
    playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
    playBtn.style.paddingLeft = "33px";
  }
}

// Now let's Work on next and prev buttons

function nextAudio() {
  currentSong++;
  if (currentSong > 2) {
    currentSong = 0;
  }
  playSong();
  playBtn = document.querySelector(".play-pause");
  playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  playBtn.style.paddingLeft = "30px";
  // just one line jquery for changing the covers

  $(".img img").attr("src", covers[currentSong]);
}

function prevAudio() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = 2;
  }
  playSong();
  playBtn = document.querySelector(".play-pause");
  playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  playBtn.style.paddingLeft = "30px";
  // just one line jquery for changing the covers

  $(".img img").attr("src", covers[currentSong]);
}
