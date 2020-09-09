const { verifyToken } = require('../../utils')

const checkAuth = async (req, res, next, role) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = await verifyToken(token)
        if (role && decode.role !== role) {
            return res.status(401).json({
                message: 'User dont have permission'
            })
        }
        req.user = decode
        next()
    } catch (error) {
        return res.status(401).json({
            message: 'Token is invalid'
        })
    }
}

module.exports = {
    checkAuth
}