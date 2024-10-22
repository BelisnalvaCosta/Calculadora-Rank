function calculadoraRank() {
    const victories = parseInt(document.getElementById("victories").value);
    const defeats = parseInt(document.getElementById("defeats").value);
    let saldoVitorias = victories - defeats;
    let nivel = '';
    let imgSrc = '';

    // Verificar o nível com base nas vitórias
    if (victories < 10) {
        nivel = 'Ferro';
        imgSrc = 'imgSrc/derrota.png';
    } else if (victories >= 11 && victories <= 20) {
        nivel = 'Bronze';
        imgSrc = 'imagens/bronze.png';
    } else if (victories >= 21 && victories <= 50) {
        nivel = 'Prata';
        imgSrc = 'imgSrc/Frank-vilao.png';
    } else if (victories >= 51 && victories <= 80) {
        nivel = 'Ouro, pequena recompensa pelo seu esforços!';
        imgSrc = 'imgSrc/peqRecompensa.png';
    } else if (victories >= 81 && victories <= 90) {
        nivel = 'Diamante';
        imgSrc = 'imgSrc/Dora.png';
    } else if (victories >= 91 && victories <= 100) {
        nivel = 'Lendário';
        imgSrc = 'imgSrc/nalva-hero.png';
    } else if (victories >= 101) {
        nivel = 'Imortal';
        imgSrc = 'imgSrc/GameOver.png';
    }

    // Exibir o resultado
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `O Herói(a) ou vilão tem de saldo ${saldoVitorias} pontos e seu nível é ${nivel}.<br><img src="${imgSrc}" alt="${nivel}">`;
}
