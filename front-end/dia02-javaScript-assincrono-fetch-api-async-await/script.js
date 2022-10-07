function creatList(objCriptoMoedas) {
    const coinsList = document.createElement('ul');
    document.querySelector('.criptoContainer').appendChild(coinsList);
    coinsList.id = 'coins-list';
    for(let index = 0; index < 10; index += 1) {
        const criptoMoeda = document.createElement('li');
        coinsList.appendChild(criptoMoeda);
        const { name: name , symbol: simbolo , priceUsd: valor } = objCriptoMoedas.data[index];
        criptoMoeda.innerText = `${name} (${simbolo}): ${Number(valor).toFixed(2)}`;
    }
}

async function fetchCoins() {
    try {
        const response = await fetch('https://api.coincap.io/v2/assets');
        const obj = await response.json();
        console.log(obj);
        creatList(obj);
    }catch (error) {
        console.log('Error', error);
    }
}

window.onload = () => {
    fetchCoins();
}
