const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    const hashedPassword = bcrypt.hashSync(plainPassword, 10)
    return hashedPassword
}

const comparePassword = (plainPassword, hashedPassword) => {
    const validatePassword = bcrypt.compareSync(plainPassword, hashedPassword)
    return validatePassword
}


module.exports = {
    hashPassword,
    comparePassword
}