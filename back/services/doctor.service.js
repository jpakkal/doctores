const doctorModel = require('../schemas/doctor.schema');

class DoctorService {

    // Obtener doctores
    findAll() {
        return doctorModel.find();
    }
    
    // Obtener un doctor
    findById(id) {
        return doctorModel.findById(id);
    }

    // Crea un doctor
    save(doctor) {
        const $doctor = new doctorModel(doctor);
        return $doctor.save();
    }

    update(id, doctor) {
        return doctorModel.findByIdAndUpdate(id, doctor);
    }

    delete(id) {
        return doctorModel.findByIdAndRemove(id);
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

module.exports = new DoctorService();