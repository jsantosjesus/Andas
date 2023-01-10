// let produtosCarrinho = [['p1', 'nome1', 59.99, 'id01', 1], ['p2', 'nome2', 79.99, 'id02', 1]];

// function carregarProdutosCarrinho(){
//  let produtos = document.querySelector('#carrinho-produtos');
//  produtos.innerHTML = "";
//     produtosCarrinho.forEach(function (item, indice){
//         produtos.innerHTML += 
//         `<div class="carrinho-produtos-content">
//             <img src="imagens/produtos/${item[0]}.webp" height="75px" widht="75px">
//             <p class="nome-produto">${item[1]}</p>
//             <div class="quantidade-produtos-carrinho">
//                 <button class="aumentar-produto-carrinho" onclick="diminuir(${item})">-</button>
//                 <p class="quantidade-produto-carrinho">${item[4]}</p>
//                 <button class="diminuir-produto-carrinho" onclick="somar(${item})">+</button>
//                 <i class="fa-solid fa-trash lixo"></i>
//             </div>
//             <p id="preco-produto-carrinho">R$${item[2]}</p>
//         </div>`;

//     })

// }


// function adicionar(){
//     produtosCarrinho.push('laranja')

// }
// carregarProdutosCarrinho()



let carrinho = JSON.parse(localStorage.getItem("carrinho"));
if (carrinho == null) {
    carrinho = [];
}
let produtos = [

    {
        id: "p01",
        nome: "Camisa Tricolor",
        imagem: "imagens/produtos/p1.webp",
        preco: 59.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p02",
        nome: "Camisa regata",
        imagem: "imagens/produtos/p2.webp",
        preco: 39.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p03",
        nome: "Camisa Lisa",
        imagem: "imagens/produtos/p3.webp",
        preco: 79.99,
        tamanhos: ["p", "m", "g"]
    }

]


function listarProdutos() {

    let dProdutos = document.querySelector('#divProdutos');

    dProdutos.innerHTML = "";
    for (let i = 0; i < produtos.length; i++) {
        dProdutos.innerHTML += 
    `<div class="carousel-item">
        <div class="card" >
            <div class="img-wrapper">
                <img src="${produtos[i].imagem}">
            </div>
                <div class="card-body">
                    <h5 class="card-title">${produtos[i].nome}</h5>
                    <p>R$ ${produtos[i].preco.toFixed(2).replace(".", ",")}</p>
                    <button onclick='adicionarProduto(${JSON.stringify(produtos[i])})'>Adicionar ao Carrinho</button>
                </div>
        </div>
    </div>`;
    }
}

function adicionarProduto(produto) {
    let encontrado = false;
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].nome == produto.nome) {
            carrinho[i].quantidade++;
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        produto.quantidade = 1;
        carrinho.push(produto);
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    listarProdutosCarrinho()
}

function alertaCarrinho() {
    window.alert(JSON.stringify(carrinho))
}

function listarProdutosCarrinho() {
    let total = 0;
    let subtotal = 0;
    let listaProdutos = document.querySelector('#carrinho-produtos');

    listaProdutos.innerHTML = "";
    for (let i = 0; i < carrinho.length; i++) {
        subtotal = carrinho[i].preco * carrinho[i].quantidade;
        total += subtotal;
        listaProdutos.innerHTML += `<div class="carrinho-produtos-content">
                   <img src="${carrinho[i].imagem}" height="75px" widht="75px">
                     <p class="nome-produto">${carrinho[i].nome}</p>
                     <div class="quantidade-produtos-carrinho">
                         <button class="aumentar-produto-carrinho" onclick="alterarQuantidade(${i}, -1)">-</button>
                         <p class="quantidade-produto-carrinho">${carrinho[i].quantidade}</p>
                         <button class="diminuir-produto-carrinho" onclick="alterarQuantidade(${i}, +1)">+</button>
                         <i class="fa-solid fa-trash lixo" onclick="excluirProduto(${i})"></i>
                     </div>
                     <p id="preco-produto-carrinho">R$${subtotal.toFixed(2).replace(".", ",")}</p>
                 </div>`;
    }
}

function alterarQuantidade(indice, valor) {
    carrinho[indice].quantidade += valor;
    if (carrinho[indice].quantidade <= 0) {
        carrinho[indice].quantidade = 1;
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    listarProdutosCarrinho();
}

function excluirProduto(indice) {
        carrinho.splice(indice, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        listarProdutosCarrinho();

}