const { User } = require('../models');

const UserData = [
    {
        username: "UserNumeroUno",
        email: "UserNumeroUno@gmail.com",
        password: "UserNumeroUnoTestPassword"
    },
    {
        username: "UserNumeroDos",
        email: "UserNumeroDos@gmail.com",
        password: "UserNumeroDosTestPassword"
    },
    {
        username: "UserNumeroTres",
        email: "UserNumeroTres@gmail.com",
        password: "UserNumeroTresTestPassword"
    },

];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;