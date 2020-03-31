const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        // restringe o body ao conteudo desejado
        const { name, email, whatsapp, city, uf } = request.body;

        // gera id aleatorio com lib crypto interna
        const id = crypto.randomBytes(4).toString('HEX');

        // conecta ao banco e insere os dados, mas aguarda a execução
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        // retorna o id cadastrado
        return response.json({
            id
        });
    }
}