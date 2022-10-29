function Clicou() {
    var botao1 = document.querySelector("span#botao-menu")
    var fundo = document.querySelector("div#menu-mobile")
    var body = document.getElementsByTagName('body')[0]
    var botao2 = document.getElementById('botao-menu-2')

    if (botao1.style.display == 'block') {
        botao1.style.display = 'none'
        botao2.style.display = 'block'
        fundo.style.display = 'block' 
        body.style.overflowY = 'hidden'
    } else {
        botao1.style.display = 'block'
        botao2.style.display = 'none'
        fundo.style.display = 'none'
        body.style.overflowY = 'scroll'
    }
}