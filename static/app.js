const x1Input = document.getElementById('x1');
const y1Input = document.getElementById('y1');
const x2Input = document.getElementById('x2');
const y2Input = document.getElementById('y2');
const calcularBtn = document.getElementById('calcularBtn');
const resultContainer = document.getElementById('resultContainer');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

calcularBtn.addEventListener('click', calcular);

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcular();
    }
});

function calcular() {
    const x1 = parseFloat(x1Input.value);
    const y1 = parseFloat(y1Input.value);
    const x2 = parseFloat(x2Input.value);
    const y2 = parseFloat(y2Input.value);
    
    if (!validarCoordenadas(x1, y1, x2, y2)) {
        alert('Por favor ingrese números válidos en todas las coordenadas');
        return;
    }
    
    const distancia = calcularDistancia(x1, y1, x2, y2);
    
    const pasos = obtenerPasosCalculo(x1, y1, x2, y2);
    
    mostrarResultados(pasos, distancia);
    
    dibujarGrafica(ctx, x1, y1, x2, y2, canvas.width, canvas.height);
}

function mostrarResultados(pasos, distancia) {
    document.getElementById('step1').textContent = pasos.paso1;
    document.getElementById('step2').textContent = pasos.paso2;
    document.getElementById('step3').textContent = pasos.paso3;
    document.getElementById('step4').textContent = pasos.paso4;
    document.getElementById('distancia').textContent = `${distancia.toFixed(2)} unidades`;
    
    resultContainer.style.display = 'block';
}

window.addEventListener('load', function() {
    calcular();
});
