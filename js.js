document.addEventListener('DOMContentLoaded', function() {
    // Escuchar el evento 'submit' del formulario
    document.getElementById('registroForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Mostrar la ventana emergente de registro exitoso
        document.getElementById('registroExitoso').style.display = 'block';
    });
});
