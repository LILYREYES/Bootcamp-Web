document.getElementById("btnCargarFetch").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json();
    })
    .then(data => {
      const lista = document.getElementById("listaUsuariosFetch");
      lista.innerHTML = "";

      data.forEach(usuario => {
        const item = document.createElement("li");
        item.textContent = usuario.name;
        lista.appendChild(item);
      });
    })
    .catch(error => {
      console.error("Error al obtener usuarios con Fetch:", error);
      document.getElementById("listaUsuariosFetch").innerHTML = 
        "<li style='color:red;'>No se pudieron cargar los usuarios.</li>";
    });
});
