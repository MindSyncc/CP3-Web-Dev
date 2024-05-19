let imagens = ['img/Bicicleta_inverno.jpg', 'img/Bicicleta_outono.jpg', 'img/Bicicleta_primavera.jpg', 'img/Bicicleta_verao.jpg'];
let index = 0;
let time = 3000;

//ROLAR SLIDES AUTOMATICAMENTE

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){nextImage();    
}, 5000)
function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

//MUDAR CORES
let cores = ["rgb(120, 120, 120)", "rgb(200, 200, 200)", "rgb(255, 255, 255)"];
let indiceCor = 0;

function mudarCor() {
    document.body.style.backgroundColor = cores[indiceCor];
    indiceCor = (indiceCor + 1) % cores.length;
}

window.addEventListener('load', function() {
    this.setInterval(function() {
        mudarCor();
    }, 5000);
});
function msgAlerta() {
    alert("Seja bem-vindo!");
}
setTimeout(msgAlerta, 1000);
