let wrap = document.querySelector('.wrap')
const refresh = document.querySelector('#refresh')

const myAudio = document.querySelector('#musicdancin');
const myAudio2 = document.querySelector('#musicicf');
const myAudio3 = document.querySelector('#musicdf');
const myAudio4 = document.querySelector('#musicli');
const myAudio5 = document.querySelector('#musicmlt');
const myAudio6 = document.querySelector('#musicfm');
const myAudio7 = document.querySelector('#musicml');
var alanBtnInstance = alanBtn({
    key: "d6fb9dcbdb4bb853647bc516eb2998242e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: function (commandData) {
        if (commandData.command === "playingdancin") {


            setTimeout(() => {
                wrap.style.display = "flex"
            }, 500);


            myAudio.play();
        }
        else if (commandData.command === "stop") {
            setTimeout(() => {
                wrap.style.display = "none"
            }, 500);

            myAudio.pause();

        }
        if (commandData.command === "musicicf") {
            setTimeout(() => {
                wrap.style.display = "flex"
            }, 500);

            myAudio2.play();
        }


        else if (commandData.command === "stop") {
            setTimeout(() => {
                wrap.style.display = "none"
            }, 500);

            myAudio2.pause();
        }
        if (commandData.command === "musicdf") {
            setTimeout(() => {
                wrap.style.display = "flex"
            }, 500);
            myAudio3.play();
        }
        else if (commandData.command === "stop") {
            setTimeout(() => {
                wrap.style.display = "none"
            }, 500);

            myAudio3.pause();
        }
        if (commandData.command === "musicli") {
            setTimeout(() => {
                wrap.style.display = "flex"
            }, 500);
            myAudio4.play();

        }
        else if (commandData.command === "stop") {
            setTimeout(() => {
                wrap.style.display = "none"
            }, 500);

            myAudio4.pause();
        }
        if (commandData.command === "musicmlt") {
            setTimeout(() => {
                wrap.style.display = "flex"
            }, 500);
            myAudio5.play();
        }
        else if (commandData.command === "stop") {
            setTimeout(() => {
                wrap.style.display = "none"
            }, 500);

            myAudio5.pause();
        }
        if (commandData.command === "musicfm") {
            setTimeout(() => {
                wrap.style.display = "flex"
            }, 500);
            myAudio6.play();
        }
        else if (commandData.command === "stop") {
            setTimeout(() => {
                wrap.style.display = "none"
            }, 500);

            myAudio6.pause();
        }

        if (commandData.command === "musicml") {
            setTimeout(() => {
                wrap.style.display = "flex"
            }, 500);
            myAudio7.play();
        }
        else if (commandData.command === "stop") {
            setTimeout(() => {
                wrap.style.display = "none"
            }, 500);

            myAudio7.pause();
        }
        if(commandData.command === "refresh"){
            refresh.click()
        }






    },
    rootEl: document.getElementById("alan-btn"),
});