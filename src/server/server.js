const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./dataBase/user.service');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//API CREATE USER
app.post('/api/create-user', cors(), function (req, res) {
    const {name, phone, password} = req.body;
    const checkUser = users().some(el => el.phone === phone);

    if(!checkUser){
        const user = {
            id: Date.now(),
            name,
            phone,
            password
        };
        users().push(user);
        return res.status(200).send({
            text: 'Ви успішно зареєстровані',
            status: 'success'
        });
    }

    return res.status(200).send({
        text: 'Користувач з таким номером уже зареєстрований',
        status: 'warning'
    });
});

app.listen(9000, function () {
    console.log('Api server started');
});
