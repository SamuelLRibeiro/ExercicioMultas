function limpar(){
    document.location.reload(true)
}
function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de ${vel}Km/h.</p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você está multado!</p>`
        res.innerHTML += `<p>Dirija sempre com o cinto de segurança!</p>`
    } else if (vel < 0){
        res.innerHTML = `<p>VELOCIDADE INVÁLIDA!</p>`
    } else{
        res.innerHTML += `<p> Dirija sempre com o cinto de segurança!</p>`
    }
}