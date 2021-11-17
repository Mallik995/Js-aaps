
let mic = document.getElementById("mic");
let chatAreaMain = document.querySelector('.chatAreaMain');
let chatAreaOuter = document.querySelector('.chatAreaOuter');


let intro = ["Hello, I am Chitti", "Hi, I am a Robo", "Hello, My name is Chitti"];
let help = ["How may i assist you?", "How can i help you?", "What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome", "Not an issue", "Its my pleasure", "Mention not"];
let closing = ['Ok bye-bye', 'As you wish, bye take-care', 'Bye-bye, see you soon..']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition();

function showusermsg(usermsg) {
    let output = ' ';
    output += `<div class="chatAreaInner user">${usermsg}</div>`;
    chatAreaOuter.innerHTML += output;
    return chatAreaOuter;
}
function showchatbotmsg(chatbotmsg) {
    let output = ' ';
    output += `<div class="chatAreaInner chatbot">${chatbotmsg}</div>`;
    chatAreaOuter.innerHTML += output;
    return chatAreaOuter;
}

function chatBotVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Santhosh Kumar is very very Bad Boy but Mallikarjun is a good Boy";
    if (message.includes('who are you')) {
        let finalResult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalResult;
    }
    window.speechSynthesis.speak(speech);
    chatAreaMain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult = function (e) {
    console.log(e);
    console.log(e.resultIndex);
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatAreaMain.appendChild(showusermsg(transcript));
    chatBotVoice(transcript);
    console.log(transcript);
}

mic.addEventListener("click", function () {
    recognition.start();
    console.log("Activated");
})