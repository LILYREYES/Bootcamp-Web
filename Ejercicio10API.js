let razaActual = '';

const buscarRaza = () => {
  const nombre = document.getElementById("dogName").value.toLowerCase().trim();
  const url = `https://dog.ceo/api/breed/${nombre}/images/random`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("No se pudo encontrar la raza");
      return response.json();
    })
    .then(data => {
      razaActual = nombre;
      document.getElementById("resultado").innerHTML = `
        <h2>Raza: ${nombre}</h2>
        <img src="${data.message}" alt="${nombre}" />
      `;
      document.getElementById("galeria").innerHTML = '';
    })
    .catch(error => {
      document.getElementById("resultado").innerHTML =
        "<p style='color:red;'>Raza no encontrada o error en la solicitud.</p>";
      console.error(error);
    });
};

const mostrarImagenes = () => {
  if (!razaActual) {
    alert("Primero busca una raza.");
    return;
  }

  const url = `https://dog.ceo/api/breed/${razaActual}/images/random/3`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Error al obtener imágenes.");
      return response.json();
    })
    .then(data => {
      const imagenesHTML = data.message.map(img => `<img src="${img}" alt="${razaActual}">`).join('');
      document.getElementById("galeria").innerHTML = imagenesHTML;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("galeria").innerHTML =
        "<p style='color:red;'>No se pudieron cargar las imágenes.</p>";
    });
};

// Eventos
document.getElementById("btnBuscar").addEventListener("click", buscarRaza);
document.getElementById("btnImagenes").addEventListener("click", mostrarImagenes);
