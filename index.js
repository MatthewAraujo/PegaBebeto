function teste() {
    let teste = document.getElementById('teste');
    teste.innerHTML = 'teste';
    result = fazget('http://localhost:5000/search-measurement') 
    console.log(result);
}

function fazget(url) {
    
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;
}
