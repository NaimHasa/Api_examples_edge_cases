const quiteLoad = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuite(data))

}

const displayQuite = (quites) => {
    const quoteDisplay = document.getElementById('Quote')
    // console.log(quites);
    quoteDisplay.innerText = quites.quote

        ;
}