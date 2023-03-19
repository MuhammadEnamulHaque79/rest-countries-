//function-1:loadCountries data
const loadCountries =()=>{
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data));
        // .then(data => console.log(data));
}

//function-2:all countries data retrieve function

const displayCountries =(countries)=>{
    console.log(countries[0]);
    const allCountriesHTML = countries.map(country =>getCountryHTML(country));
    // console.log(allCountriesHTML[0]);
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = allCountriesHTML.join(" ");
    //to remove coma after anything use .join('empty string');
};

//function-3:single country data retrieve function;

const getCountryHTML =(country)=>{
    return `
        <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" alt="" />
        <h2>${country.capital}</h2>
        </div>
    `;
   
}
        
        


loadCountries();//this function globally declare;