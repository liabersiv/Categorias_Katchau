function iniciarTimer () {
    let tempoInicial = 29 * 3600 + 20 * 60 + 10;

    let timerElemento = document.getElementById("timer");

    function atualizarTimer () {
        let horas = Math.floor(tempoInicial / 3600);
        let minutos = Math.floor(tempoInicial % 3600 / 60);
        let segundos = tempoInicial % 60;

        let horasFormatadas = horas.toString().padStart(2, '0');
        let minutosFormatados = minutos.toString().padStart(2, '0');
        let segundosFormatados = segundos.toString().padStart(2, '0');

        timerElemento.textContent = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
        
        tempoInicial --;

        if (tempoInicial < 0) {
            tempoInicial = 29 * 3600 + 20 * 60 + 10;
        }
    }

    setInterval(atualizarTimer, 1000);

    atualizarTimer();
}

window.onload = iniciarTimer;