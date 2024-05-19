let cont = 0;
let p1 = prompt("Qual é o nome da parte da bicicleta onde você senta?");
let p2 = prompt("Como são chamadas as rodas da bicicleta?");
let p3 = prompt("Qual é o componente que você gira para mudar as marchas da bicicleta?");
let p4 = prompt("Qual é o nome da parte da bicicleta onde você segura enquanto pedala?");
let p5 = prompt("O que significa 'MTB' em termos de bicicletas?");
let p6 = prompt("O que significa 'BMX' em termos de bicicletas?");
let p7 = prompt("Como é chamada a parte da bicicleta onde você coloca os pés enquanto pedala?");
let p8 = prompt("Qual é o nome da peça que conecta o guidão à roda dianteira da bicicleta?");
let p9 = prompt("Qual é a parte da bicicleta que mantém a corrente no lugar?");
let p10 = prompt("Qual a melhor estação do ano para andar de bicicleta");
let msg = document.getElementById("msg");
let resultMsg = "";

if (p1 == "selim") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A PRIMEIRA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A PRIMEIRA QUESTÃO"+ "<br>" + "RESPOSTA: selim" + "<br>";
}

if (p2 == "rodas") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A SEGUNDA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A SEGUNDA QUESTÃO"+ "<br>" + "RESPOSTA: rodas"+ "<br>";
}

if (p3 == "cambio") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A TERCEIRA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A TERCEIRA QUESTÃO"+ "<br>" + "RESPOSTA: cambio"+ "<br>";
}

if (p4 == "guidao") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A QUARTA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A QUARTA QUESTÃO"+ "<br>" + "RESPOSTA: guidao"+ "<br>";
}

if (p5 == "mountain bike") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A QUINTA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A QUINTA QUESTÃO"+ "<br>" + "RESPOSTA: mountain bike"+ "<br>";
}

if (p6 == "bicycle motocross") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A SEXTA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A SEXTA QUESTÃO"+ "<br>" + "RESPOSTA: bicycle motocross"+ "<br>";
}

if (p7 == "pedal") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A SÉTIMA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A SÉTIMA QUESTÃO"+ "<br>" + "RESPOSTA: pedal"+ "<br>";
}

if (p8 == "garfo") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A OITAVA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A OITAVA QUESTÃO"+ "<br>" + "RESPOSTA: garfo"+ "<br>";
}

if (p9 == "tensionador de corrente" || p9 == "derailleur traseiro") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A NONA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A NONA QUESTÃO"+ "<br>" + "RESPOSTA: tensionador de corrente"+ "<br>";
}

if (p10 == "primavera") {
    resultMsg += "<br>" + "VOCÊ ACERTOU A DÉCIMA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A DÉCIMA QUESTÃO"+ "<br>" + "RESPOSTA: primavera" + "<br>";
}

msg.innerHTML = `VOCÊ ACERTOU ${cont} QUESTÕES:${resultMsg}`;
