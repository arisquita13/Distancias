# Calculadora de Distancia entre Dos Puntos

## Descripción
Aplicación web interactiva que calcula la distancia entre dos puntos en el plano cartesiano utilizando la fórmula:

**d = √[(x₂ - x₁)² + (y₂ - y₁)²]**

## Características
- ✅ Interfaz web moderna y responsiva
- ✅ Cálculo automático de distancia
- ✅ Visualización gráfica de los puntos y la distancia
- ✅ Pasos detallados del cálculo
- ✅ Ejemplos predefinidos (-4, -3) y (2, 5)
- ✅ Soporte para servidor Flask (opcional)

## Estructura del Proyecto
```
Distancias/
├── index.html          # Archivo HTML principal
├── app.py              # Servidor Flask (opcional)
├── static/
│   ├── macros.js       # Funciones de cálculo y gráficas
│   ├── app.js          # Lógica de la aplicación
│   └── styles.css      # Estilos CSS
├── README.md           # Este archivo
└── .gitignore          # Archivos a ignorar en Git
```

## Uso

### Opción 1: Abrir directamente en el navegador
1. Abre el archivo `index.html` directamente en tu navegador
2. Ingresa las coordenadas de los dos puntos
3. Haz clic en "Calcular Distancia"
4. Visualiza el resultado y la gráfica

### Opción 2: Usar el servidor Flask
1. Instala Flask: `pip install flask`
2. Ejecuta: `python app.py`
3. Abre en el navegador: `http://localhost:5000`

## Archivos

### index.html
- Estructura HTML de la aplicación
- Formulario para ingresar coordenadas
- Contenedor para mostrar resultados
- Canvas para la visualización gráfica

### macros.js
Contiene las funciones principales:
- `calcularDistancia(x1, y1, x2, y2)` - Calcula la distancia
- `obtenerPasosCalculo(x1, y1, x2, y2)` - Devuelve los pasos del cálculo
- `validarCoordenadas(x1, y1, x2, y2)` - Valida las coordenadas
- `dibujarGrafica(ctx, x1, y1, x2, y2, width, height)` - Dibuja la gráfica

### app.js
- Maneja la interacción del usuario
- Coordina el cálculo y la visualización
- Actualiza los resultados en el DOM
- Genera el gráfico

### styles.css
- Estilos responsivos
- Tema moderno con gradientes
- Diseño adaptativo para móviles

### app.py
- Servidor Flask
- Ruta principal para servir la aplicación
- API REST para calcular distancia

## Ejemplo
**Entrada:** P₁(-4, -3) y P₂(2, 5)

**Pasos:**
1. d = √[( 2 - (-4) )² + ( 5 - (-3) )²]
2. d = √[( 6 )² + ( 8 )²]
3. d = √[36 + 64] = √100
4. **d = 10 unidades**

## Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Python 3.x (solo si usa servidor Flask)
- Flask (solo si usa servidor Flask)

## Autor
Creado como práctica de distancia entre dos puntos

## Licencia
MIT

## Git
Repositorio: https://github.com/arisquita13/Distancias.git
