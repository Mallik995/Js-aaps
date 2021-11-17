
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

    if (message.includes('fine')) {
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if (message.includes('how are you' || 'how are you doing today')) {
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if (message.includes('tell me something about you' || 'tell me something about your hobbies')) {
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if (message.includes('pizza')) {
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if (message.includes('thank you' || 'thank you so much')) {
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if (message.includes('talk to you' || 'talk')) {
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
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

recognition.onend = function () {
    mic.style.background = "#ff3b3b";
}
mic.addEventListener("click", function () {
    mic.style.background = 'green'
    recognition.start();
    console.log("Activated");
})