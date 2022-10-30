// Para fazer o menu mobile abrir e fechar corretamente
function UseMenu() {
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

//para fazer o ver mais dos projetos

function SeeMore1() {
    var a = document.getElementsByClassName('proj-desc')[0]
    if (a.style.display == 'none') {
        a.style.display = 'block'
    } else {
        a.style.display = 'none'
    }
}

function SeeMore2() {
    var a = document.getElementsByClassName('proj-desc')[1]
    if (a.style.display == 'none') {
        a.style.display = 'block'
    } else {
        a.style.display = 'none'
    }
}

function SeeMore3() {
    var a = document.getElementsByClassName('proj-desc')[2]
    if (a.style.display == 'none') {
        a.style.display = 'block'
    } else {
        a.style.display = 'none'
    }
}

function SeeMore4() {
    var a = document.getElementsByClassName('proj-desc')[3]
    if (a.style.display == 'none') {
        a.style.display = 'block'
    } else {
        a.style.display = 'none'
    }
}