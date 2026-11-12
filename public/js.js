const formulario = document.getElementById('formContato')
const resultado = document.getElementById('resultado')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = document.getElementById('nome').value

    resultado.textContent = `Mensagem enviada com sucesso, ${nome}!`
    resultado.style.color = 'green'

    formulario.reset()
})