const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    id_doc: {
        type: BigInt,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    calle: {
        type: String,
        required: true
    },
    numero_int: {
        type: String,
        required: true
    },
    numero_ext: {
        type: String,
        required: false
    },
    delegacion: {
        type: String,
        required: true
    },
    colonia: {
        type: String,
        required: true
    },
    tipo_doctor: {
        type: String,
        required:true
    },
    is_premium: {
        type:Boolean,
        default: false
    },
    created_date: {
        type: Date,
    }

}, {
    collection: 'doctors'
});

module.exports = mongoose.model('doctors', DoctorSchema)