const videoElement = document.getElementById('video'); 
const selectBtn = document.getElementById('select-button');
const startBtn = document.getElementById('start-button');


// Prompt to select media stream, pass to video element, then play
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    // Catch Error Here
    console.log('error:', error);
  }
};

// Event Listener for Select Button
selectBtn.addEventListener('click', () => {
  // Disable Button
  selectBtn.diabled = true;
  // Open select screen window
  selectMediaStream();
  // Reset Button
  selectBtn.diabled = false;
});

// Event Listenr for Picture in Picture
startBtn.addEventListener('click', async () => {
  // Disable Button
  startBtn.diabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  startBtn.diabled = false;
});
