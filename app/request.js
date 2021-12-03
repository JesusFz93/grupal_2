const obtenerValorDelApi = () => {

    const loader = document.getElementById("loader");
    loader.style.display = "block";

    const url = 'https://jsonplaceholder.typicode.com/users';
            
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => {

            const sel = document.getElementById("select");
                                            
            for(let i = 0; i < resultado.length; i++) {
                let opt = document.createElement('option');
                opt.innerHTML = resultado[i].name;
                opt.value = resultado[i].id;
                sel.appendChild(opt);
            }
    });

    
    loader.style.display = "none";
}


window.onload = () => {
    obtenerValorDelApi();
    toastr["success"]("Bienvenido a la pagina de prueba de la API de JSONPlaceholder", "Bienvenido");
}

const imprimirOpcion = () => {
    const sel = document.getElementById("select");
    const opcion = sel.options[sel.selectedIndex];

    obtenerValorDelApiEspecifico(`https://jsonplaceholder.typicode.com/users/${opcion.value}`);
}

const obtenerValorDelApiEspecifico = (url) => {
    
    const loader = document.getElementById("loader");
    loader.style.display = "block";

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => {

            const user_name = document.getElementById("user_name");
            const user_username = document.getElementById("user_username");
            const user_email = document.getElementById("user_email");
            const user_street = document.getElementById("user_street");

            user_name.innerHTML = resultado.name;
            user_username.innerHTML = resultado.username;
            user_email.innerHTML = resultado.email;
            user_street.innerHTML = resultado.address.street;

        loader.style.display = "none";
    })
    .catch((error) => {
        console.log(error);
        loader.style.display = "none";
    });
}