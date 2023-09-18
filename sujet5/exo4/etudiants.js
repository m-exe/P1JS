let etudiant1 = {
    "nom" : "Dombrowski",
    "prenom" : "Lucas",
    "age" : 18,
    "web" : [20,18.5,19,20,16],
    "com" : [14,13,12,12.5,13],
    "audiovisuel" : [11,10,15,14]
}
let etudiant2 = {
    "nom" : "Diddens",
    "prenom" : "Logan",
    "age" : 23,
    "web" : [15,16,19,14,16],
    "com" : [18,17,20,20,18.5],
    "audiovisuel" : [20,20,19.5,17]
}

let tab = [etudiant1, etudiant2];
function printEtudiants(tab){
    let res = tab.map((v)=>{
        let container = document.createElement("div");
        for(let key in v){
            let info = document.createElement("p");
            info.append(v[key]);
            container.append(info);

        }
        return container;
    }).forEach((v)=>{
        document.getElementById("root").append(v);
    })
}

printEtudiants(tab);
document.getElementById("hide").addEventListener("click",()=>{
    document.getElementById("root").classList.toggle("hidden");
});