const patientService = require('../services/patient.service');

class PatientController {

    async findAll(request, response) {
        try {
            const patient = await patientService.findAll();
            response.json(patient);
        } catch (err) {
            response.status(400).json(err);
        }
    }

    async findById(request, response) {
        try {
            const id = request.params.id;
            const patient = await patientService.findById(id);
            response.json(patient);
        } catch (err) {
            response.status(400).json(err);
        }
    }

    async save(request, response) {
        try {
            const patient = request.body;
            const patientInserted = await patientService.save(patient);
            response.json(patientInserted);
        } catch (err) {
            response.status(400).json(err);
        }
    }

    async update(request, response) {
        try {
            const id = request.params.id;
            const patient = request.body;
            const patientUpdated = await patientService.update(id, patient);
            response.json(patientUpdated);
        } catch (err) {
            response.status(400).json(err);
        }
    }

    async delete(request, response) {
        try {
            const id = request.params.id;
            const patientDeleted = await patientService.delete(id);
            response.json(patientDeleted);
        } catch (err) {
            response.status(400).json(err);
        }
    }
}

module.exports = new PatientController();