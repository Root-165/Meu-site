function abrirWhatsApp() {
    var numero = "244974390811"; // 
    var url = "https://wa.me/" + numero;
    window.open(url, "_blank");
}
// Função para abrir o modal
function abrirModal() {
    document.getElementById("contactModal").style.display = "flex";
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("contactModal").style.display = "none";
}

// Enviar os dados para o WhatsApp
function enviarParaWhatsApp() {
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("message").value;

    if (nome === "" || mensagem === "") {
        alert("Por favor, preencha os campos obrigatórios.");
        return;
    }

    let numeroWhatsApp = "244974390811"; // Substitua pelo número desejado
    let texto = `Olá, meu nome é ${nome}.\nMeu email é: ${email}\nMensagem: ${mensagem}`;
    
    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    
    window.open(url, "_blank");
    fecharModal(); // Fecha o modal após o envio
}
function abrirFormulario() {
    let numeroWhatsApp = "244974390811"; // Exemplo: 244999999999
    let mensagem = encodeURIComponent("Olá, gostaria de saber mais sobre os serviços da M&M Tecnologia!");
    let link = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.open(link, "_blank");
}
document.addEventListener("DOMContentLoaded", function() {
    let carrinho = [];
    
    // Função para atualizar o carrinho
    function atualizarCarrinho() {
        let listaCarrinho = document.querySelector(".lista-carrinho");
        let total = document.querySelector(".total");
        listaCarrinho.innerHTML = "";
        let totalPreco = 0;

        carrinho.forEach((produto, index) => {
            let item = document.createElement("div");
            item.innerHTML = `${produto.nome} - ${produto.quantidade}x ${produto.preco} KZ <button class="remover" data-index="${index}">❌</button>`;
            listaCarrinho.appendChild(item);
            totalPreco += produto.preco * produto.quantidade;
        });

        total.innerText = `Total: ${totalPreco} KZ`;

        // Adiciona evento de remoção
        document.querySelectorAll(".remover").forEach(btn => {
            btn.addEventListener("click", function() {
                let index = this.getAttribute("data-index");
                carrinho.splice(index, 1);
                atualizarCarrinho();
            });
        });
    }

    // Adicionar produto ao carrinho
    document.querySelectorAll(".adicionar").forEach(botao => {
        botao.addEventListener("click", function() {
            let card = this.closest(".produto-card");
            let nome = card.getAttribute("data-nome");
            let preco = parseInt(card.getAttribute("data-preco"));
            let quantidade = parseInt(card.querySelector(".quantidade").innerText);

            let itemExistente = carrinho.find(produto => produto.nome === nome);
            if (itemExistente) {
                itemExistente.quantidade += quantidade;
            } else {
                carrinho.push({ nome, preco, quantidade });
            }

            atualizarCarrinho();
        });
    });

    // Alterar quantidade
    document.querySelectorAll(".diminuir").forEach(botao => {
        botao.addEventListener("click", function() {
            let quantidadeSpan = this.nextElementSibling;
            let quantidade = parseInt(quantidadeSpan.innerText);
            if (quantidade > 1) {
                quantidadeSpan.innerText = quantidade - 1;
            }
        });
    });

    document.querySelectorAll(".aumentar").forEach(botao => {
        botao.addEventListener("click", function() {
            let quantidadeSpan = this.previousElementSibling;
            let quantidade = parseInt(quantidadeSpan.innerText);
            quantidadeSpan.innerText = quantidade + 1;
        });
    });

    // Finalizar compra
    document.querySelector(".finalizar").addEventListener("click", function() {
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }

        let nome = prompt("Digite seu nome:");
        let telefone = prompt("Digite seu telefone:");

        if (!nome || !telefone) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        let mensagem = `Pedido de ${nome}\nTelefone: ${telefone}\n\nProdutos:\n`;
        let totalPreco = 0;

        carrinho.forEach(produto => {
            mensagem += `${produto.quantidade}x ${produto.nome} - ${produto.preco} KZ\n`;
            totalPreco += produto.preco * produto.quantidade;
        });

        mensagem += `\nTotal: ${totalPreco} KZ`;

        let numeroWhatsApp = "244974390811"; // Insira o número correto
        let link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(link, "_blank");
    });
});

/* carrinho */
document.addEventListener("DOMContentLoaded", function() {
    let carrinho = [];
    
    function atualizarCarrinho() {
        let listaCarrinho = document.querySelector(".lista-carrinho");
        let total = document.querySelector(".total");
        listaCarrinho.innerHTML = "";
        let totalPreco = 0;

        carrinho.forEach((produto, index) => {
            let item = document.createElement("div");
            item.innerHTML = `${produto.quantidade}x ${produto.nome} - ${produto.preco} KZ <button class="remover" data-index="${index}">❌</button>`;
            listaCarrinho.appendChild(item);
            totalPreco += produto.preco * produto.quantidade;
        });

        total.innerText = `Total: ${totalPreco} KZ`;

        document.querySelectorAll(".remover").forEach(btn => {
            btn.addEventListener("click", function() {
                let index = this.getAttribute("data-index");
                carrinho.splice(index, 1);
                atualizarCarrinho();
            });
        });
    }

    document.querySelectorAll(".adicionar").forEach(botao => {
        botao.addEventListener("click", function() {
            let card = this.closest(".produto-card");
            let nome = card.getAttribute("data-nome");
            let preco = parseInt(card.getAttribute("data-preco"));
            let quantidade = parseInt(card.querySelector(".quantidade").innerText);

            let itemExistente = carrinho.find(produto => produto.nome === nome);
            if (itemExistente) {
                itemExistente.quantidade += quantidade;
            } else {
                carrinho.push({ nome, preco, quantidade });
            }

            atualizarCarrinho();
        });
    });

    document.querySelectorAll(".diminuir").forEach(botao => {
        botao.addEventListener("click", function() {
            let quantidadeSpan = this.nextElementSibling;
            let quantidade = parseInt(quantidadeSpan.innerText);
            if (quantidade > 1) {
                quantidadeSpan.innerText = quantidade - 1;
            }
        });
    });

    document.querySelectorAll(".aumentar").forEach(botao => {
        botao.addEventListener("click", function() {
            let quantidadeSpan = this.previousElementSibling;
            let quantidade = parseInt(quantidadeSpan.innerText);
            quantidadeSpan.innerText = quantidade + 1;
        });
    });

    document.querySelector(".finalizar").addEventListener("click", function() {
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }

        let nome = prompt("Digite seu nome:");
        let telefone = prompt("Digite seu telefone:");

        if (!nome || !telefone) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        let mensagem = `Pedido de ${nome}\nTelefone: ${telefone}\n\nProdutos:\n`;
        let totalPreco = 0;

        carrinho.forEach(produto => {
            mensagem += `${produto.quantidade}x ${produto.nome} - ${produto.preco} KZ\n`;
            totalPreco += produto.preco * produto.quantidade;
        });

        mensagem += `\nTotal: ${totalPreco} KZ`;

        let numeroWhatsApp = "244974390811"; // Insira o número correto
        let link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(link, "_blank");
    });

    document.querySelector(".limpar").addEventListener("click", function() {
        carrinho = [];
        atualizarCarrinho();
    });
});


