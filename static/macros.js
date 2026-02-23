function calcularDistancia(x1, y1, x2, y2) {
    const deltax = x2 - x1;
    const deltay = y2 - y1;
    
    const deltaXCuadrado = deltax * deltax;
    const deltaYCuadrado = deltay * deltay;
    
    const suma = deltaXCuadrado + deltaYCuadrado;
    const distancia = Math.sqrt(suma);
    
    return distancia;
}

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

function validarCoordenadas(x1, y1, x2, y2) {
    return !isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2) &&
           typeof x1 === 'number' && typeof y1 === 'number' &&
           typeof x2 === 'number' && typeof y2 === 'number';
}

function dibujarGrafica(ctx, x1, y1, x2, y2, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    const escala = 30;
    
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, width, height);
    
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = -10; i <= 10; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX + i * escala, 0);
        ctx.lineTo(centerX + i * escala, height);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, centerY + i * escala);
        ctx.lineTo(width, centerY + i * escala);
        ctx.stroke();
    }
    
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();
    
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
    
    const px1 = centerX + x1 * escala;
    const py1 = centerY - y1 * escala;
    const px2 = centerX + x2 * escala;
    const py2 = centerY - y2 * escala;
    
    ctx.strokeStyle = '#0066cc';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(px1, py1);
    ctx.lineTo(px2, py2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(px1, py1, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#ff0000';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`P₁(${x1}, ${y1})`, px1 + 10, py1 - 10);
    
    ctx.fillStyle = '#00aa00';
    ctx.beginPath();
    ctx.arc(px2, py2, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#00aa00';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`P₂(${x2}, ${y2})`, px2 + 10, py2 + 10);
}
