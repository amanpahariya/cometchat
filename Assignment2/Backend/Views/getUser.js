const User = require("../DB/user");
const getUser = (req, res) => {
    User.find({}, {firstname: 1, lastname: 1, email: 1, profile_image: 1}, (err, result) => {
        if (!err) {
            res.status(200).send(result);
        } else {
            res.status(406).send();
        }
    })
}

module.exports = getUser;