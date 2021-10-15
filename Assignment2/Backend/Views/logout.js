const user = (req, res) => {
    res
        .status(202)
        .clearCookie("token")
        .json({
            isLogin: false,
        })

}

module.exports = user;