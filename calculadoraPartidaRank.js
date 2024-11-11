// Calculadora de partidas rankeadas

//  Oque de ve ser utilizado:
// - variaveis 
// - Operadores
// - Laços de reptição
// - Estrutura de decisões
// - Funções

//  Crie uma fução que recebe como parametro a quantidade de vitorias e derrotas de um jogador, 
//  depois disso retorne o resultado para uma variavel, o saldo de rankeadas deve ser feito atraves do calculo ( vitorias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100 = Lendário
// Se vitórias for maior ou igual a 101 = Imortal

//  No final deve ser exibido uma mensagem:
// " O heroi tem o saldo de **{saldoVitorias}** esta no nivel: **{nivel}**" 

function niveis(vitorias) {
    if (vitorias <= 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendario";
    } else if (vitorias > 100) {
        return "Imortal";
    } else {
        return "Nivel invalido";
    }
}

function calcula(a, b){
    return a - b;
}


var vitoriasAleatoria = Math.floor(Math.random() * 110) + 1;
var derrotasAleatoria = Math.floor(Math.random() * 110) + 1;

var rank = calcula(vitoriasAleatoria,derrotasAleatoria);

let name = 'Super Dev';

let User = niveis(rank)
console.log(`O heroi ${name} tem: ${rank} vitorias e esta no nivel ${User}`);








