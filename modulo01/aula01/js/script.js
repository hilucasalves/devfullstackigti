window.addEventListener('load', start);

var divPodcast = document.querySelector("#result");

var inputRange = document.querySelector("#inputRange");

var inputFrequency = document.querySelector("#inputFrequency");

function start() {
    inputRange.addEventListener('input', handleInputRangeChange);
    showPodcastFromFrequency('87.5');
}

function handleInputRangeChange(event) {

    inputFrequency.value = event.target.value;

    showPodcastFromFrequency(event.target.value);
}

function showPodcastFromFrequency(frequency) {

    var hasPodcast = false;

    var currentPodcast = podcasts.find(function (podcast) {
        return frequency === podcast.id;
    });

    if (currentPodcast) {
        renderPodcast(currentPodcast);
    } else {
        divPodcast.textContent = "Nenhuma rádio encontrada.";
    }

}

function renderPodcast(podcast) {
    divPodcast.innerHTML = '';

    var h5 = document.createElement('h5');
    h5.textContent = podcast.title;
    var img = document.createElement('img');
    img.src = podcast.img;
    var description = document.createElement('p');
    description.textContent = podcast.description;
    var link = document.createElement('a');
    link.href = podcast.link;
    link.textContent = "Acessar";
    link.target = "_blank";

    divPodcast.appendChild(h5);
    divPodcast.appendChild(img);
    divPodcast.appendChild(description);
    divPodcast.appendChild(link);
}

window.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        var x = parseFloat(inputFrequency.value) - parseFloat(inputRange.step);
        if (x >= inputRange.min) {
            inputFrequency.value = x.toFixed(1);
            inputRange.value = inputFrequency.value;
            showPodcastFromFrequency(inputFrequency.value);
        }
    } else if (event.key === 'ArrowRight') {
        var x = parseFloat(inputFrequency.value) + parseFloat(inputRange.step);
        if (x <= inputRange.max) {
            inputFrequency.value = x.toFixed(1);
            inputRange.value = inputFrequency.value;
            showPodcastFromFrequency(inputFrequency.value);
        }
    }
});