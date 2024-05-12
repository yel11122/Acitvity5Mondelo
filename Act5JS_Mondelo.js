document.addEventListener("DOMContentLoaded", function () {
    const words = ["web developer", "designer", "programmer"];
    let i = 0;
    let timer;

    function typingEffect() {
        const word = words[i].split("");
        let loopTyping = function () {
            if (word.length > 0) {
                document.getElementById('type').innerHTML += word.shift();
            } else {
                deletingEffect();
                return false;
            }
            timer = setTimeout(loopTyping, 200);
        };
        loopTyping();
    }

    function deletingEffect() {
        const word = words[i].split("");
        let loopDeleting = function () {
            if (word.length > 0) {
                word.pop();
                document.getElementById('type').innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                typingEffect();
                return false;
            }
            timer = setTimeout(loopDeleting, 100);
        };
        loopDeleting();
    }

    typingEffect();
});
