const txtNameEl = document.querySelector("#txtName");
const welcomeEl = document.querySelector("#welcome");

welcomeEl.innerHTML = `<strong>Welcome <em>${txtNameEl.value}</em></strong>`