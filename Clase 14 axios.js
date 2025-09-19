document.getElementById("btnCargar").addEventListener("click", () => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      const usuarios = response.data;
      const lista = document.getElementById("listaUsuarios");
      lista.innerHTML = ""; // Limpiar lista antes de agregar nuevos elementos

      usuarios.forEach(usuario => {
        const item = document.createElement("li");
        item.textContent = usuario.name;
        lista.appendChild(item);
      });
    })
    .catch(error => {
      console.error("Error al obtener los usuarios:", error);
      document.getElementById("listaUsuarios").innerHTML =
        "<li style='color:red;'>Error al cargar los usuarios.</li>";
    });
});
