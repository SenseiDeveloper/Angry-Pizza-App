const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./dataBase/user.service');
const getProducts = require('./dataBase/constructor.service');
const pizzas = require('./dataBase/pizza.service');
const usersPizza = require('./dataBase/usersPizza.service');
const history = require('./dataBase/user-history.service');
const auth = require('./auth');
const jwt = require("jsonwebtoken");
const accessTokenSecret = 'angrypizzaaccesstokensecret';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


//API LOGIN USER
app.post('/api/login', cors(), function (req,res) {
    const {phone, password} = req.body;

    const findUser = users().find(u => u.phone === phone);
    if(!findUser){
        return res.status(400).send({
            isAuthenticated: false
        });
    }else {
        if (findUser.password !== password){
            return res.status(400).send({
                isAuthenticated: false
            });
        }else {
            const token = jwt.sign({ id: findUser.id }, accessTokenSecret, { expiresIn: 3600 });
            return res.status(200).send({
                token,
                user: {
                    id: findUser.id,
                    name: findUser.name,
                    coins: findUser.coins,
                    phone: findUser.phone,
                    address: findUser.address
                },
                isAuthenticated: true
            });
        }
    }
});

//API CREATE USER
app.post('/api/create-user', cors(), function (req, res) {
    const {name, phone, password} = req.body;
    const checkUser = users().some(el => el.phone === phone);

    const token = jwt.sign({id: new Date()}, accessTokenSecret,{expiresIn: 3600});

    if(!checkUser) {
        const user = {
            id: Date.now(),
            name,
            coins: 0,
            phone,
            password
        };
        users().push(user);
        return res.status(200).send({
            token,
            isRegistered: true,
            user:{
                id: user.id,
                name: user.name,
                phone: user.phone
            }
        });
    }
    return res.status(400).send({
        isRegistered: false
    });
});
//API SAVE PIZZA
app.post('/api/save-pizza',cors(),auth,(req,res) => {
    const userID = req.body.userID;
    const name = req.body.pizza.name;
    const image = req.body.pizza.image;
    const price = req.body.pizza.price;
    const products = req.body.pizza.products;

    const userPizza = {
        id: new Date(),
        userID,
        name,
        image,
        price,
        products
    };
    usersPizza().push(userPizza);
    res.status(200).send(userPizza);
});
//API get products
app.get('/api/pizza-products', cors(), (req,res) => {
    res.status(200).send(JSON.stringify(getProducts()));
});

//API GET PIZZAS
app.get('/api/pizza-list', cors(), (req,res) => {
    res.status(200).send(JSON.stringify(pizzas()));
});

//API GET USERS PIZZA
app.get('/api/pizza-list-user/:id',cors(),auth,(req,res) => {
    const pizzas = usersPizza().filter( p => {
        if(p.userID === Number(req.params.id)){
            return p;
        }
    });
    res.status(200).send(pizzas);
});

//API SAVE USER ADDRESS
app.post('/api/save-user-address', cors() , auth , (req,res) => {
    const user = users().find(u => u.id === req.body.userID);
    user.address = req.body.values;
    res.status(200).send(user);
});

//API GET USER
app.get('/api/user/:id',cors() , auth, (req,res) => {
    const user = users().find(u => u.id === Number(req.params.id));
    res.status(200).send(user);
});

//API GET USER HISTORY
app.get('/api/user-history/:id', auth, cors(), (req,res)=> {
    const userHistory = history().filter(u => {
        if (u.userID === Number(req.params.id)){
            return u;
        }
    });
    res.status(200).send(userHistory);
});

//API BUY PIZZA
app.post('/api/user-history', auth, cors(), (req,res)=>{
    const pizzaHistory = {
        id: new Date(),
        userID: req.body.user,
        price: req.body.priceMoney,
        pizzas: req.body.pizzas
    };
    history().push(pizzaHistory);
    users().map(u => {
        if (u.id === req.body.user){
            let coin = Math.floor(Number( req.body.priceBonus * 100)/100);
            u.coins = coin;
            return u;
        }
        return u;
    });
    const user = users().find(u => u.id === Number(req.body.user));
    res.status(200).send(user);
});

app.listen(9000, function () {
    console.log('Api server started');
});
