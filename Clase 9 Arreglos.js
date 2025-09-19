En la carrera se muestran los participantes en las siguientes posiciones  
let participantes = ["Elena", "Carlos", "Javier", "Laura", "Miguel", "Patricia"]; 
console.log("Clasificación actual:"); 
console.log(participantes); 
 
let indexLaura = participantes.indexOf("Laura"); 
let indexJavier = participantes.indexOf("Javier"); 
 
if (indexLaura > indexJavier) { 
    [participantes[indexLaura], participantes[indexJavier]] = [participantes[indexJavier], 
participantes[indexLaura]]; 
} 
let indexPatricia = participantes.indexOf("Patricia"); 
if (indexPatricia !== -1) { 
    participantes.splice(indexPatricia, 1);  
} 
let indexCarlos = participantes.indexOf("Carlos"); 
participantes.splice(indexCarlos, 0, "Raúl", "Sofía"); 
 
participantes.unshift("Carmen"); 
 
console.log("Clasificación actualizada:"); 
console.log(participantes); 
