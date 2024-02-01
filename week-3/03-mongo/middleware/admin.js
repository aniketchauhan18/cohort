const { Admin } = require("../db")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username; // aniket@gmail.com
    const password = req.headers.password; // 2413415


    Admin.findOne({ // find for the username and password
        username: username, 
        password: password
    })
    .then(function(value) {
        if (value) {
            next(); // if value exists called next()
        } else {
            res.status(404).json({
                msg: "Admin doesn't exists"
            })
        }
    }) 
}

module.exports = adminMiddleware;