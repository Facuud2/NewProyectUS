// const formulario = document.getElementById('formularioJs');

// const campoNombre = document.getElementById('nombre');

// const campoApellido = document.getElementById('apellido');

// const campoEmail = document.getElementById('email');

// const campoHelp = document.getElementById('cajaTexto')

// const alerta = document.getElementById('errorBlock')

// const success = document.getElementById('successBlock')

// formulario.addEventListener("submit", function(e) {
//     e.preventDefault();

//     if(!formulario) {

//         if(campoNombre.value.trim() === ''){
//             campoNombre.style.border = '1px solid #EF4444';
//             alerta.style.display = 'block'
    
//             setTimeout(function() {
//                 campoNombre.style.border = '1px solid #708090';
//                 alerta.style.display = 'none'
    
//             }, 3600);
//         }
    
//         if(campoApellido.value.trim() === ''){
//             campoApellido.style.border = '1px solid #EF4444';
//             alerta.style.display = 'block'
    
    
//             setTimeout(function() {
//                 campoApellido.style.border = '1px solid #708090';
//                 alerta.style.display = 'none'
    
//             }, 3600);
//         }
    
//         if(campoEmail.value.trim() === ''){
//             campoEmail.style.border = '1px solid #EF4444';
//             alerta.style.display = 'block'
    
    
//             setTimeout(function() {
//                 campoEmail.style.border = '1px solid #708090';
//                 alerta.style.display = 'none'
    
//             }, 3600);
//         }
    
//         if(cajaTexto.value.trim() === ''){
//             cajaTexto.style.border = '1px solid #EF4444';
//             alerta.style.display = 'block';
    
    
//             setTimeout(function() {
//                 cajaTexto.style.border = '1px solid #708090';
//                 alerta.style.display = 'none'
    
//             }, 3600);
//         }
//     }


//     if(formulario){
//         success.style.display = 'block'

//         setTimeout(function() {
//             success.style.display = 'none'
//         },3600)
//     }
// }
// );

const formulario = document.getElementById('formularioJs');
const campoNombre = document.getElementById('nombre');
const campoApellido = document.getElementById('apellido');
const campoEmail = document.getElementById('email');
const campoHelp = document.getElementById('cajaTexto');
const alerta = document.getElementById('errorBlock');
const success = document.getElementById('successBlock');

function todosLosCamposSonValidos() {
    if (campoNombre.value.trim() === '') {
        return false;
    }

    if (campoApellido.value.trim() === '') {
        return false;
    }

    if (campoEmail.value.trim() === '') {
        return false;
    }

    if (campoHelp.value.trim() === '') {
        return false;
    }

    return true;
}

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    if (campoNombre.value.trim() === '') {
        campoNombre.style.border = '1px solid #EF4444';
        alerta.style.display = 'block';

        setTimeout(function() {
            campoNombre.style.border = '1px solid #708090';
            alerta.style.display = 'none';
        }, 3600);
    }

    if (campoApellido.value.trim() === '') {
        campoApellido.style.border = '1px solid #EF4444';
        alerta.style.display = 'block';

        setTimeout(function() {
            campoApellido.style.border = '1px solid #708090';
            alerta.style.display = 'none';
        }, 3600);
    }

    if (campoEmail.value.trim() === '') {
        campoEmail.style.border = '1px solid #EF4444';
        alerta.style.display = 'block';

        setTimeout(function() {
            campoEmail.style.border = '1px solid #708090';
            alerta.style.display = 'none';
        }, 3600);
    }

    if (campoHelp.value.trim() === '') {
        campoHelp.style.border = '1px solid #EF4444';
        alerta.style.display = 'block';

        setTimeout(function() {
            campoHelp.style.border = '1px solid #708090';
            alerta.style.display = 'none';
        }, 3600);
    }

    if (todosLosCamposSonValidos()) {
        success.style.display = 'block';
        campoNombre.value = ''
        campoApellido.value = ''
        campoHelp.value = ''

        setTimeout(function() {
            success.style.display = 'none';
        }, 3600);
    }
});
