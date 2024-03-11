import {countries} from "../data/countries.js";


const loadData = () => {
    let options = "";

    for(let country of countries){
        options += `<option value="${country.cca2}">${country.name.common}</option>`;
    }

    const ddlCountries = document.querySelector("#ddlCountries");
    ddlCountries.innerHTML = options;
}


loadData();