const buscarRaza = () => { 
  const nombre = document.getElementById("dogName").value.toLowerCase().trim(); 
  const url = `https://dog.ceo/api/breed/${nombre}/images/random`; 
 
  fetch(url) 
    .then(response => { 
      if (!response.ok) { 
        throw new Error("Ocurrió un error al buscar la raza."); 
      } 
      return response.json(); 
    }) 
    .then(data => { 
      if (data.status !== "success") { 
        throw new Error("Raza no encontrada"); 
      } 
 
      document.getElementById("resultado").innerHTML = ` 
        <h2>Raza: ${nombre}</h2> 
        <img src="${data.message}" alt="${nombre}" style="max-width:300px;" /> 
      `; 
    }) 
    .catch(error => { 
      console.error(error); 
      document.getElementById("resultado").innerHTML =

        "<p style='color:red;'>No se pudo encontrar la raza.</p>"; 
    }); 
}; 
 
document.getElementById("btnBuscar").addEventListener("click", buscarRaza); 
 
const mostrarMensaje = () => { 
  document.getElementById("mensaje").innerHTML = "<p>Esperando 4 segundos...</p>"; 
 
  setTimeout(() => { 
    document.getElementById("mensaje").innerHTML = "<p style='color:green;'>Calle 53, 
Centro Sur. Plaza Nazas. Busca tu mascota favorita y adopta</p>"; 
  }, 4000); 
}; 
 
document.getElementById("btnMensaje").addEventListener("click", mostrarMensaje); 
