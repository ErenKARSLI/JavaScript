import showAlert, { showConfirm } from "./message.js";

document.getElementById("btnAlert").addEventListener("click", ()=>{
    showAlert("Hello Module")
});

document.getElementById("btnConfirm").addEventListener("click", ()=>{
    showConfirm("Are you sure tu update?");
});