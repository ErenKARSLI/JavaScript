const ocPrivacy = new bootstrap.Offcanvas('#ocPrivacy');
const isPrivacyPolicyAccepted = localStorage.getItem("privacy-policy")
isPrivacyPolicyAccepted ?? ocPrivacy.show();



document.getElementById("btnAcceptPrivacy").addEventListener("click", ()=>{
    localStorage.setItem("privacy-policy", true);
    ocPrivacy.hide();
}); 