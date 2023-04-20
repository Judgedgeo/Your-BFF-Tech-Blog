const { User } = require('../models');

const UserData = [
    {
        username: "Userone",
        email: "Userone@gmail.com",
        password: "UseroneTestPassword"
    },
    {
        username: "Usertwo",
        email: "Usertwo@gmail.com",
        password: "UsertwoTestPassword"
    },
    {
        username: "Userthree",
        email: "Userthree@gmail.com",
        password: "UserthreeTestPassword"
    },

];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;