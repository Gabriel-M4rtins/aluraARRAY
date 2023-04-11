const btnOrdenarPorPreco = document.getElementById ('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarlivrosprecos)

function ordenarlivrosprecos() {
    let livrosordenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosordenados)
}