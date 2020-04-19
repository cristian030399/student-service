const db = require("../models");
const Student = db.students;

// Create and Save a new Student
exports.create = (req, res) => {
    // Validate request    
    if (!req.body.id) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    Student.find({ id: req.body.id })
        .then(data => {
            if (data.length == 0) {
                // Create a Student
                const student = new Student({
                    id: req.body.id,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    note: req.body.note,
                    career: req.body.career
                });

                // Save Student in the database
                student.save(student)
                    .then(data => {
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.nessage || "Some error occurred while creating the Student."
                        });
                    });

            } else {
                res.send({ message: "Student with id " + req.body.id + " already exists" });
            }
        });

};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    Student.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.nessage || "Some error occurred while retrieving students."
            });
        });
};

// Find a single Student with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Student.find({ id: id })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Not found Student with id ${id}` });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: `Error retrieving Student with id ${id}` });
        });
};

// Update a Student by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    Student.findOneAndUpdate({ id: id }, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Student with id ${id}. Maybe Student was not found!`
                });
            } else {
                res.send({ message: "Student was update successfully." });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Student with id ${id}.`
            });
        });
};

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Student.findOneAndDelete({ id: id })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Student with id ${id}. Maybe Student was not found!`
                });
            } else {
                res.send({ message: "Student was deleted successfully!" });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Cannot delete Student with id ${id}`
            })
        })
};

// Delete all Students from the database.
exports.deleteAll = (req, res) => {
    Student.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Students were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all students."
            });
        });
};

// calculates the students' average grades
exports.average = (req, res) => {
    Student.find({})
        .then(data => {
            let sum = 0;
            for (let i = 0; i < data.length; i++) {
                sum = sum + data[i].note;
            }
            av = sum / data.length;
            res.send({ avarage: av });
        })
        .catch(err => {
            res.status(500).send({
                message: err.nessage || "Some error occurred while retrieving Students."
            });
        });
};

exports.findByCareer = (req, res) => {

    const career = req.params.career;

    Student.find({ career: career })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Not found Students with career ${career}` });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: `Error retrieving Student with career ${career}` });
        });
};

exports.updateByCareer = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const career = req.params.career;
    Student.updateMany({ career: career }, { $set: req.body })
        .then(data => {
            if (data.nModified != 0) {
                res.send({ message: "The update by career was successful" });
            } else {
                res.send({ message: `There is not Students in the career ${career}` });
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Students with career ${career}.`
            });
        });
};