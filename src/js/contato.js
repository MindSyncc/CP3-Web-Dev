function validar() {
    var nome = document.getElementById('nome').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    var email = document.getElementById('email').value.trim();

    if (nome == "" || telefone== "" || email == "") {
        alert("Um dos campos ficou vazio")
    }
    else{
        alert("Validando...")
    }
}