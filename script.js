const addbtn= document.getElementById('add');
addbtn.addEventListener("click",function(){

  const newtask= document.getElementById("newtask");
  const Newtask= document.createElement('li');
  const Checkbox= document.createElement('input');
  const deletebtn = document.createElement('button');
  const tasklist = document.getElementById('tasklist');
  Checkbox.type = 'checkbox';
  deletebtn.innerText = 'remove';
  const point = document.getElementById('point')


  Newtask.appendChild(Checkbox);
  Newtask.appendChild(document.createTextNode(" "+newtask.value+"    "));
  Newtask.appendChild(deletebtn);

  tasklist.appendChild(Newtask);

  Checkbox.addEventListener("change",function(){
    let pointvalue = Number(point.innerText);
    if(Checkbox.checked){
      Newtask.style.textDecoration = "line-through";
      point.innerText = pointvalue+10
    }else{
      Newtask.style.textDecoration ="none";
      point.innerText = pointvalue-10
    }
  })

  deletebtn.addEventListener("click",function(){
    let pointvalue = Number(point.innerText);
    tasklist.removeChild(Newtask);
    point.innerText = pointvalue-10
  })

})
