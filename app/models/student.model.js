module.exports = mongoose => {
    const Student = mongoose.model(
        "student",
        mongoose.Schema({
            id: {
                type: String,
                required: true
            },
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            note: {
                type: Number,
                required: true
            },
            career: {
                type: String,
                required: true
            }
        }, { timestamps: true })
    );
    return Student;
};