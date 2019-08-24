const doctorService = require('../services/doctor.service');

class DoctorController {

    async findAll(request, response) {
        try {
            const doctor = await doctorService.findAll();
            response.json(doctor);
        } catch (err) {
            response.status(400).json(err);
        }
    }

    async findById(request, response) {
        try {
            const id = request.params.id;
            const doctor = await doctorService.findById(id);
            response.json(trainer);
        } catch (err) {
            response.status(400).json(err);
        }
    }

    async save(request, response) {
        try {
            const doctor = request.body;
            const doctorInserted = await doctorService.save(doctor);
            response.json(doctorInserted);
        } catch (err) {
            response.status(400).json(err);
        }
    }

    async update(request, response) {
        try {
            const id = request.params.id;
            const doctor = request.body;
            const doctorUpdated = await doctorService.update(id, doctor);
            response.json(doctorUpdated);
        } catch (err) {
            response.status(400).json(err);
        }
    }

    async delete(request, response) {
        try {
            const id = request.params.id;
            const doctorDeleted = await doctorService.delete(id);
            response.json(doctorDeleted);
        } catch (err) {
            response.status(400).json(err);
        }
    }

    // GET /doctor/1/patient
    // PUT /doctor/1/patient/2
    // DELETE /doctor/1/patient/2
    async addPatient(request, response) {
        try {
            const id = request.params.id;
            const patient = request.body;
            const registro = await doctorService.addPatient(id, patient);
            response.json(registro);
        } catch (err) {
            response.status(400).json(err);
        }
    }

    async deletePatient(request, response) {
        try {
            const id = request.params.id;
            const id2 = request.params.id2;
            const registro = await doctorService.deletePatient(id,id2);
            response.json(registro);
        } catch (err) {
            response.status(400).json(err);
        }
    }
}

module.exports = new DoctorController();