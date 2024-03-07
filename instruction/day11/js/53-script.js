
const arr = [12, 546, 2, 65, undefined, 32, "adfa", 6767, 232, 65, null, 312, 5, 78, 890, 34];
//const arr = null;

const myArrayEl = document.querySelector("#myArray");
const btnGetGreatestNum = document.querySelector("#btnGetGreatestNum");
const greatestNumEl = document.querySelector("#greatestNum");

myArrayEl.innerHTML = arr;

btnGetGreatestNum.addEventListener("click", ()=>{
    const result = getMaxNumber(arr);
    if(result){
        greatestNumEl.innerHTML = result;
    }
    else{
        alert("Please send an array");
    }
});


// [12, 546, 2, 65, 32, 6767, 232, 65, 312, 5, 78, 890, 34]
// []
const getMaxNumber = (arr) => {
    if(!arr || !Array.isArray(arr) || arr.length<=0) return false;

    let maxNum = arr[0];
    for(let i=1; i<arr.length; i++){
        if(maxNum<arr[i]){
            maxNum = arr[i];
        }
    }
    return maxNum;
}