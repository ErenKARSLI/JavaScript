import { students } from "../data/students.js";

document.getElementById("btnShowLowScores").addEventListener("click", ()=>{
    setColorForLowScores();
});


const setColorForLowScores = () => {
    const trEls = document.querySelectorAll("#tblStudents tbody tr");
    
    trEls.forEach( (tr)=>{
        const score = tr.querySelector("td:nth-child(3)").innerText;
        if(score<50){
            tr.classList.add("table-danger");
        }

    } )

}

const loadData = () => { 
    let html = "";
    students.forEach( (student, i)=>{
        html += `
            <tr class="data-row">
                <td>${i+1}</td>
                <td>${student.name}</td>
                <td>${student.point}</td>    
                <td><button class="btn btn-link btn-del">🗑️</button></td>
            </tr>`;
    } )  

    const tbodyEl = document.querySelector("#tblStudents tbody");
    tbodyEl.innerHTML = html;
}

document.getElementById("tblStudents").addEventListener("click", (e)=>{

    if(e.target.classList.contains("btn-del")){
        const name = e.target.closest("tr").children[1].innerText;
        
        const result = confirm(`${name} isimli kaydı silmek istiyor musunuz?`);
        if(result){
            //...
        }
    }
    else if(e.target.closest("tr").classList.contains("data-row")){
        e.target.closest("tr").classList.toggle("table-info");
    }
})


 loadData();

/* 
 document.querySelectorAll(".btn-del").forEach( (btn)=>{
    console.log(btn);
    btn.addEventListener("click", ()=>{
        alert("ok");
    } )
} ) */