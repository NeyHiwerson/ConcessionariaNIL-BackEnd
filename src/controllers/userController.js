const knex = require('../database/connection');


const findAllUsers = ( async(req, res) => {
  const allUsers = await knex('usuarios').select('*');
  return res.json(allUsers);
});

module.exports = {
  findAllUsers
}
