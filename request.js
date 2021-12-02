    // Funcion que llenar las opciones en el select 
    
    function obtenerValorDelApi() {

        const url = 'https://jsonplaceholder.typicode.com/users';
                
        fetch(`https://jsonplaceholder.typicode.com/usersl`)
            .then((respuesta) => respuesta.json())
            .then((resultado) => {

                const sel = document.getElementById("select"); // capturamos el elemento select del dom
                                                
                for(var i = 0; i < resultado.length; i++) {
                    var opt = document.createElement('option');
                    opt.innerHTML = resultado[i].name;
                    console.log(opt);
                    sel.appendChild(opt);
                }
        });
    }

obtenerValorDelApi();
