const calendarModel = require('../schemas/calendar.schema');

class CalendarService {

    // Obtener Citas
    findAll() {
        return calendarModel.find();
    }
    
    // Obtener un Citas
    findById(id) {
        return calendarModel.findById(id);
    }

    // Crea un cita
    save(doctor) {
        const $calendar = new calendarModel(calendar);
        return $calendar.save();
    }

    update(id, calendar) {
        return calendarModel.findByIdAndUpdate(id, calendar);
    }

    delete(id) {
        return calendarModel.findByIdAndRemove(id);
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

module.exports = new CalendarService();