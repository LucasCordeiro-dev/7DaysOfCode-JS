const numeroUm = 1
const stringUm = '1'
const numeroTrinta = 30
const stringTrinta = '30'
const numeroDez = 10
const stringDez = '10'

    const msg = alert(' numeroUm = 1\n stringUm = "1"\n numeroTrinta = 30\n stringTrinta = "30"\n numeroDez = 10\n stringDez = "10"')

    if (numeroUm == stringUm)
        alert("As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes");
    else {
        alert("As variáveis numeroUm e stringUm não tem o mesmo valor");
    }

    if (numeroTrinta === stringTrinta)
        alert('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
    else {
        alert('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
    }

    if (numeroDez == stringDez) {
        alert('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
    } else {
        alert('As variáveis numeroDez e stringDez não tem o mesmo valor')
    }
