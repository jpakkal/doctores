const patientModel = require('../schemas/patient.schema');

class PatientService {

    // Obtener pacientes
    findAll() {
        return patientModel.find();
    }
    
    // Obtener un pacientes
    findById(id) {
        return patientModel.findById(id);
    }

    // Crea un pacientes
    save(doctor) {
        const $patient = new patientModel(patient);
        return $patient.save();
    }

    update(id, patient) {
        return patientModel.findByIdAndUpdate(id, patient);
    }

    delete(id) {
        return patientModel.findByIdAndRemove(id);
    }

    /// CALENDAR ¿DUDAS?
    addDate(id, wildPokemon) {
        return doctorModel.findByIdAndUpdate(id, { 
            $push: {
                pokedex: wildPokemon
            }
        });
    }

    deleteDate(id, pokemonId) {
        return doctorModel.findByIdAndUpdate(id, { 
            $pull: {
                _id: pokemonId
            }
        });
    }



}

module.exports = new PatientService();