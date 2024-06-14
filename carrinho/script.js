// Feito por mim

let btn = document.getElementById("btn");
let cart = document.getElementById("cart");

const produto = {
    nome: "Camiseta",
    preco: 29.99,
    quantidade: 1,
}

function adicionarAoCarrinho(product) {
    product = {
        ...produto,
    } 
    let produtoNoCarrinho = document.createElement("div");
    produtoNoCarrinho.className = "produto-no-carrinho";
    produtoNoCarrinho.innerHTML = `awdawd`;
    cart.appendChild(produtoNoCarrinho);
    console.log(produtoNoCarrinho)
}

// Feito pelo youtube