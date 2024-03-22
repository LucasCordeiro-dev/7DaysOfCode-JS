alert('Bem-Vindo!')
let pergunta = prompt(`Atualmente Você está pretendendo focar em qual área? Responda 1 para FRONT-END e 2 para BACK-END `)
if (pergunta == 1) {
    const react = "React"
    const vue = "Vue"
    let respostaFront = prompt(`Você gostaria de aprender ${react} ou ${vue} ? Responda 1 para ${react} e 2 para ${vue}`)
    let escolha;
    if (respostaFront == 1) {
        escolha = react;
        alert('Boa! O React é uma biblioteca baseada em componentes, o que significa que permite a criação de interfaces de usuário modulares e reutilizáveis. Os componentes React podem ser facilmente compostos para construir interfaces de usuário complexas, promovendo a reutilização de código e a manutenibilidade.')
    }

    else if (respostaFront == 2) {
        escolha = vue;
        alert('Legal! Vue.js é conhecido por sua curva de aprendizado suave. Sua sintaxe simples e direta torna mais fácil para os desenvolvedores iniciantes e experientes começarem rapidamente a desenvolver aplicativos.')
    }

    let fullstack = "FullStack"
    let duvida = prompt(`Você pretende se especializar em ${escolha} (Responda com 0) ou se tornar ${fullstack}? (Responda com 1).`)
    let opcao;
    if (duvida == 0) {
        opcao = `${escolha}`
        alert(`${escolha} é uma ótima opçao! Continue firme na sua jornada, dev!`)
    }

    else if (duvida == 1) {
        opcao = `${fullstack}`
        alert(`${fullstack} é sem dúvidas uma excelente opcao para abranger os conhecimentos e ter capacidade de auxiliar em diferentes áreas dentro de um projeto,Boa!`)
    }

    let tecnologias = prompt(`Quais tecnologias você gostaria de se especializar ou conhecer?`)
    alert(`${tecnologias} é sem dúvidas uma excelente escolha, vai fundo!`)
    const loop = prompt(`Tem mais alguma tecnologia que você gostaria de aprender? S / N`)
    while (loop == 'S') {
        let novaTecnologia = prompt(`Quais tecnologias você gostaria de se especializar ou conhecer?`);
        tecnologias += ', ' + novaTecnologia; // Adiciona a nova tecnologia à lista existente
        alert(`${novaTecnologia} é sem dúvidas uma excelente escolha, vai fundo!`);
        loop = prompt(`Tem mais alguma tecnologia que você gostaria de aprender? S / N`);
    }

    //Falta finalizar o loop e adicionar a parte do BACKEND!!
}
