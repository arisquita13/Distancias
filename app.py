from flask import Flask, render_template, jsonify, request
import math

app = Flask(__name__, static_folder='static', template_folder='.')

def calcular_distancia(x1, y1, x2, y2):
    deltax = x2 - x1
    deltay = y2 - y1
    distancia = math.sqrt(deltax**2 + deltay**2)
    return distancia

def obtener_pasos(x1, y1, x2, y2):
    deltax = x2 - x1
    deltay = y2 - y1
    deltax_cuadrado = deltax**2
    deltay_cuadrado = deltay**2
    suma = deltax_cuadrado + deltay_cuadrado
    distancia = math.sqrt(suma)
    
    return {
        'paso1': f'd = √[( {x2} - ({x1}) )² + ( {y2} - ({y1}) )²]',
        'paso2': f'd = √[( {deltax} )² + ( {deltay} )²]',
        'paso3': f'd = √[{deltax_cuadrado} + {deltay_cuadrado}] = √{suma}',
        'paso4': f'd = {distancia:.2f}'
    }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/calcular', methods=['POST'])
def api_calcular():
    try:
        datos = request.json
        x1 = float(datos['x1'])
        y1 = float(datos['y1'])
        x2 = float(datos['x2'])
        y2 = float(datos['y2'])
        
        distancia = calcular_distancia(x1, y1, x2, y2)
        pasos = obtener_pasos(x1, y1, x2, y2)
        
        return jsonify({
            'success': True,
            'distancia': distancia,
            'pasos': pasos
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
