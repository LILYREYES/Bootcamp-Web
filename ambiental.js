const usuarios = [
  { usuario: "ecoguardian", password: "verde123", edad: 25 }
];

// LOGIN
$('#btnLogin').click(() => {
  const usuario = $('#login-usuario').val().trim();
  const password = $('#login-password').val().trim();
  const encontrado = usuarios.find(u => u.usuario === usuario && u.password === password);

  if (encontrado) {
    $('#login-container, #registro-container').hide();
    $('#contenido').show();
    $('#bienvenida').text(`Bienvenido, ${usuario} 🌿 Gracias por cuidar el planeta.`);
  } else {
    $('#login-error').text('Credenciales incorrectas.');
  }
});

// MOSTRAR FORMULARIO DE REGISTRO
$('#mostrarRegistro').click(() => {
  $('#registro-container').toggle();
});

// REGISTRAR NUEVO USUARIO
$('#btnRegistrar').click(() => {
  const nuevoUsuario = $('#registro-usuario').val().trim();
  const nuevaPassword = $('#registro-password').val().trim();
  const edad = $('#registro-edad').val();

  if (!nuevoUsuario || !nuevaPassword || !edad) {
    $('#registro-msg').text('Completa todos los campos.');
    return;
  }

  usuarios.push({ usuario: nuevoUsuario, password: nuevaPassword, edad: parseInt(edad) });
  $('#registro-msg').text(`Usuario ${nuevoUsuario} registrado con éxito. 🌱`);
  $('#registro-usuario, #registro-password, #registro-edad').val('');
});

// PETICIÓN GET – Simulamos consejos ecológicos con jsonplaceholder
$('#btnGet').click(() => {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(resp => resp.json())
    .then(data => {
      const consejos = data.map(post => `<li><strong>🌱</strong> ${post.title}</li>`).join('');
      $('#apiResultado').html(`<h3>Consejos Ecológicos:</h3><ul>${consejos}</ul>`);
    });
});

// PETICIÓN POST – Enviar "acción ecológica"
$('#btnPost').click(() => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Planté un árbol hoy 🌳',
      body: 'Iniciativa personal para reforestar el parque.',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(resp => resp.json())
  .then(data => {
    $('#apiResultado').html(`
      <h3>Tu acción fue enviada:</h3>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `);
  });
});
