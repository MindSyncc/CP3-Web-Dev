function logar() {
    
    var login = document.getElementById('usuario').value.trim();
    var senha = document.getElementById('senha').value;


    if(login == "admin" && senha == "1234") {
        alert("Sucesso!");
        location.href = "quiz.html";
    }
    else if(login == "" || senha == ""){
        alert("Um dos campos ficou vazio")
    } 
    else {
        alert("Usuario ou senha incorretos")
    }
}