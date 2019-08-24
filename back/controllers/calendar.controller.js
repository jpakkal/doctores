const calendarService = require('../services/calendar.service');

class CalendarController {

    async findAll(request, response) {
        try {
            const calendar = await calendarService.findAll();
            response.json(calendar);
        } catch (err) {
            response.status(400).json(err);
        }
    }


async findById(request, response) {
    try {
        const id = request.params.id;
        const calendar = await calendarService.findById(id);
        response.json(calendar);
    } catch (err) {
        response.status(400).json(err);
    }
}

//POPULATE
    async findById(request, response) {
        try {
            const id = request.params.id;
            const calendar = await calendarService.findById(id).pupulate(user);
            response.json(calendar);
        } catch (err) {
            response.status(400).json(err);
        }
    }
//POPULATE

    async save(request, response) {
        try {
            const calendar = request.body;
            const calendarInserted = await calendarService.save(calendar);
            response.json(calendarInserted);
        } catch (err) {
            response.status(400).json(err);
        }
    }




    async update(request, response) {
        try {
            const id = request.params.id;
            const calendar = request.body;
            const calendarUpdated = await calendarService.update(id, calendar);
            response.json(calendarUpdated);
        } catch (err) {
            response.status(400).json(err);
        }
    }

    async delete(request, response) {
        try {
            const id = request.params.id;
            const calendarDeleted = await calendarService.delete(id);
            response.json(calendarDeleted);
        } catch (err) {
            response.status(400).json(err);
        }
    }
}

module.exports = new CalendarController();