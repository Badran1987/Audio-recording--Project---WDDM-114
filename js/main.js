



 

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
