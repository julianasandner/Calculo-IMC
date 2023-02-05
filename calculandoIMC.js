const recolherInfos = document.querySelector('#botao-calcular');

recolherInfos.addEventListener('click', function(event) {

    event.preventDefault();

    var nome = document.querySelector('#pesquisar-nome');
    var texto = nome.value;
    
    var pesoInput = document.querySelector('#pesquisar-peso');
    var peso = pesoInput.value;

    var alturaInput = document.querySelector('#pesquisar-altura');
    var altura = alturaInput.value;

    var resultado = calculaImc(peso, altura);

    var element = document.querySelector('#mostrarResultado');
    var text = document.createTextNode(texto + " o seu IMC é " + resultado + " !");
    element.appendChild(text);
   
    var form = document.querySelector('#form-adiciona');
    form.reset();

});



function calculaImc(peso, altura) {

    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}



