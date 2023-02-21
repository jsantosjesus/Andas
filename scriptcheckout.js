let carrinho = JSON.parse(localStorage.getItem("carrinho"));
if (carrinho == null) {
    carrinho = [];
}

function alertaCarrinho() {
    window.alert(JSON.stringify(carrinho))
}
let total;
function listarProdutosCarrinho() {
    total = 0;
    let subtotal = 0;
    let listaProdutos = document.querySelector('#carrinho-produtos');
    let botaoFinalizar = document.querySelector('.finalizarCompra');
    let a = document.querySelector('#mudandoLinkCarrinho');

    if (carrinho.length == 0) {
        listaProdutos.innerHTML = "<p>Carrinho está vazio</p>"
        botaoFinalizar.innerHTML = "Preenche-lo"
        a.href = "loja.html"
    }
    else {
        listaProdutos.innerHTML = "";
        for (let i = 0; i < carrinho.length; i++) {
            subtotal = carrinho[i].preco * carrinho[i].quantidade;
            total += subtotal;
            listaProdutos.innerHTML += `<div class="carrinho-produtos-content">
                   <img id="imgcarrinho" src="${carrinho[i].imagem}" height="75px" widht="75px">
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
        listaProdutos.innerHTML += `<div class="divSubtotal"><b>TOTAL:      R$${total.toFixed(2).replace(".", ",")}</b></div>`
        if(carrinho.length == null){
            totalCheckout.innerHTML = `<b>Total:</b> R$0,00`;    
        }else{
        totalCheckout.innerHTML = `<b>Total:</b> R$${total.toFixed(2).replace(".", ",")}`;
        }
    }
    }

    function valorParcelas(){
        let slc = document.getElementsByClassName("selectParcelas");
        var opcaoValor = slc.options[select.selectedIndex].value;
        window.alert(opcaoValor)
        // let prcela = total * slc.value;
        // valorPclas.innerHTML = `R$${prcela.toFixed(2).replace(".", ",")}`
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