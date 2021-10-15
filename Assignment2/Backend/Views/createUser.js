const User = require("../DB/user");
const bcrypt = require("bcrypt");
const createUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        User.insertMany({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hash,
            profile_image: ""
        }, (err, result) => {
            if (!err) {
                res.status(201).send();
            } else {
                console.log(err)
                res.status(405).send();
            }
        })
    })
}
module.exports = createUser;