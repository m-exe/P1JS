let etudiant1 = {
    "nom" : "D",
    "prenom" : "L",
    "age" : 18,
    "web" : [20,18.5,19,20,16],
    "com" : [14,13,12,12.5,13],
    "audiovisuel" : [11,10,15,14]
}
let etudiant2 = {
    "nom" : "M",
    "prenom" : "P",
    "age" : 23,
    "web" : [15,16,19,14,16],
    "com" : [18,17,20,20,18.5],
    "audiovisuel" : [20,20,19.5,17]
}

function printEtudiant(etudiant){
    let container = document.createElement("div");
    for(let key in etudiant){
        let info = document.createElement("p");
        info.append(etudiant[key]);
        container.append(info);

    }
    document.getElementById("root").append(container);
}

printEtudiant(etudiant1);
printEtudiant(etudiant2);

document.getElementById("hide").addEventListener("click",()=>{
    document.getElementById("root").classList.toggle("hidden");
});