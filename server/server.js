// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Conexión a MongoDB (base de datos "encuesta")
mongoose.connect('mongodb://localhost:27017/encuesta')
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Esquema de la encuesta
const surveySchema = new mongoose.Schema({
  nombre: String,
  email: String,
  datosGenerales: {
    puestoTrabajo: String,
    areaDepartamento: String,
    antiguedad: String,
    edad: String,
    genero: String
  },
  condicionesTrabajo: {
    cargaTrabajo: Number,
    ritmoTrabajo: Number,
    tareasAdicionales: Number
  },
  autonomiaControl: {
    autonomia: Number,
    instruccionesClaras: Number,
    controlTrabajo: Number
  },
  apoyoReconocimiento: {
    apoyoSupervisores: Number,
    reconocimiento: Number,
    programasReconocimiento: Number
  },
  relacionesInterpersonales: {
    ambienteRespeto: Number,
    conflictosFrecuentes: Number,
    comunicacionInterna: Number
  },
  factoresEmocionales: {
    frecuenciaEstres: Number,
    estresAfectaRendimiento: Number,
    presionAfectaBienestar: Number
  },
  recursosCapacitacion: {
    recursosNecesarios: Number,
    capacitacion: Number,
    programasBienestar: Number
  },
  evaluacionGeneral: {
    ambienteLaboral: Number,
    recomendarLugarTrabajo: Number,
    compromisoEmpresa: Number
  },
  comentarios: String,
  fecha: { type: Date, default: Date.now }
});

const Datos = mongoose.model('Datos', surveySchema, 'datos');

// Endpoint para guardar la encuesta
app.post('/api/submit', async (req, res) => {
  try {
    const {
      nombre,
      email,
      datosGenerales,
      condicionesTrabajo,
      autonomiaControl,
      apoyoReconocimiento,
      relacionesInterpersonales,
      factoresEmocionales,
      recursosCapacitacion,
      evaluacionGeneral,
      comentarios
    } = req.body;
    const nuevaRespuesta = new Datos({
      nombre,
      email,
      datosGenerales,
      condicionesTrabajo,
      autonomiaControl,
      apoyoReconocimiento,
      relacionesInterpersonales,
      factoresEmocionales,
      recursosCapacitacion,
      evaluacionGeneral,
      comentarios
    });
    await nuevaRespuesta.save();
    res.json({ success: true });
  } catch (err) {
    console.error('Error al guardar la respuesta', err);
    res.status(500).json({ success: false, error: 'Error al guardar la respuesta' });
  }
});

// Endpoint para obtener todas las respuestas (para análisis y reporte)
app.get('/api/responses', async (req, res) => {
  try {
    const respuestas = await Datos.find().sort({ fecha: -1 });
    res.json(respuestas);
  } catch (err) {
    console.error('Error al obtener respuestas', err);
    res.status(500).json({ error: 'Error al obtener respuestas' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
