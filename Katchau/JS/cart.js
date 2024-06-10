function addProductToCart() {
    var produto =
    {
        name: "Nome do produto",
        price: 200,
        qty: 10,
    }

    addProductToCart(produto)
}

function addToCart (produto) {
    var carrinho = document.getElementById("cart");

}

// CODFIGO

// Codigo html

<button id="btnCart" onclick="adicionarProdutoAoCarrinho()">Adicionar ao Carrinho</button>
<div id="cart"></div>


function adicionarProdutoAoCarrinho() {
    // Criar um novo elemento de produto
    var produto = {
        id: 1,
        nome: "Produto A",
        preco: 10.00
    };
    
    // Adicionar o produto ao carrinho
    adicionarAoCarrinho(produto);
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto) {
    // Verificar se o carrinho já existe
    var carrinho = document.getElementById('cart');
    
    // Criar um novo elemento de produto para exibir no carrinho
    var novoProduto = document.createElement('div');
    novoProduto.textContent = produto.nome + " - R$" + produto.preco.toFixed(2);
    
    // Adicionar o novo produto ao carrinho
    carrinho.appendChild(novoProduto);
}