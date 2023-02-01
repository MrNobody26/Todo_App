
let submit= document.getElementById("submit");
submit.addEventListener("click",displayData);

let row=1;

function displayData(){
    event.preventDefault();
    
    let name= document.getElementById("name").value;
    let design= document.getElementById("design").value;
    let exp= document.getElementById("exp").value;
    let date=document.getElementById("date").value;

    if(!name || !design|| !exp || !date){
        alert("Please fill All the fields");
        return;
    }

    let entry= document.getElementById("entry");
    let newRow = entry.insertRow(row);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = design;
    cell3.innerHTML = exp;
    cell4.innerHTML = date;
    row++;

    document.getElementById("form").reset();
}