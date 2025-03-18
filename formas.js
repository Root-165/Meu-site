document.addEventListener("DOMContentLoaded", function() {
    // Animação de rolagem
    window.addEventListener("scroll", function() {
        let elements = document.querySelectorAll(".fade-in");
        elements.forEach(el => {
            let position = el.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;
            if (position < screenHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    });

    // Formulário de contato
    document.getElementById("contatoForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let nome = document.getElementById("nome").value;
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        this.reset();
    });
});

// Simulação de Carrinho de Compras
let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    alert(`${produto} foi adicionado ao carrinho!`);
}
/*animacoes */
// ==========================
// 🔹 EFEITO DE DIGITAÇÃO NO TOPO DO SITE
// ==========================
document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.querySelector(".titulo-digitando");
    const texto = "Bem-vindo à M&M Tecnologia!";
    let index = 0;

    function digitar() {
        if (index < texto.length) {
            titulo.textContent += texto[index];
            index++;
            setTimeout(digitar, 100);
        } else {
            titulo.classList.remove("titulo-digitando");
        }
    }

    digitar();
});
/* outros*/
document.addEventListener("DOMContentLoaded", function() {
    const botoesAumentar = document.querySelectorAll(".aumentar");
    const botoesDiminuir = document.querySelectorAll(".diminuir");
    const botoesComprar = document.querySelectorAll(".comprar");

    // Aumentar a quantidade
    botoesAumentar.forEach(botao => {
        botao.addEventListener("click", function() {
            let quantidadeSpan = this.previousElementSibling;
            let quantidade = parseInt(quantidadeSpan.textContent);
            quantidadeSpan.textContent = quantidade + 1;
        });
    });

    // Diminuir a quantidade (mas não deixar abaixo de 1)
    botoesDiminuir.forEach(botao => {
        botao.addEventListener("click", function() {
            let quantidadeSpan = this.nextElementSibling;
            let quantidade = parseInt(quantidadeSpan.textContent);
            if (quantidade > 1) {
                quantidadeSpan.textContent = quantidade - 1;
            }
        });
    });

    // Comprar - Redireciona para WhatsApp com quantidade
    botoesComprar.forEach(botao => {
        botao.addEventListener("click", function() {
            let produto = this.getAttribute("data-produto");
            let preco = this.getAttribute("data-preco");
            let quantidade = this.previousElementSibling.querySelector(".quantidade").textContent;
            let total = parseInt(preco) * parseInt(quantidade);

            let numeroWhatsApp = "SEU_NUMERO"; // Substituir pelo número real
            let mensagem = `Olá! Quero comprar ${quantidade} unidade(s) de ${produto}. Valor total: ${total} KZ.`;

            let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
            window.open(url, "_blank");
        });
    });
});

// Alternar entre visualização em grade e lista
function changeView(view) {
    let gallery = document.querySelector('.galeria-container');
    if (view === 'grid') {
        gallery.classList.remove('list-view');
        gallery.classList.add('grid-view');
    } else {
        gallery.classList.remove('grid-view');
        gallery.classList.add('list-view');
    }
}

// Abrir imagem no Lightbox
function openLightbox(img) {
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
}

// Fechar o Lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", () => {
    const botoesAdicionar = document.querySelectorAll(".btn-adicionar");
    const itensCarrinho = document.getElementById("itens-carrinho");
    const totalSpan = document.getElementById("total");

    let carrinho = [];

    // Adiciona produtos ao carrinho
    botoesAdicionar.forEach(botao => {
        botao.addEventListener("click", () => {
            const produto = botao.parentElement;
            const nome = produto.getAttribute("data-nome");
            const preco = parseFloat(produto.getAttribute("data-preco"));

            // Verifica se o produto já está no carrinho
            const itemExistente = carrinho.find(item => item.nome === nome);

            if (itemExistente) {
                itemExistente.quantidade++;
            } else {
                carrinho.push({ nome, preco, quantidade: 1 });
            }

            atualizarCarrinho();
        });
    });

    // Atualiza a interface do carrinho
    function atualizarCarrinho() {
        itensCarrinho.innerHTML = "";
        let total = 0;

        carrinho.forEach((item, index) => {
            total += item.preco * item.quantidade;

            const div = document.createElement("div");
            div.innerHTML = `
                <p>${item.nome} - $${item.preco} x ${item.quantidade}
                    <button class="btn-menos" data-index="${index}">➖</button>
                    <button class="btn-mais" data-index="${index}">➕</button>
                </p>
            `;
            itensCarrinho.appendChild(div);
        });

        totalSpan.textContent = total.toFixed(1);

        document.querySelectorAll(".btn-menos").forEach(botao => {
            botao.addEventListener("click", removerItem);
        });

        document.querySelectorAll(".btn-mais").forEach(botao => {
            botao.addEventListener("click", aumentarQuantidade);
        });
    }

    // Diminui a quantidade de um item no carrinho
    function removerItem(event) {
        const index = event.target.getAttribute("data-index");
        if (carrinho[index].quantidade > 1) {
            carrinho[index].quantidade--;
        } else {
            carrinho.splice(index, 1);
        }
        atualizarCarrinho();
    }

    // Aumenta a quantidade de um item no carrinho
    function aumentarQuantidade(event) {
        const index = event.target.getAttribute("data-index");
        carrinho[index].quantidade++;
        atualizarCarrinho();
    }

    // Finaliza a compra
    document.getElementById("finalizar-compra").addEventListener("click", () => {
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio!");
        } else {
            alert("Compra finalizada! Obrigado por comprar conosco.");
            carrinho = [];
            atualizarCarrinho();
        }

    });

});

document.addEventListener("DOMContentLoaded", function () {
    let carrinho = [];

    // Adicionar produto ao carrinho
    document.querySelectorAll(".adicionar").forEach(botao => {
        botao.addEventListener("click", function () {
            let produtoCard = this.parentNode;
            let nome = produtoCard.getAttribute("data-nome");
            let preco = parseInt(produtoCard.getAttribute("data-preco"));
            let quantidade = parseInt(produtoCard.querySelector(".quantidade").innerText);

            let itemExistente = carrinho.find(item => item.nome === nome);
            if (itemExistente) {
                itemExistente.quantidade += quantidade;
            } else {
                carrinho.push({ nome, preco, quantidade });
            }

            atualizarCarrinho();
        });
    });

    // Atualizar carrinho
    function atualizarCarrinho() {
        let listaCarrinho = document.getElementById("lista-carrinho");
        let totalGeral = 0;
        listaCarrinho.innerHTML = "";

        carrinho.forEach(item => {
            let subtotal = item.preco * item.quantidade;
            totalGeral += subtotal;
            listaCarrinho.innerHTML += `
                <div class="carrinho-item">
                    <p>📦 ${item.nome} - ${item.quantidade}x - ${subtotal.toLocaleString()} KZ</p>
                </div>
            `;
        });

        document.getElementById("total-geral").innerText = totalGeral.toLocaleString();
    }
/*
    // Botões de aumentar e diminuir quantidade
    document.querySelectorAll(".aumentar").forEach(botao => {
        botao.addEventListener("click", function () {
            let quantidadeSpan = this.parentNode.querySelector(".quantidade");
            quantidadeSpan.innerText = parseInt(quantidadeSpan.innerText) + 1;
        });
    });

    document.querySelectorAll(".diminuir").forEach(botao => {
        botao.addEventListener("click", function () {
            let quantidadeSpan = this.parentNode.querySelector(".quantidade");
            let quantidadeAtual = parseInt(quantidadeSpan.innerText);
            if (quantidadeAtual > 1) {
                quantidadeSpan.innerText = quantidadeAtual - 1;
            }
        });
    });
*/
    // Finalizar compra e enviar para WhatsApp
    document.getElementById("finalizar-compra").addEventListener("click", () => {
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }

        let mensagem = "🛒 *Pedido de Compra*%0A%0A";
        let total = 0;

        carrinho.forEach(item => {
            mensagem += `📦 ${item.nome} - ${item.quantidade}x - ${item.preco * item.quantidade} KZ%0A`;
            total += item.preco * item.quantidade;
        });

        mensagem += `%0A💰 *Total: ${total.toLocaleString()} KZ*%0A🚀 Quero finalizar minha compra!`;

        window.open(`https://wa.me/244974390811?text=${mensagem}`, "_blank");
    });
});

/*  -------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
            let carrinho = [];

            document.querySelectorAll(".aumentar").forEach(botao => {
                botao.addEventListener("click", function () {
                    let quantidadeSpan = this.parentNode.querySelector(".quantidade");
                    quantidadeSpan.innerText = parseInt(quantidadeSpan.innerText) + 1;
                });
            });

            document.querySelectorAll(".diminuir").forEach(botao => {
                botao.addEventListener("click", function () {
                    let quantidadeSpan = this.parentNode.querySelector(".quantidade");
                    let quantidadeAtual = parseInt(quantidadeSpan.innerText);
                    if (quantidadeAtual > 1) quantidadeSpan.innerText = quantidadeAtual - 1;
                });
            });

            document.querySelectorAll(".adicionar").forEach(botao => {
                botao.addEventListener("click", function () {
                    let produtoCard = this.parentNode;
                    let nome = produtoCard.getAttribute("data-nome");
                    let preco = parseInt(produtoCard.getAttribute("data-preco"));
                    let quantidade = parseInt(produtoCard.querySelector(".quantidade").innerText);
                    
                    let itemExistente = carrinho.find(item => item.nome === nome);
                    if (itemExistente) {
                        itemExistente.quantidade += quantidade;
                    } else {
                        carrinho.push({ nome, preco, quantidade });
                    }

                    atualizarCarrinho();
                });
            });

            function atualizarCarrinho() {
                let listaCarrinho = document.getElementById("lista-carrinho");
                let totalGeral = document.getElementById("total-geral");
                listaCarrinho.innerHTML = "";
                let total = 0;
                
                carrinho.forEach((item, index) => {
                    total += item.preco * item.quantidade;
                    let div = document.createElement("div");
                    div.classList.add("carrinho-item");
                    div.innerHTML = `
                        <p>${item.nome} - ${item.quantidade}x - ${item.preco * item.quantidade} KZ
                            <button class="remover" data-index="${index}">🗑️</button>
                        </p>`;
                    listaCarrinho.appendChild(div);
                });
                
                totalGeral.textContent = total.toLocaleString();
                
                document.querySelectorAll(".remover").forEach(botao => {
                    botao.addEventListener("click", removerItem);
                });
            }
            
            function removerItem(event) {
                const index = event.target.getAttribute("data-index");
                carrinho.splice(index, 1);
                atualizarCarrinho();
            }
            
            document.getElementById("limpar-carrinho").addEventListener("click", () => {
                carrinho = [];
                atualizarCarrinho();
            });
            
            document.getElementById("finalizar-compra").addEventListener("click", () => {
                if (carrinho.length === 0) {
                    alert("Seu carrinho está vazio!");
                    return;
                }

                let mensagem = "🛒 *Pedido de Compra*%0A%0A";
                let total = 0;
                
                carrinho.forEach(item => {
                    mensagem += `📦 ${item.nome} - ${item.quantidade}x - ${item.preco * item.quantidade} KZ%0A`;
                    total += item.preco * item.quantidade;
                });
                
                mensagem += `%0A💰 *Total: ${total.toLocaleString()} KZ*%0A🚀 Quero finalizar minha compra!`;
                
                let numeroWhatsApp = "SEU_NUMERO";
                window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, "_blank");
            });
        });
/* nav bar*/
 
 