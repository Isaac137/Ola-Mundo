var date = new Date()
var dia = date.getDay()
console.log('Hoje é: ')
switch (dia) {
    case 0:
        console.log('DOMINGO')
        break
    case 1:
        console.log('SEGUNDA-FEIRA')
        break
    case 2:
        console.log('TERÇA-FEIRA')
        break
    case 3:
        console.log('QUARTA-FEIRA')
        break
    case 4:
        console.log('QUINTA-FEIRA')
        break
    case 5:
        console.log('SEXTA-FEIRA')
        break
    case 6:
        console.log('SÁBADO')
        break
}
console.log('Tenha um bom dia!')