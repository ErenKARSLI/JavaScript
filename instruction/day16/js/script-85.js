import { countries } from "../data/countries.js";

const txtSearch = document.getElementById("txtSearch");
const resultBox = document.querySelector("#searchBar ul");
let timeout = null;

const filterData = (val) => {
    if(!val) return [];

  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(val.toLowerCase())
  );
};

const setSearchBox = (items) =>{
    resultBox.innerHTML = "";

    if(items.length<=0){
        resultBox.style.display = "none";
        return;
    }

    items.forEach( (item)=> {
        const li = document.createElement("li");
        li.textContent = item.name.common;
        resultBox.appendChild(li);
    });
    resultBox.style.display = "block";
}



txtSearch.addEventListener("input", (e) => {
    if(timeout) clearTimeout(timeout);
    
    timeout = setTimeout( ()=> {
        const filteredData = filterData(e.target.value);
        setSearchBox(filteredData);
    }, 500 );
});