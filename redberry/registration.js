   // let label=document.querySelector(".registration_form form div label");

document.querySelectorAll(".registration_form form div input").forEach(d=>{
        let label=d.previousElementSibling;
  d.addEventListener("input", ()=> {
    if (d.value == ""){
        label.style.display = "block";
    }
    else {
        label.style.display ="none" ;
    }
  });
});
document.querySelectorAll(".registration_form form div input").forEach(d=>{
 
     let labelf=d.previousElementSibling;
     if(d.value == ""){ labelf.style.display ="block"}
     else{labelf.style.display ="none"}
     
});