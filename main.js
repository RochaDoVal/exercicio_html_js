const form = document.getElementById("form-list");
let campoA = document.getElementById("campo-a");
let campoB = document.getElementById("campo-b")

form.addEventListener('submit',function(e) {
    e.preventDefault();


    const mensagemResposta = document.getElementById("mensagem-resposta")

    const mensagemV = 'A analize é valida'

    const mensagemA = 'O valor de A e maior que de B'

    const mensagemB = 'Os valores são iguais'

    if(campoB.value > campoA.value) {
        mensagemResposta.innerHTML = mensagemV
        mensagemResposta.style.display = "block"
    }

    if( campoB.value == campoA.value) {
        mensagemResposta.innerHTML = mensagemB
        mensagemResposta.style.display = "block"
    }

    if (campoB.value < campoA.value) {
        mensagemResposta.innerHTML = mensagemA
        mensagemResposta.style.display = "block"
    }
})



