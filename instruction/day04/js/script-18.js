function sayHello(){
    const txtNameEl = document.querySelector("#txtName");
    const welcomeEl = document.querySelector("#welcome");

    welcomeEl.innerHTML = `Hello ${txtNameEl.value}`;
}