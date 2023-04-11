const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosfiltrados = categoria == 'disponivel' ? FiltrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosfiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotaldeLivrosDisponiveis (livrosfiltrados)
        livrosfiltrados
        exibirValorTotaldosLivrosDisponiveis (valorTotal)
    }

    function FiltrarPorCategoria() {
        return livros.filter(livros => livros.categoria == categoria)
    }
}

function FiltrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotaldosLivrosDisponiveis (valorTotal) {
    elementoComValorToaldelivrosDisponivel.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`
}