const user_name = document.getElementById("user_name");
const user_username = document.getElementById("user_username");
const user_email = document.getElementById("user_email");
const user_street = document.getElementById("user_street");

window.onload = () => {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      
    obtenerValorDelApi();
}

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

const msjAdvertencia = () => {
    toastr["warning"]("Opción no válida!")
}

const msjProgreso = () => {
    toastr["info"]("Funcionalidad proxima a desarrollar...")
}

const imprimirOpcion = () => {
    const sel = document.getElementById("select");
    const opcion = sel.options[sel.selectedIndex];

    console.log(opcion.value);

    if(opcion.value === "nooption") {
        msjAdvertencia();
        limpiar();

        return false;
    }
       
    obtenerValorDelApiEspecifico(`https://jsonplaceholder.typicode.com/users/${opcion.value}`);

}

const obtenerValorDelApiEspecifico = (url) => {
    
    const loader = document.getElementById("loader");
    loader.style.display = "block";

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => {

            user_name.innerHTML = resultado.name;
            user_username.innerHTML = resultado.username;
            user_email.innerHTML = resultado.email;
            user_street.innerHTML = resultado.address.street;

        loader.style.display = "none";
    })
    .catch((error) => {
        console.log(error);
        msjAdvertencia();
        limpiar();
        loader.style.display = "none";
        
    });
}

const limpiar = () => {
    user_name.innerHTML = "Name";
    user_username.innerHTML = "Username";
    user_email.innerHTML = "Email";
    user_street.innerHTML = "Street";
}
