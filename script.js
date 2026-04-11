const botaoConverter = document.querySelector(".botao-converter");
const trocarMoeda = document.querySelector(".trocar-moeda");

function converterValor() {
    const imagemMoedaConverter = document.querySelector(".img-moeda-a-converter");
    const imagemMoedaConvertida = document.querySelector(".img-moeda-convertida");
    const nomeMoedaConvertida = document.querySelector(".nome-moeda-convertida");
    const valorInput = document.querySelector(".valor-para-converter")
    const valorConverter = document.querySelector(".valor-converter")
    const valorConvertido = document.querySelector(".valor-convertido")
    const dolarHoje = 5.01;
    const euroHoje = 5.87;
    const libraHoje = 6.74;
    const bitcoinHoje = 72.911;

    if (trocarMoeda.value === "euro") {
        imagemMoedaConvertida.src = "./assets/euro.png";
        nomeMoedaConvertida.textContent = "Euro";

        valorConvertido.innerHTML = new Intl.NumberFormat('on-IN', {
            style: 'currency', currency: 'EUR'
        }).format(valorInput.value / euroHoje);
    }

    if (trocarMoeda.value === "dolar") {
        imagemMoedaConvertida.src = "./assets/dolar.png";
        nomeMoedaConvertida.textContent = "Dólar Americano";

        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(valorInput.value / dolarHoje);
    }

    if (trocarMoeda.value === "libra") {
        imagemMoedaConvertida.src = "./assets/libra.png";
        nomeMoedaConvertida.textContent = "Libra";
        valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP'
        }).format(valorInput.value / libraHoje);
    }

    if (trocarMoeda.value === "bitcoin") {
        imagemMoedaConvertida.src = "./assets/bitcoin.png";
        nomeMoedaConvertida.textContent = "Bitcoin";
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'BTC'
        }).format(valorInput.value / bitcoinHoje);
    }

    valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    }).format(valorInput.value);

}

trocarMoeda.addEventListener("change", converterValor);
botaoConverter.addEventListener("click", converterValor);