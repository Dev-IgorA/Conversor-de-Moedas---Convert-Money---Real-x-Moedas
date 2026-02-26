// seleciona o botão de converter
const convertbutton = document.querySelector(".button-convert");

// mapeia o select para escolher a moeda convertida
const currencySelect = document.querySelector(".currency-select-converted");

function convertValues() {
  // valor digitado para converter
  const inputCurrencyValue = document.querySelector(".input-currency").value;

  // valor em real para converter
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert",
  );

  // valor convertido - Outras moedas
  const currencyValueConverted = document.querySelector(".currency-value");

  // valores das moedas para converter
  const dolarToday = 5.23;
  const euroToday = 6.15;
  const bitcoinToday = 348409.23;
  const libraToday = 7.03;

  if (currencySelect.value == "dólar") {
    // Se o select estiver selecionado o valor de dólar - exibe o valor convertido abaixo da imagem da moeda convertida mapeado -- dólar
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday); //formata o valor do input e divide para o dólar
  }

  // Se o select estiver selecionado o valor de euro - exibe o valor convertido abaixo da imagem da moeda convertida mapeado -- euro
  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday); //formata o valor do input e divide para o euro
  }

  // Se o select estiver selecionado o valor de bitcoin - exibe o valor convertido abaixo da imagem da moeda convertida mapeado
  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday); //formata o valor do input e divide para o bitcoin
  }

  // Se o select estiver selecionado o valor de libra - exibe o valor convertido abaixo da imagem da moeda convertida mapeado -- libra
  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday); //formata o valor do input e divide para a libra
  }

  // exibe o valor convertido abaixo da imagem da moeda real mapeado
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

// chama a função para exibir o nome da moeda convertida
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  // Se o select estiver selecionado o valor de dólar - exibe o nome da moeda convertida abaixo da imagem da moeda convertida mapeado -- dólar
  if (currencySelect.value == "dólar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./Assets/Logo-Dólar.png"; //muda a imagem para o dólar
  }

  // Se o select estiver selecionado o valor de euro - exibe o nome da moeda convertida abaixo da imagem da moeda convertida mapeado -- euro
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./Assets/Logo-Euro.png"; //muda a imagem para o euro
  }

  // Se o select estiver selecionado o valor de bitcoin - exibe o nome da moeda convertida abaixo da imagem da moeda convertida mapeado -- bitcoin
  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./Assets/Logo-Bitcoin.png"; //muda a imagem para o bitcoin
  }

  // Se o select estiver selecionado o valor de libra - exibe o nome da moeda convertida abaixo da imagem da moeda convertida mapeado -- libra
  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImage.src = "./Assets/Logo-Libra.png"; //muda a imagem para a libra
  }

  convertValues();
}

// sempre que o select for alterado, chama a função
currencySelect.addEventListener("change", changeCurrency);

// evento de click para converter os valores
convertbutton.addEventListener("click", convertValues);
