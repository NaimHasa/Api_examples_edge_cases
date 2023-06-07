const countriesData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayData(data));
}

const displayData = (countries) => {
    // console.log(country);
    const countriesContainer = document.getElementById('countries_container');
    // console.log(countriesContainer);
    countries.forEach(country => {

        // console.log(country)

        const divCre = document.createElement('div');
        divCre.classList.add('country');
        // console.log(divCre)
        divCre.innerHTML = `
        
        <h1>Name: ${country.name.common} 
        </h1>

        <p>Capital: ${country.capital}</p>

        <button onclick="countryDetelis('${country.cca2}')">Detelis</button>
        
        `;

        countriesContainer.appendChild(divCre);

    });
}

const countryDetelis = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('country detelis', code);
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetelis(data[0]));
}

const displayDetelis = (countryDetelis) => {
    const countryDetelisDis = document.getElementById('country-detelis')
    const countryDetelisDiv = document.createElement('div')
    countryDetelisDiv.innerHTML = `
    
    <h2>Country: ${countryDetelis.name.common}</h2>
    <img src="${countryDetelis.flags.png}">
    
    `
    countryDetelisDis.appendChild(countryDetelisDiv);

}

countriesData();
