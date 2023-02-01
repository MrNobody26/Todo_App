let Row ;
var data = [];
var count = true;

function OnAddClick(){
    event.preventDefault();
    resetTable();
    var element = document.getElementById("form");
    let submit= document.getElementById("submit");
    var formData = {}; 
     let formName =  document.getElementById("name").value;
     let formDesign = document.getElementById("design").value;
     let formExp = document.getElementById("exp").value;
     let formDate = document.getElementById("date").value;
      
     if(!formName || !formDesign|| !formExp || !formDate){
        alert("Please fill All the fields");
        return; 
     }
     //final version
     else{
         formData.id = i;
         formData.fName =formName;
         formData.design = formDesign;
         formData.exp = formExp;
         formData.date = formDate;
    

        if(count){
         data.push(formData);
        }
        
        else{
            console.log("should come after clicking edit")
            console.log("Start index for edit ", row)
            data.splice(row,1,formData);
            count=true;
        }
        
        console.log("before calling edit & delete" , data );
        showTable();
        element.reset();   
        
      } 
}


   function showTable(){
     //data entry to table
     j=1;

     for(i=0;i<data.length;i++){
     let entry= document.getElementById("entry");
     let newRow = entry.insertRow(j);
 
     let cell1 = newRow.insertCell(0);
     let cell2 = newRow.insertCell(1);
     let cell3 = newRow.insertCell(2);
     let cell4 = newRow.insertCell(3);
     let cell5 = newRow.insertCell(4);
     let cell6 = newRow.insertCell(5);
     let cell7 = newRow.insertCell(6);
     let btn1 = document.createElement('input');
     let btn = document.createElement('input');
     
     //button initialization
     btn.setAttribute('type','button');
     btn.id=i;
     console.log(btn.id);
     btn.setAttribute('value','Delete');
     btn.setAttribute('onclick',callDelete);
     btn.onclick=callDelete(i);
     
     btn1.setAttribute('type','button');
     btn1.id=i;
     btn1.setAttribute('value','edit'); 
     btn1.setAttribute('onclick',callEdit);
     btn1.onclick=callEdit(i);
 
   
   
         cell1.innerHTML = i;
         cell2.innerHTML = data[i].fName;
         cell3.innerHTML = data[i].design;
         cell4.innerHTML = data[i].exp;
         cell5.innerHTML = data[i].date;
     
         cell6.appendChild(btn);
         cell7.appendChild(btn1);  
         j++;

        } 
    }

   //delete function
    function callDelete(id){
    console.log("inside delete", id);
    //console.log("data removed");
     
        return function deleteRecord(){
            console.log("inside actual delete "); 
            console.log("data with index",data[id]);
            let temp = data.splice(id, 1);
            console.log("Removed data after splice ", temp); 
            console.log("data after splice ", data);  
            //document.getElementById('entry').deleteRow(id++); 
            resetTable()
            showTable()
        } 
    }

    function callEdit(id){
       
        console.log("entred edited")
         
        return function editRecord(){
            console.log(id," after edit click entry edited")
            console.log("data with index",data[id]);
            let temp = data[id];
            console.log("Edit element",temp);
            console.log("just name",temp.fName);
            console.log("full array is ", data)
            document.getElementById("name").value = temp.fName;
            document.getElementById("design").value = temp.design;
            document.getElementById("exp").value = temp.exp;
            document.getElementById("date").value = temp.date;
            row=id;
            count=false;
            console.log("count =", count);
            console.log("Row to edit ", row)
            resetTable()
            showTable()
           
        }
    }


function resetTable(){
    var j = document.getElementById("entry").rows.length-1;
    
    for(i=0;j>=1;i++){
        console.log("loop index ",j)
        document.getElementById("entry").deleteRow(j);
        j--;
    }
}



