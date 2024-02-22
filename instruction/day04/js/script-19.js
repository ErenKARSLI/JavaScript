function setMode(){
    const isDark = document.body.classList.contains("dark");
    const btnToggle = document.querySelector(".toggle-btn");

    if(isDark){
        document.body.classList.remove("dark");
        btnToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    else{
        document.body.classList.add("dark");
        btnToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}