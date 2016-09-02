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

/* Google analytics stuff */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-83605481-1', 'auto');
ga('send', 'pageview');
