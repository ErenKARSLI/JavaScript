const arr = [450, 658, 250, 3500, 7850];

const arrPricesEl = document.querySelector("#arrPrices");
const btnGetPrices = document.querySelector("#btnGetPrices");
const arrNewPricesEl = document.querySelector("#arrNewPrices");

arrPricesEl.innerHTML = arr;

btnGetPrices.addEventListener("click", () => {
   const result = setPrices(arr,10);
   if(result){
    arrNewPricesEl.innerHTML = result;
   } 
   else{
    alert("Please send an array and a rate");
   }
});



//const arr = [450, 658, 250, 3500, 7850];
const setPrices = (arr, rate) =>{
    if(!arr || !Array.isArray(arr) || arr.length<=0 ) return false;
    if(!rate || isNaN(rate)) return false;


    const newArr = Object.assign([], arr);

    for(let i=0; i<newArr.length; i++){
        newArr[i] = newArr[i] + newArr[i] * rate / 100;
    }

    return newArr;
}