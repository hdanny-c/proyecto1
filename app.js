// Obtenemos los elementos de los formularios
const generalForm = document.getElementById('general-form');
const pagoForm = document.getElementById('pago-form');

// Validación para el formulario de datos generales
generalForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const sexo = document.getElementById('sexo').value;


    console.log('Datos Generales:', { nombre, fechaNacimiento, direccion, telefono, sexo });
});

// Validación para el formulario de datos de pago
pagoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroTarjeta = document.getElementById('numero-tarjeta').value;
    const nombreTarjeta = document.getElementById('nombre-tarjeta').value;
    const fechaExpiracion = document.getElementById('fecha-expiracion').value;
    const codigoSeguridad = document.getElementById('codigo-seguridad').value;


    console.log('Datos de Pago:', { numeroTarjeta, nombreTarjeta, fechaExpiracion, codigoSeguridad });
});
