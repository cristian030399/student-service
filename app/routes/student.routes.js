module.exports = app => {
    const students = require("../controllers/student.controller.js");

    var router = require("express").Router();

    // Create a new Student
    router.post("/", students.create);

    // Retrieve all Tutorials
    router.get("/", students.findAll);

    // Retrive avarage of all students
    router.get("/average", students.average);

    // Retrive a single Student with id
    router.get("/:id", students.findOne);

    // Retrive avarage of all students with career
    router.get("/career/:career", students.findByCareer);

    // Delete a Student with id
    router.delete("/:id", students.delete);

    // Delete all Students
    router.delete("/", students.deleteAll);

    // Update a Student with id
    router.put("/:id", students.update);

    // Update Students with career
    router.put("/career/:career", students.updateByCareer);

    app.use('/api/students', router);
};