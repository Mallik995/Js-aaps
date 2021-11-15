
let mic = document.getElementById("mic");
let chatAreaMain = document.querySelector('chatAreaMain');
let chatAreaOuter = document.querySelector('chatAreaOuter');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition();

function showusermsg(usermsg) {
    let output = ' ';
    output += `<div class="chatAreaInner user">${usermsg}</div>`;
    chatAreaOuter.innerHTML += output;
    return chatAreaOuter;
}

recognition.onresult = function (e) {
    console.log(e);
    console.log(e.resultIndex);
    let transcript = e.results[resultIndex][0].transcript;
    chatAreaMain.appendChild(showusermsg(transcript))
    console.log(transcript);
}

mic.addEventListener("click", function () {
    recognition.start();
    console.log("Activated");
})