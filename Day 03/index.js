alert('Bem-Vindo!')
const area = prompt(`Atualmente Você está pretendendo focar na área de 'Front-End' ou 'Back-End'? Digite o nome da área`);
let linguagem="";
    if(area === "Front-End"){
        linguagem = prompt("Você quer aprender React ou Vue?");
    }
    else if (area === "Back-End"){
        linguagem = prompt("Você quer aprender C# ou Java?");
    }
    else{
        alert("Você  não inseriu uma área válida!");
    }
const especializarOuFullStack = prompt("Digite 1 para se especializar na área escolhida ou 2 para se tornar um FullStack");
    if(especializarOuFullStack == 1){
        alert(`Continue focando em ${linguagem} para dominar a área de ${area}`)
    }
    else if (especializarOuFullStack == 2){
        alert(`Está na hora de começar a aprender novas linguagens além de ${linguagem} se o foco é se tornar FullStack!`);
    }
    else{
        alert("Você não inseriu um valor válido!")
    }

    let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}


