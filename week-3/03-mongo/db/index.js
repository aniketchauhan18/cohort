const mongoose = require('mongoose');

// Encode the password to handle special characters
const encodedPassword = encodeURIComponent("2004@Niket");

// Use the encoded password in the connection string
mongoose.connect(`mongodb+srv://workwithaniket18:${encodedPassword}@cluster0.fty46m3.mongodb.net/`);

// Define schemas
const AdminSchema = new mongoose.Schema543({
    // Schema definition here
    username: String,
    password: String,
}); 

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}