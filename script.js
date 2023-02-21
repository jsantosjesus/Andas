
let carrinho = JSON.parse(localStorage.getItem("carrinho"));
if (carrinho == null) {
    carrinho = []
}
let produtos = [

    {
        id: "p01",
        nome: "Camisa Tricolor",
        descricao: "",
        imagem: "imagens/produtos/p1.webp",
        preco: 59.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p02",
        nome: "Camisa marrom infantil",
        descricao: "",
        imagem: "imagens/produtos/marrom.webp",
        preco: 39.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p03",
        nome: "Shopping Infantil",
        descricao: "",
        imagem: "imagens/produtos/shopping.webp",
        preco: 49.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p04",
        nome: "baby look azul",
        descricao: "",
        imagem: "imagens/produtos/babylookazul.webp",
        preco: 59.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p05",
        nome: "Camisa Lisa",
        descricao: "",
        imagem: "imagens/produtos/p3.webp",
        preco: 79.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p06",
        nome: "Camisa Brasil",
        descricao: "",
        imagem: "imagens/produtos/dryfitbrasil.webp",
        preco: 79.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p07",
        nome: "Baby look fashion",
        descricao: "",
        imagem: "imagens/produtos/babylookpreta.webp",
        preco: 59.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p08",
        nome: "Camisa queen",
        descricao: "",
        imagem: "imagens/produtos/queen.webp",
        preco: 89.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p09",
        nome: "Camisa rock roll",
        descricao: "",
        imagem: "imagens/produtos/rock.webp",
        preco: 109.99,
        tamanhos: ["p", "m", "g"]
    }

]

let masculinas = [

    {
        id: "p01",
        nome: "Camisa Tricolor",
        descricao: "",
        imagem: "imagens/produtos/p1.webp",
        preco: 59.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p05",
        nome: "Camisa Lisa",
        descricao: "",
        imagem: "imagens/produtos/p3.webp",
        preco: 79.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p06",
        nome: "Camisa Brasil",
        descricao: "",
        imagem: "imagens/produtos/dryfitbrasil.webp",
        preco: 79.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p08",
        nome: "Camisa queen",
        descricao: "",
        imagem: "imagens/produtos/queen.webp",
        preco: 89.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p09",
        nome: "Camisa rock roll",
        descricao: "",
        imagem: "imagens/produtos/rock.webp",
        preco: 109.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p11",
        nome: "Regata Machão",
        descricao: "",
        imagem: "imagens/produtos/p2.webp",
        preco: 109.99,
        tamanhos: ["p", "m", "g"]
    }
]

let infantis = [


    {
        id: "p02",
        nome: "Camisa marrom infantil",
        descricao: "",
        imagem: "imagens/produtos/marrom.webp",
        preco: 39.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p03",
        nome: "Shopping Infantil",
        descricao: "",
        imagem: "imagens/produtos/shopping.webp",
        preco: 49.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p10",
        nome: "Infantil Florida",
        descricao: "",
        imagem: "imagens/produtos/infantilflorida.webp",
        preco: 49.99,
        tamanhos: ["p", "m", "g"]
    },

]

let femininas = [

    {
        id: "p04",
        nome: "baby look azul",
        descricao: "",
        imagem: "imagens/produtos/babylookazul.webp",
        preco: 59.99,
        tamanhos: ["p", "m", "g"]
    },



    {
        id: "p07",
        nome: "Baby look fashion",
        descricao: "",
        imagem: "imagens/produtos/babylookpreta.webp",
        preco: 59.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p12",
        nome: "Baby look rock roll",
        descricao: "",
        imagem: "imagens/produtos/babylookrock.webp",
        preco: 59.99,
        tamanhos: ["p", "m", "g"]
    }, 

    {
        id: "p13",
        nome: "Baby look Mundi",
        descricao: "",
        imagem: "imagens/produtos/babylookmundi.webp",
        preco: 59.99,
        tamanhos: ["p", "m", "g"]
    },

    {
        id: "p14",
        nome: "Baby look Off White",
        descricao: "",
        imagem: "imagens/produtos/offwhitebabylook.webp",
        preco: 59.99,
        tamanhos: ["p", "m", "g"]
    }

]



function listarProdutos() {

    //let dProdutos = document.querySelector('.divProdutosCarrossel');

    divProdutos.innerHTML = "";
    let container = "";
    for (let i = 0; i < produtos.length; i++) {
        if (container == "") {
            container += `<div class="carousel-item text-center ${i == 0 ? "active" : ""}">`;
        }
        container +=
            `<div class="pdt" >
                    <div class="imagemCarrossel">
                        <img src="${produtos[i].imagem}">
                    
                        <div class="dentroImagemCarrossel">
                            <h5 class=""><b>${produtos[i].nome}</b></h5>
                            <p>R$ ${produtos[i].preco.toFixed(2).replace(".", ",")}</p>
                            <button data-bs-toggle="modal" data-bs-target="#CarrinhoModal" onclick='adicionarProduto(${JSON.stringify(produtos[i])})'>COMPRAR</button>
                        </div>
                        </div>
                </div>`;
        if (i % 3 == 2) {
            container += `</div>`;
            divProdutos.innerHTML += container;
            container = "";
        }
    }
    if (container != "") {
        container += `</div>`;
        divProdutos.innerHTML += container;
        container = "";
    }
    pli = document.querySelector('.produtosLojaIndex');
    for (let i = 0; i < produtos.length; i++) {
        pli.innerHTML += `
           
           <div class="pdt" >
                        <div class="imagemCarrossel">
                            <img src="${produtos[i].imagem}">
                        
                            <div class="dentroImagemCarrossel">
                                <h5 class=""><b>${produtos[i].nome}</b></h5>
                                <p>R$ ${produtos[i].preco.toFixed(2).replace(".", ",")}</p>
                                <button data-bs-toggle="modal" data-bs-target="#CarrinhoModal" onclick='adicionarProduto(${JSON.stringify(produtos[i])})'>COMPRAR</button>
                            </div>
                            </div>
                    
                    
                    </div>`
    }


}
function listarProdutosMasculinas() {
    pli = document.querySelector('.produtosLojaMasculinas');
    for (let i = 0; i < masculinas.length; i++) {
        pli.innerHTML += `
       
       <div class="pdt" >
                    <div class="imagemCarrossel">
                        <img src="${masculinas[i].imagem}">
                    
                        <div class="dentroImagemCarrossel">
                            <h5 class=""><b>${masculinas[i].nome}</b></h5>
                            <p>R$ ${masculinas[i].preco.toFixed(2).replace(".", ",")}</p>
                            <button data-bs-toggle="modal" data-bs-target="#CarrinhoModal" onclick='adicionarProduto(${JSON.stringify(masculinas[i])})'>COMPRAR</button>
                        </div>
                        </div>
                
                
                </div>`
    }

}

function listarProdutosFemininas() {
    pli = document.querySelector('.produtosLojaMasculinas');
    for (let i = 0; i < femininas.length; i++) {
        pli.innerHTML += `
       
       <div class="pdt" >
                    <div class="imagemCarrossel">
                        <img src="${femininas[i].imagem}">
                    
                        <div class="dentroImagemCarrossel">
                            <h5 class=""><b>${femininas[i].nome}</b></h5>
                            <p>R$ ${femininas[i].preco.toFixed(2).replace(".", ",")}</p>
                            <button data-bs-toggle="modal" data-bs-target="#CarrinhoModal" onclick='adicionarProduto(${JSON.stringify(femininas[i])})'>COMPRAR</button>
                        </div>
                        </div>
                
                
                </div>`
    }

}

function listarProdutosInfantis() {
    pli = document.querySelector('.produtosLojaMasculinas');
    for (let i = 0; i < infantis.length; i++) {
        pli.innerHTML += `
       
       <div class="pdt" >
                    <div class="imagemCarrossel">
                        <img src="${infantis[i].imagem}">
                    
                        <div class="dentroImagemCarrossel">
                            <h5 class=""><b>${infantis[i].nome}</b></h5>
                            <p>R$ ${infantis[i].preco.toFixed(2).replace(".", ",")}</p>
                            <button data-bs-toggle="modal" data-bs-target="#CarrinhoModal" onclick='adicionarProduto(${JSON.stringify(infantis[i])})'>COMPRAR</button>
                        </div>
                        </div>
                
                
                </div>`
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
        botaoFinalizar.innerHTML = "FINALIZAR COMPRA"
        a.href = "/checkout/html/DadosPessoais.html"
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


window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 550) {

        document.getElementById("menu").style.backgroundColor = "black";

    } else {
        document.getElementById("menu").style.backgroundColor = "transparent";
    }

});

function adicionarEmail() {
    if (inputEmailFooter.value == 0) {
        window.alert("Preencha com seu email!");
    } else {
        window.alert("Sucesso! Obrigado");
        inputEmailFooter.value = null;

    }
}

// personalizaveis


let tshirtOuCamisa = "camisa";
let corPl = "Preta";


function tshirtPl() {

    tshirtOuCamisa = "camisa";
    let imgPl = document.getElementById("imgpersonalizar");


    imgPl.src = `imagens/produtos/personalizaveis/${tshirtOuCamisa}${corPl}.png`;

}

function regataPl() {
    let imgPl = document.getElementById("imgpersonalizar");
    tshirtOuCamisa = "regata";
    imgPl.src = `imagens/produtos/personalizaveis/${tshirtOuCamisa}${corPl}.png`;
}

function brancaPl() {
    corPl = "Branca";
    let imgPl = document.getElementById("imgpersonalizar");
    imgPl.src = `imagens/produtos/personalizaveis/${tshirtOuCamisa}${corPl}.png`;
}

function pretaPl() {
    corPl = "Preta";
    let imgPl = document.getElementById("imgpersonalizar");
    imgPl.src = `imagens/produtos/personalizaveis/${tshirtOuCamisa}${corPl}.png`;
}

let qualEstampa = "Lisa";

function excluirEstampa() {
    foo.innerHTML = "";
    qualEstampa = "Lisa";
    tamanhoEstampa = "";
    posicaoEstampa = "";
}

function estampaCaveira() {
    foo.innerHTML = `<img id="estampa" src="imagens/produtos/personalizaveis/estampas/estampaCaveira.png" width="200px" height="200px">`
    qualEstampa = "Caveira";
}

function estampaPatins() {
    foo.innerHTML = `<img id="estampa" src="imagens/produtos/personalizaveis/estampas/estampaPatins.png">`
    qualEstampa = "Patins";
}

function estampaBart() {
    foo.innerHTML = `<img id="estampa" src="imagens/produtos/personalizaveis/estampas/estampaBart.png" width="200px" height="200px">`
    qualEstampa = "Bart";
}



window.onload = function () {
    Dragable(document.getElementById("foo"));
};

//Adiciona eventos pra navegadores modernos e antigos
function addEvent(el, type, callback) {
    if (el.addEventListener) {
        el.addEventListener(type, callback);
    } else if (el.attachEvent) {
        el.attachEvent("on" + type, callback);
    }
}

let posicaoEstampa = "";

function Dragable(el) {
    var isMove = false, //Verifica se esta se movendo
        x = 0, y = 0, //Pega as coordenadas do mouse
        xel = 0, yel = 0; // ultima posição do elemento

    addEvent(el, "mousedown", function (e) {
        isMove = true;

        el.className += " isMoving";

        x = window.event ? window.event.clientX : e.pageX;
        y = window.event ? window.event.clientY : e.pageY;


        xel = x - el.offsetLeft;
        yel = y - el.offsetTop;



    });

    addEvent(document, "mousemove", function (e) {
        if (isMove) {
            e.preventDefault();

            x = window.event ? window.event.clientX : e.pageX;
            y = window.event ? window.event.clientY : e.pageY;

            if (x > 600) {
                isMove = false;
            }
            else if (y > 400 || y < 100) {
                isMove = false;
            }
            else {

                el.style.left = (x - xel) + 'px';
                el.style.top = (y - yel) + 'px';
            }
        }
    });

    addEvent(document, "mouseup", function () {
        el.className = String(el.className).replace(/(^|\s)isMoving(\s|$)/g, " ");
        isMove = false;
    });

    let elCoordenadas = el.getBoundingClientRect();

posicaoEstampa = elCoordenadas.left.toFixed(0) + " x " + elCoordenadas.top.toFixed(0);

};

let tamanhoEstampa = "";

function alterarTamanhoEstampa() {
    let tmn = document.getElementById("ran").value;

    estampa.style.width = `${tmn}%`

    let elCoordenadas2 = estampa.getBoundingClientRect();

    
    tamanhoEstampa = elCoordenadas2.height.toFixed(0) + "px x " + elCoordenadas2.width.toFixed(0)+"px";
}

function finalizarPersonalizacao(){
    let i = 0
    i++
    personalizado = {id: "masper"+i,
    nome: tshirtOuCamisa + " masc. " + corPl + " " + qualEstampa, 
    descricao: + `(Posicao: ${posicaoEstampa}; Tamanho: ${tamanhoEstampa}`,
    imagem: "imagens/produtos/personalizada.png",
    preco: 199.99,
    tamanhos: ["p", "m", "g"]}

     let encontrado = false;
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].nome == personalizado.nome && carrinho[i].descricao == personalizado.descricao) {
            carrinho[i].quantidade++;
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        personalizado.quantidade = 1;
        carrinho.push(personalizado);
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    listarProdutosCarrinho();
}

function finalizarPersonalizacaoFeminina(){
    let i = 0
    i++
    personalizado = {id: "femper"+i,
    nome: tshirtOuCamisa + " fem. " + corPl + " " + qualEstampa, 
    descricao: + `(Posicao: ${posicaoEstampa}; Tamanho: ${tamanhoEstampa}`,
    imagem: "imagens/produtos/personalizada.png",
    preco: 149.99,
    tamanhos: ["p", "m", "g"]}

     let encontrado = false;
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].nome == personalizado.nome && carrinho[i].descricao == personalizado.descricao) {
            carrinho[i].quantidade++;
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        personalizado.quantidade = 1;
        carrinho.push(personalizado);
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    listarProdutosCarrinho();
}

function finalizarPersonalizacaoInfantil(){
    let i = 0
    i++
    personalizado = {id: "infper"+i,
    nome: tshirtOuCamisa + " inf. " + corPl + " " + qualEstampa, 
    descricao: + `(Posicao: ${posicaoEstampa}; Tamanho: ${tamanhoEstampa}`,
    imagem: "imagens/produtos/personalizada.png",
    preco: 109.99,
    tamanhos: ["p", "m", "g"]}

     let encontrado = false;
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].nome == personalizado.nome && carrinho[i].descricao == personalizado.descricao) {
            carrinho[i].quantidade++;
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        personalizado.quantidade = 1;
        carrinho.push(personalizado);
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    listarProdutosCarrinho();
}