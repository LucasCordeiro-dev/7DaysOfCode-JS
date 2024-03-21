const nome = prompt("YO! Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const lingaugem = prompt("Qual linguagem de programação está estudando?");
const msg = `Olá ${nome}! Você tem ${idade} e já está vendo ${lingaugem}? Boaaa!`
alert(msg);

const pergunta = prompt(`Você gosta de estudar ${lingaugem}? Responda 1 para SIM  e 2 para NÃO `)
    if(pergunta == 1){
        alert(`É isso ai ${nome}! ${lingaugem} nao é fácil porém nao é impossível! Foco no código.`)
    }
    else if(pergunta ==2){
        alert(`Analise seus objetivos e veja se isso está em suas prioridades,invista sempre em conhecimentos que te agreguem em seus objetivos`)
    }