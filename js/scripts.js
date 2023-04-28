// ------    ------

const AnoResultado = document.querySelector('.ano_resultado');
const MesResultado = document.querySelector('.mes_resultado');
const DiaResultado = document.querySelector('.dia_resultado');
const Calcular = document.querySelector('.form-botao');

// ------  Variáreis que receberão os valores dos inputs  ------
const EntradaDia = document.getElementById('dia'); // Recebe o ano digitado na input
const EntradaMes = document.getElementById('mes'); // Recebe o ano digitado na input
const EntradaAno = document.getElementById('ano'); // Recebe o ano digitado na input


// ------  CÁLCULO DOS ANOS, MESES E DIAS  ------

function calcularIdade(nascimento) {

    var nascimento = new Date(nascimento) // Variável que irá receber os valores do método 
    var agora = new Date(); // Variável que irá receber a data atual

    // Cálculo dos ANOS:
    var anoAtual = agora.getFullYear(); // Método "getFullYear" retorna ano da data especificada.
    var anoNascimento = nascimento.getFullYear();

    var idadeAno = anoAtual - anoNascimento;

    // Cálculo dos MESES:
    var idadeMes = agora.getMonth() - nascimento.getMonth(); // Método "getMonth" retorna o mês da data especificada.



    // Cálculo dos DIAS:
    var idadeDia = agora.getDate() - nascimento.getDate(); // Método "getDate" retorna o dia do mês da data especificada.


    // Propriedades que irão escrever no HTML:
    AnoResultado.innerHTML = idadeAno;
    MesResultado.innerHTML = idadeMes;
    DiaResultado.innerHTML = idadeDia;

    console.log(idadeAno);
    console.log(idadeMes);
    console.log(idadeDia);
}


// ------  MÉTODO QUE É EXECUTADO APÓS VOCÊ CLICAR NO BOTÃO  ------

Calcular.addEventListener('click', function (e) {

    e.preventDefault(); //  impede que o evento padrão de execução do HTML ocorra

    // Recebe os valores digitados nas inputs
    let nascimento = `${EntradaMes.value}/${EntradaDia.value}/${EntradaAno.value}`;

    calcularIdade(nascimento); // executa a função

});

