const User = require("../DB/user");
const deleteUser = (req, res) => {
    User.deleteOne({
        _id: req.body.id,
    }, (err, _) => {
        if (!err) {
            res.status(202).send();
        } else {
            res.status(405).send();
        }
    })
}

module.exports = deleteUser;