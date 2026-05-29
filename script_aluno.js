// Função que o professor pediu pra fazer
function calcularCompra() {
    // 1. Pegando o que o usuário digitou
    const valorElemento = document.getElementById("valorProduto");
    const cupomElemento = document.getElementById("cupomTexto");
    const painel = document.getElementById("painelResultado");

    let valorOriginal = Number(valorElemento.value);
    let cupomDigitado = cupomElemento.value;

    // REGRA 1: Validação do Cupom de Desconto
    // Se o cupom for PROMO10 ganha 10 de desconto
    let desconto = 0;
    if (cupomDigitado.toUpperCase() === "PROMO10") {
        desconto = 10;
    }

    // REGRA 2: Aplicação do Desconto no Valor do Produto
    // Aqui eu tiro o desconto do valor original
    let valorComDesconto = valorOriginal - desconto;

    // REGRA 3: Cálculo da Taxa de Frete
    // Se o valor com desconto for 100 ou mais o frete é grátis
    // Se não for, cobra 15 reais
    let frete = 0;
    if (valorComDesconto >= 100) {
        frete = 0;
    } else {
        frete = 15;
    }

    // REGRA 4: Total Geral da Compra
    // Soma o valor com desconto mais o frete
    let totalFinal = valorComDesconto + frete;

    // 2. Mostrando o resultado na tela
    painel.style.background = "#e8f5e9";
    painel.style.borderLeft = "4px solid green";
    painel.innerHTML = `
        <strong>Resumo do Pedido:</strong><br>
        Desconto: R$ ${desconto.toFixed(2)}<br>
        Frete: R$ ${frete === 0 ? "Grátis" : "R$ " + frete.toFixed(2)}<br>
        <strong>Total a pagar: R$ ${totalFinal.toFixed(2)}</strong>
    `;
}
