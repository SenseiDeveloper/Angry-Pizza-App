
const users = [
    {
        id: 1,
        name: 'Name',
        coins: 98.7,
        phone: 380961111111 ,
        password: '123456789',
        address: {
            street: 'Коновальця',
            address: '11б, кв. 3'
        }
    },
    {
        id: 2,
        name: 'Igor',
        coins: 0,
        phone: 380661111110 ,
        password: '123456789'
    }
];

function getUsers() {
    return users;
}

module.exports = getUsers;
