// ------    ------

const AnoResultado = document.querySelector('.ano_resultado');
const MesResultado = document.querySelector('.mes_resultado');
const DiaResultado = document.querySelector('.dia_resultado');
const Calcular = document.querySelector('.form-botao');

// ------  Variáreis que receberão os valores dos inputs  ------
const EntradaDia = document.getElementById('dia'); // Recebe o ano digitado na input
const EntradaMes = document.getElementById('mes'); // Recebe o ano digitado na input
const EntradaAno = document.getElementById('ano'); // Recebe o ano digitado na input


// ------  Variáreis que CHEQUARÃO OS ERROS  ------

const DiaErro = document.querySelector('.dia-erro');
const MesErro = document.querySelector('.mes-erro');
const AnoErro = document.querySelector('.ano-erro');

const ErroCampoObrigatorio = 'Esse campo é Obrigatório!';
const InputDiaErro = 'O valor do dia deve ser válido!';
const InputMesErro = 'O valor do mês deve ser válido!';
const InputAnoErro = 'O valor do ano deve ser válido!';

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



    // ----------------------------------------------------------------------------------------------------
    // Cálculo que resolve Meses e dias negativos (Quando o mês do nascimento é maior que o mês atual) ou 
    // os dias ficam negativos

    if (idadeMes < 0 || (idadeMes === 0 && idadeDia < 0)) {
        idadeAno--;

        if (idadeMes === 0) { // Corrige o erro quando o resultado do mês fica negativo 
            idadeMes = 11;
        } else {
            idadeMes = 12 + idadeMes;
        }
        idadeDia = 30 + idadeDia; // Corrige o erro de quando os dias ficam negativo

        //OBS: Não consegui resolver o erro de quando você digita dia 31 em um mês que tem 30 dias
    }

    // ------------------------------------------------------------------------------------------------

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

    let dia = ChecaDia(); // Chama a função ChecaDia
    let mes = ChecaMes(); // Chama a função ChecaMes
    let ano = ChecaAno(); // Chama a função ChecaAno

    // Recebe os valores digitados nas inputs
    let nascimento = `${EntradaMes.value}/${EntradaDia.value}/${EntradaAno.value}`;

    calcularIdade(nascimento); // executa a função

});


// ---------------------------  CHECAR O INPUT DIA  ------
function ChecaDia() {
    let value = EntradaDia.value;

    if (value == '') {  // Se o valor do input for 0
        DiaErro.innerHTML = ErroCampoObrigatorio;
        return false;
    }
    else if (value < 1 || value > 31) {
        DiaErro.innerHTML = InputDiaErro;
        return false;
    }
    else {
        DiaErro.innerHTML = '';
        return true;
    }
}


// ---------------------------  CHECAR O INPUT MÊS  ------
function ChecaMes() {
    let value = EntradaMes.value;

    if (value == '') {  // Se o valor do input for 0
        MesErro.innerHTML = ErroCampoObrigatorio;
        return false;
    }
    else if (value < 1 || value > 12) {
        MesErro.innerHTML = InputMesErro;
        return false;
    }
    else {
        MesErro.innerHTML = '';
        return true;
    }
}


// ---------------------------  CHECAR O INPUT ANO  ------
function ChecaAno() {

    let value = EntradaAno.value;
    let AtualAno = new Date().getFullYear();
    console.log(AtualAno);

    if (value == '') { // Se o valor do input for 0
        AnoErro.innerHTML = ErroCampoObrigatorio;
        return false;
    }
    else if (value > AtualAno || value < 0) {
        AnoErro.innerHTML = InputAnoErro;
        return false;
    }
    else if (value == 0) {
        AnoErro.innerHTML = InputAnoErro;
        return false;
    }
    else {
        AnoErro.innerHTML = '';
        return true;
    }
}