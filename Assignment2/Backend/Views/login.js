const User = require("../DB/user");
const bcrypt = require("bcrypt");
const AccessToken = require("./Token/accessToken");
const Login = (req, res) => {
    User.findOne({email: req.body.email}, (err, foundUser) => {
        if (!err) {
            if (foundUser) {
                bcrypt.compare(req.body.password, foundUser.password, (_, r) => {
                    if (r) {
                        const user = {
                            id: foundUser._id,
                            firstname: foundUser.firstname,
                            lastname: foundUser.lastname,
                            profile_image: foundUser.profile_image
                        }
                        const token = AccessToken(user);

                        res
                            .status(202)
                            .cookie("accesstoken", token, {
                                sameSite:"none",
                                secure: true,
                                path: "/",
                                expires: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000),
                                httpOnly : true
                            })
                            .json({isLogin: true, user})
                    } else {
                        res.status(404).json({"error": "incorrect password or email"})
                    }
                })
            } else {
                res.status(404).json({"error": "incorrect password or email"})
            }
        } else {
            res.status(406).json({"error": "something went wrong"})
        }
    })
}

module.exports = Login;