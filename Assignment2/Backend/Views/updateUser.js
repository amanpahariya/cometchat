const User = require("../DB/user");
const updateUser = (req, res) => {
    User.updateOne({
            _id: req.body.id,
        },
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        }, (err, _) => {
            if (!err) {
                res.status(202).send();
            } else {
                res.status(405).send();
            }
        })
}


module.exports = updateUser;