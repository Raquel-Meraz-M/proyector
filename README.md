Descripción del Proyecto
Esta aplicación web interactiva permite aplicar cuestionarios digitales para evaluar los factores de riesgo psicosocial en los trabajadores (según la NOM-035). ´
La aplicación recoge las respuestas (incluyendo nombre y email), calcula promedios (convertidos a una escala de 1 a 100) 
y clasifica el riesgo en Bajo, Medio o Alto. Además, genera un reporte con gráficos y recomendaciones para que tanto los trabajadores como los encargados 
de recursos humanos puedan interpretar los resultados.

Tecnologías Utilizadas
Frontend: React, HTML, CSS, JavaScript
Backend: Node.js, Express
Base de Datos: MongoDB

Estructura del Proyecto
evaluacion-factores-psicosocial/
├── client/           # Código del Frontend (React)
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── SurveyForm.js
│       ├── Resultados.js
│       ├── index.js
│       └── App.css
└── server/           # Código del Backend (Node.js / Express)
    ├── package.json
    └── server.js

    
Instalación y Ejecución
Backend:
Navega a la carpeta server:
cd server

Instala las dependencias:
npm install

Inicia el servidor:
npm start
El servidor se ejecutará en http://localhost:5000.

Frontend:
Navega a la carpeta client:
cd client

Instala las dependencias:
npm install

Inicia la aplicación:
npm start
La aplicación se ejecutará en http://localhost:3000.


Uso de la Aplicación
Encuesta:
Ingresa a http://localhost:3000 y completa el formulario con tus datos (nombre, email y respuestas a cada sección del cuestionario).

Resultados:
Después de enviar la encuesta, podrás ver el reporte en http://localhost:3000/resultados, el cual incluye:

Un resumen general (total de encuestas y distribución del riesgo).
Gráficos de barras (promedio por sección en escala de 1 a 100) y de pastel (distribución de riesgo).
Detalle individual de cada respuesta en tarjetas.


Notas Importantes

Asegúrate de tener MongoDB en ejecución (por ejemplo, iniciando mongod en otra terminal).
La lógica de cálculo transforma los promedios de una escala de 1–5 a una escala de 1–100 usando una fórmula lineal.
Puedes ajustar los umbrales de riesgo y la retroalimentación en el código según los criterios establecidos.
