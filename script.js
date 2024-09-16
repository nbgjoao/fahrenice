document.getElementById('botao').addEventListener('click', function() {
    document.getElementById('temperatura-em-celcius').value = '';
    document.getElementById('temperatura-em-fahrenheit').value = '';
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('temperatura-em-celcius').addEventListener('input', function() {
        var celsius = parseFloat(document.getElementById('temperatura-em-celcius').value);
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('temperatura-em-fahrenheit').value = formatarValor(fahrenheit); 
    });

    document.getElementById('temperatura-em-fahrenheit').addEventListener('input', function() {
        var fahrenheit = parseFloat(document.getElementById('temperatura-em-fahrenheit').value);
        var celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('temperatura-em-celcius').value = formatarValor(celsius);
    });
});


function formatarValor(valor) {
    var valorFormatado = parseFloat(valor.toFixed(10)).toString();
    return valorFormatado.indexOf('.') !== -1 ? valorFormatado.replace(/0+$/, '').replace(/\.$/, '') : valorFormatado;
}