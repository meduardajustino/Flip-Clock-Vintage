function atualizarRelogio() {
    const agora = new Date();

    let horas = String(agora.getHours()).padStart(2, '0');
    let minutos = String(agora.getMinutes()).padStart(2, '0');
    let segundos = String(agora.getSeconds()).padStart(2, '0');

    document.getElementById('hours').querySelector('.number').innerHTML = horas;
    document.getElementById('minutes').querySelector('.number').innerHTML = minutos;
    document.getElementById('seconds').querySelector('.number').innerHTML = segundos;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
