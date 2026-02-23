/**
 * Archivo: macros.js
 * Descripción: Contiene las funciones necesarias para calcular la distancia entre dos puntos
 * Fórmula: d = √[(x2 - x1)² + (y2 - y1)²]
 */

/**
 * Calcula la distancia entre dos puntos en el plano cartesiano
 * @param {number} x1 - Coordenada X del primer punto
 * @param {number} y1 - Coordenada Y del primer punto
 * @param {number} x2 - Coordenada X del segundo punto
 * @param {number} y2 - Coordenada Y del segundo punto
 * @returns {number} La distancia entre los dos puntos
 */
function calcularDistancia(x1, y1, x2, y2) {
    const deltax = x2 - x1;
    const deltay = y2 - y1;
    
    const deltaXCuadrado = deltax * deltax;
    const deltaYCuadrado = deltay * deltay;
    
    const suma = deltaXCuadrado + deltaYCuadrado;
    const distancia = Math.sqrt(suma);
    
    return distancia;
}

/**
 * Obtiene los pasos detallados del cálculo
 * @param {number} x1 - Coordenada X del primer punto
 * @param {number} y1 - Coordenada Y del primer punto
 * @param {number} x2 - Coordenada X del segundo punto
 * @param {number} y2 - Coordenada Y del segundo punto
 * @returns {object} Objeto con los pasos del cálculo
 */
function obtenerPasosCalculo(x1, y1, x2, y2) {
    const deltax = x2 - x1;
    const deltay = y2 - y1;
    
    const deltaXCuadrado = deltax * deltax;
    const deltaYCuadrado = deltay * deltay;
    
    const suma = deltaXCuadrado + deltaYCuadrado;
    const distancia = Math.sqrt(suma);
    
    return {
        paso1: `d = √[( ${x2} - (${x1}) )² + ( ${y2} - (${y1}) )²]`,
        paso2: `d = √[( ${deltax} )² + ( ${deltay} )²]`,
        paso3: `d = √[${deltaXCuadrado} + ${deltaYCuadrado}] = √${suma}`,
        paso4: `d = ${distancia.toFixed(2)}`
    };
}

/**
 * Valida que las coordenadas sean números válidos
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 * @returns {boolean} True si todas las coordenadas son válidas
 */
function validarCoordenadas(x1, y1, x2, y2) {
    return !isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2) &&
           typeof x1 === 'number' && typeof y1 === 'number' &&
           typeof x2 === 'number' && typeof y2 === 'number';
}

/**
 * Dibuja los puntos y la línea de distancia en el canvas
 * @param {CanvasRenderingContext2D} ctx - Contexto del canvas
 * @param {number} x1 - Coordenada X del primer punto
 * @param {number} y1 - Coordenada Y del primer punto
 * @param {number} x2 - Coordenada X del segundo punto
 * @param {number} y2 - Coordenada Y del segundo punto
 * @param {number} width - Ancho del canvas
 * @param {number} height - Altura del canvas
 */
function dibujarGrafica(ctx, x1, y1, x2, y2, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    const escala = 30; // píxeles por unidad
    
    // Limpiar canvas
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, width, height);
    
    // Dibujar grid
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = -10; i <= 10; i++) {
        // Líneas verticales
        ctx.beginPath();
        ctx.moveTo(centerX + i * escala, 0);
        ctx.lineTo(centerX + i * escala, height);
        ctx.stroke();
        
        // Líneas horizontales
        ctx.beginPath();
        ctx.moveTo(0, centerY + i * escala);
        ctx.lineTo(width, centerY + i * escala);
        ctx.stroke();
    }
    
    // Dibujar ejes
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    
    // Eje X
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();
    
    // Eje Y
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();
    
    // Números en los ejes
    ctx.fillStyle = '#000000';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    
    for (let i = -10; i <= 10; i += 2) {
        if (i !== 0) {
            ctx.fillText(i, centerX + i * escala, centerY + 15);
            ctx.fillText(i, centerX - 20, centerY - i * escala);
        }
    }
    
    // Convertir coordenadas a píxeles
    const px1 = centerX + x1 * escala;
    const py1 = centerY - y1 * escala;
    const px2 = centerX + x2 * escala;
    const py2 = centerY - y2 * escala;
    
    // Dibujar línea de distancia
    ctx.strokeStyle = '#0066cc';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(px1, py1);
    ctx.lineTo(px2, py2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Dibujar punto 1
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(px1, py1, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#ff0000';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`P₁(${x1}, ${y1})`, px1 + 10, py1 - 10);
    
    // Dibujar punto 2
    ctx.fillStyle = '#00aa00';
    ctx.beginPath();
    ctx.arc(px2, py2, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#00aa00';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`P₂(${x2}, ${y2})`, px2 + 10, py2 + 10);
}
