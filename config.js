require('dotenv').config()

module.exports = {
    api: {
        port: process.env.PORT || 9009,
        host: process.env.HOST || 'http://localhost:9009/',
        jwtSecret: process.env.JWT_SECRET,
        email: process.env.MAIL,
        emailPass: process.env.MAIL_PASS
    },
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        port: process.env.DB_PORT
    }
}

