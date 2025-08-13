document.getElementById('contenedor').addEventListener('click', function(e) {
  if (e.target === this) {  // Solo se ejecuta si el clic fue en el div (no en sus hijos)
    alert('Hola! Soy el div');
  }
});

document.querySelector('button').addEventListener('click', function(e) {
  e.stopPropagation();  // Evita que el evento llegue al div
  alert('Hola!');
});
