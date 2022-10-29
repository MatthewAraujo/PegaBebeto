function BuscaDadosClima() {
    let altitude = document.getElementById('altitude');
    let temperatura = document.getElementById('temperatura');
    let pressao = document.getElementById('pressao');
    let data = document.getElementById('data');
    result = fazget('http://localhost:5000/search-measurement-clima') 
    result = JSON.parse(result)
    console.log(result)
    altitude.innerHTML = result[0].Altitude
    temperatura.innerHTML = result[0].Temperatura +'°'
    pressao.innerHTML = result[0].Pressao
    data_clima.innerHTML = result[0].Time_Insert
}

function BuscaDadosAcelerometro() {
    let acelX = document.getElementById('acelX');
    let acelY = document.getElementById('acelY');
    let acelZ = document.getElementById('acelZ');
    let giroX = document.getElementById('giroX');
    let giroY = document.getElementById('giroY');
    let giroZ = document.getElementById('giroZ');
    let data_acelerometro = document.getElementById('data_acelerometro');
    result = fazget('http://localhost:5000/search-measurement-acelerometro') 
    result = JSON.parse(result)
    console.log(result)
    acelX.innerHTML = result[0].acelX
    acelY.innerHTML = result[0].acelY
    acelZ.innerHTML = result[0].acelZ 
    giroZ.innerHTML = result[0].giroZ
    giroX.innerHTML = result[0].giroX
    giroY.innerHTML = result[0].giroY
    data_acelerometro.innerHTML = result[0].Date_insert
}
function BuscaDadosGases() {
    let co = document.getElementById('co');
    let nh4 = document.getElementById('nh4');
    let acetona = document.getElementById('acetona');
    let CO2 = document.getElementById('co2');
    let data_gases = document.getElementById('data_gases');

    result = fazget('http://localhost:5000/search-measurement-gases') 
    result = JSON.parse(result)
    console.log(result)
    co.innerHTML = result[0].CO
    nh4.innerHTML = result[0].NH4
    acetona.innerHTML = result[0].Acetona
    CO2.innerHTML = result[0].CO2
    data_gases.innerHTML = result[0].Time_Insert
}


async function AtualizaDados() {
    for(;;){
        BuscaDadosClima()
        BuscaDadosAcelerometro()
        BuscaDadosGases()
        await sleepNow (3000)    
    }
}

const sleepNow = (delay) => new Promise ((resolve) => setTimeout (resolve, delay ))

function fazget(url) {
    
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    console.log(request)
    request.send();
    console.log(request)
    return request.responseText;
}

