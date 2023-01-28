(function(){
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', validarForm);

    function validarForm(e){
        e.preventDefault();
        const inputs = document.querySelectorAll('.formulario__input');
        let pass = true;
        inputs.forEach(e => {
            nameInput = e.name.split('').map((a, i) => i === 0 ? a.toUpperCase() : a).join(''); 
            const mensajeRepetido = e.parentElement.querySelector('.mensaje');
            if(mensajeRepetido){
                mensajeRepetido.remove();
            }
            if(e.value.trim() === ''){
                mostrarAlerta(`${nameInput} no puede estar vacio.`, e.parentElement);
                pass = false;
            }
        });

        pass == true ? (mostrarAlerta(`Buscando`, formulario), formulario.reset()) : '';
    }

    function mostrarAlerta(mensaje,  selector){
        
        const parrafoMensaje = document.createElement('P');
        parrafoMensaje.classList.add('mensaje');
        parrafoMensaje.textContent = mensaje;
        parrafoMensaje.style.color = 'White';
        parrafoMensaje.style.fontWeight = 'Bold';
        parrafoMensaje.style.fontSize = '1.5rem';

        selector.appendChild(parrafoMensaje);

        setTimeout(() => {
            parrafoMensaje.remove();
        }, 3000);
    }
})();