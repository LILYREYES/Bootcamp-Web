$(document).ready(function () {
  $('#btnCargarJquery').click(function () {
    $.get('https://jsonplaceholder.typicode.com/users', function (usuarios) {
      $('#listaUsuariosJquery').empty(); // Limpia la lista
      usuarios.forEach(function (usuario) {
        $('#listaUsuariosJquery').append(`<li>${usuario.name}</li>`);
      });
    }).fail(function () {
      $('#listaUsuariosJquery').html("<li style='color:red;'>Error al cargar los usuarios.</li>");
    });
  });
});
