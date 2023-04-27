



calcular.addEventListener('click', function (e) {

    e.preventDefault();

    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var ano = document.getElementById('ano').value;
    var calcular = document.getElementById('calcular');

    var agora = new Date();
    var anoAtual = agora.getFullYear();

    var idadeAno = anoAtual - ano;

    var resultadoFinal = ``;

    resultadoFinal = `Idade é ${idadeAno} anos`;



    console.log(resultadoFinal);

});

