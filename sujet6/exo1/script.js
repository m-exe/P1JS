function display(str){
    document.getElementById("saisie").value = str;
}

display("coucou");

document.getElementById("buttonClic").addEventListener("click",()=>{
    display("1 clic");
});
document.getElementById("buttonClic").addEventListener("dblclick",()=>{
    display("2 clics");
});

document.getElementById("deroulant").addEventListener("change",()=>{
    display(document.getElementById("deroulant").value);
});

let zone = document.getElementById("zone");
zone.addEventListener("mouseenter",()=>{
    display("Entrée de la souris"); 
});
zone.addEventListener("mouseleave",()=>{
    display("Sortie de la souris");
})
zone.addEventListener("keypress",()=>{
    display(zone.value);
});

let reset = document.querySelector("form").querySelectorAll("button")[0];
let resetConfirm = reset.addEventListener("click",(event)=>{
    let result = confirm("Confirmer?");
    if(!result){
        event.preventDefault();
    }
})

let submit = document.querySelector("form").querySelectorAll("button")[1];

submit.addEventListener("click",(event)=>{
    if(document.querySelector("form input").value == "toto"){
        event.preventDefault();
    }
});
