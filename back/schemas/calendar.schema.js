const mongoose = require('mongoose');
const patient = require('./patient.schema');
const doctor = require('./doctor.schema');

const CalendarSchema = new mongoose.Schema({
    patients: {
        type: [PatientSchema],
        default: []
    },
    doctors: {
        type: [DoctorShema],
        default: []
    },
    fecha_cita: {
        type: Date
    },
    hora_cita: {
        type: Date
    },
    status_cita: {
        type: Date,
        enum: [
            'Finalizada', 'Cancelada', 'Pendiente', 'Aceptada'
        ]
    },
    descripcion_cita: {
        type: String
    }
}, {
    collection: 'calendar'
});

module.exports = mongoose.model('calendar', CalendarSchema)