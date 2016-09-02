var button = document.querySelector('#get-kappa'),
    emote = document.querySelector('#emote'),
    increment = 0;

button.addEventListener('click', function () {
    emote.setAttribute('src', 'assets/feelsgoodman.png');
    button.innerHTML = 'Processing';

    process();
});

function process() {
    button.innerHTML += '.';
    window.setTimeout(process, 500);

    if (increment++ == 2) {
        window.location.href = 'https://www.youtube.com/watch?v=oHg5SJYRHA0';
    }
}