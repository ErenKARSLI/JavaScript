const multiply = (num)=>{
    let result  = 0;
    if(num>3){
        result = num * 2;
    }
    else{
        result = num * 3;
    }
    return result;
}   

document.querySelector("#btn").addEventListener("click", ()=>{
    let total = 0;

    for(let i=0; i<5; i++){
        total += i*3 + multiply(i);
    }

    document.querySelector("#lblResult").innerHTML = total;
})