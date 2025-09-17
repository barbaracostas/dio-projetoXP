let herois = prompt ("Quantos herois você gostaria de adicionar?")
//Laço de repetição
for (i=0; i<herois; i++){
    //Informações de usuário e declaração de variáveis
    let nome = prompt ("Informe o seu nome: ");
    let quantidadeXP = prompt("Informe a quantidade de XP: ");

    let nivel;

    //Estrutura de decisão
    if (quantidadeXP < 1000){
        nivel = "Ferro";
    }else if (quantidadeXP > 1000 && quantidadeXP <= 2000){
        nivel = "Bronze";
    }else if (quantidadeXP > 2000 && quantidadeXP <= 5000){
        nivel = "Prata";
    }else if (quantidadeXP > 5000 && quantidadeXP <= 7000){
        nivel = "Ouro";
    }else if (quantidadeXP > 7000 && quantidadeXP <= 8000){
        nivel = "Platina";
    }else if (quantidadeXP > 8000 && quantidadeXP <= 9000){
        nivel = "Ascendente";
    }else if (quantidadeXP > 9000 && quantidadeXP <= 10000){
        nivel = "Imortal";
    }else {
        nivel = "Radiante";
    }
    //Saída de dados
    console.log (`O Herói de nome ${nome} está no nível de ${nivel}`);
}

