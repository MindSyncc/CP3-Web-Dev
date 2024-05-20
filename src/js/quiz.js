let cont = 0;
let p1 = prompt("Qual é o nome da macromolécula responsável por reparar os tecidos do corpo? Escreva a primeira letra em maiúsculo para as demais perguntas também");
let p2 = prompt("Qual é o nome da biomolécula principal responsável por fornecer energia ao nosso corpo?");
let p3 = prompt("Qual é o nome do suplemento mais popular para obtenção de proteína?");
let p4 = prompt("Esteira, Bicicleta ergométrica e Elíptico, são máquinas de:");
let p5 = prompt("Qual é o nome atrubuído a um companheiro de academia?");
let p6 = prompt("Nome do método/processo baseado na ingestão calórica excedente ao que o corpo gasta em energia:");
let p7 = prompt("Nome do método/processo em que a quantidade de calorias consumida é menor do que a quantidade consumida pelo corpo:");
let p8 = prompt("Nome do acessório responsável em proporcionar uma aderência firme em equipamentos, como barras e halteres, melhorando o controle e a estabilidade durante os exercícios:");
let p9 = prompt("Qual é o nome do exercício mais famoso para desenvolver o peito?");
let p10 = prompt("Nome do suplemento que serve como fonte de produção de energia para as células musculares, de modo que melhora a força e o tônus muscular:");
let msg = document.getElementById("msg");
let resultMsg = "";

if (p1 == "Proteína") {
    resultMsg += "<br>" + "VOCÊ ACERTOU A PRIMEIRA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A PRIMEIRA QUESTÃO"+ "<br>" + "RESPOSTA: selim" + "<br>";
}

if (p2 == "Carboidrato") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A SEGUNDA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A SEGUNDA QUESTÃO"+ "<br>" + "RESPOSTA: rodas"+ "<br>";
}

if (p3 == "Whey") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A TERCEIRA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A TERCEIRA QUESTÃO"+ "<br>" + "RESPOSTA: cambio"+ "<br>";
}

if (p4 == "Cardio") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A QUARTA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A QUARTA QUESTÃO"+ "<br>" + "RESPOSTA: guidao"+ "<br>";
}

if (p5 == "Gymbro") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A QUINTA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A QUINTA QUESTÃO"+ "<br>" + "RESPOSTA: mountain bike"+ "<br>";
}

if (p6 == "Bulking") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A SEXTA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A SEXTA QUESTÃO"+ "<br>" + "RESPOSTA: bicycle motocross"+ "<br>";
}

if (p7 == "Cutting") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A SÉTIMA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A SÉTIMA QUESTÃO"+ "<br>" + "RESPOSTA: pedal"+ "<br>";
}

if (p8 == "Strap") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A OITAVA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A OITAVA QUESTÃO"+ "<br>" + "RESPOSTA: garfo"+ "<br>";
}

if (p9 == "Supino") {
    resultMsg += "<br>" + "<br>" + "VOCÊ ACERTOU A NONA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A NONA QUESTÃO"+ "<br>" + "RESPOSTA: tensionador de corrente"+ "<br>";
}

if (p10 == "Creatina") {
    resultMsg += "<br>" + "VOCÊ ACERTOU A DÉCIMA QUESTÃO" + "<br>";
    cont++;
} else {
    resultMsg += "<br>" + "ERROU A DÉCIMA QUESTÃO"+ "<br>" + "RESPOSTA: primavera" + "<br>";
}

msg.innerHTML = `VOCÊ ACERTOU ${cont} QUESTÕES:${resultMsg}`;
