const Joi = require('joi')

const usuariosSchenma = Joi.object({
    usuarios: Joi.array().items({
        nome: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        administrador: Joi.string(),
        _id: Joi.string()
    }),
    quantidade: Joi.number()

})

export default usuariosSchenma;