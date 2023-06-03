const formulario = document.getElementById('formularioJs');

const campoNombre = document.getElementById('nombre');

const campoApellido = document.getElementById('apellido');

const campoEmail = document.getElementById('email');

const campoHelp = document.getElementById('cajaTexto')

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    

    if(campoNombre.value.trim() === ''){
        campoNombre.style.border = '1px solid #EF4444'

        setTimeout(function() {
            campoNombre.style.border = '1px solid #708090';
        }, 1500);
    }

    if(campoApellido.value.trim() === ''){
        campoApellido.style.border = '1px solid #EF4444'

        setTimeout(function() {
            campoApellido.style.border = '1px solid #708090';
        }, 1500);
    }

    if(campoEmail.value.trim() === ''){
        campoEmail.style.border = '1px solid #EF4444'

        setTimeout(function() {
            campoEmail.style.border = '1px solid #708090';
        }, 1500);
    }

    if(cajaTexto.value.trim() === ''){
        cajaTexto.style.border = '1px solid #EF4444'

        setTimeout(function() {
            cajaTexto.style.border = '1px solid #708090';
        }, 1500);
    }

    campoNombre.value = ''
    campoApellido.value = ''
    campoEmail.value = ''
    campoHelp.value = ''
}
);