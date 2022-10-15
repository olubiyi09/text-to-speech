const searchForm = document.querySelector("#search-form");
const input = document.querySelector("#search-input");

const speechBtnDiv = document.querySelector("#speech-btn");
const micBtn = document.querySelector(".btns .fas");
const instruction = document.querySelector(".instruction");

const speechSynthesis = window.speechSynthesis;

// Check for Browser Support
if (speechSynthesis) {
  console.log("Speech Synthesis is Supported");
  micBtn.addEventListener("click", speak);

  function speak(e) {
    e.preventDefault();
    inputValue = input.value;
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = inputValue;
    speech.volume = "1";
    speech.rate = "1";
    speech.pitch = "2";
    speech.voice = speechSynthesis.speak(speech);
  }
} else {
  console.log("Speech Synthesis is Not Supported");
  speechBtnDiv.style.visibility = "hidden";
}
