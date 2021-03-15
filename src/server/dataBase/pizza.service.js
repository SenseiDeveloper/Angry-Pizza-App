
const pizzas = [
    {
        id: 1,
        name: 'Салямі',
        image: '/images/image_pizza/salami.jpg',
        price: 58,
        products:{
            basis: {
                id: 1,
                name: 'Томатна основа',
                icon: 'images/icon_products/basis-tomate.svg',
                price: 16
            },
            products: [
                {
                    id: 4,
                    count: 1,
                    name: 'Сир моцарелла',
                    weight: 50,
                    price: 20,
                    type: 'cheeses',
                    icon: 'images/icon_products/mocarella-cheese.svg',
                    image: 'images/image_products/mocarella.svg'
                },
                {
                    id: 11,
                    count: 1,
                    name: 'Салямі',
                    weight: 50,
                    price: 22,
                    type: 'meat',
                    icon: 'images/icon_products/salami-meat.svg',
                    image: 'images/image_products/salami.svg'
                }
            ]
        }
    },
    {
        id: 2,
        name: 'Капрічоза',
        image: '/images/image_pizza/kapri.jpg',
        price: 112,
        products:{
            basis: {
                id: 1,
                name: 'Томатна основа',
                icon: 'images/icon_products/basis-tomate.svg',
                price: 16
            },
            products: [
                {
                    id: 4,
                    count: 1,
                    name: 'Сир моцарелла',
                    weight: 50,
                    price: 20,
                    type: 'cheeses',
                    icon: 'images/icon_products/mocarella-cheese.svg',
                    image: 'images/image_products/mocarella.svg'
                },
                {
                    id: 7,
                    count: 1,
                    name: 'Шинка',
                    weight: 50,
                    price: 22,
                    type: 'meat',
                    icon: 'images/icon_products/ham-meat.svg',
                    image: 'images/image_products/ham.svg'
                },
                {
                    id: 14,
                    count: 1,
                    name: 'Помідори',
                    weight: 50,
                    price: 16,
                    type: 'anyProducts',
                    icon: 'images/icon_products/tomatoes-any.svg',
                    image: 'images/image_products/tomatoes.svg'
                },
                {
                    id: 16,
                    count: 1,
                    name: 'Гриби',
                    weight: 50,
                    price: 16,
                    type: 'anyProducts',
                    icon: 'images/icon_products/mushrooms-any.svg',
                    image: 'images/image_products/mushrooms.svg'
                },
                {
                    id: 11,
                    count: 1,
                    name: 'Салямі',
                    weight: 50,
                    price: 22,
                    type: 'meat',
                    icon: 'images/icon_products/salami-meat.svg',
                    image: 'images/image_products/salami.svg'
                }
            ]
        }
    },
    {
        id: 3,
        name: 'Капрезе',
        image: '/images/image_pizza/caprese.jpg',
        price: 94,
        products:{
            basis: {
                id: 1,
                name: 'Томатна основа',
                icon: 'images/icon_products/basis-tomate.svg',
                price: 16
            },
            products: [
                {
                    id: 14,
                    count: 1,
                    name: 'Помідори',
                    weight: 50,
                    price: 16,
                    type: 'anyProducts',
                    icon: 'images/icon_products/tomatoes-any.svg',
                    image: 'images/image_products/tomatoes.svg'
                },
                {
                    id: 7,
                    count: 1,
                    name: 'Шинка',
                    weight: 50,
                    price: 22,
                    type: 'meat',
                    icon: 'images/icon_products/ham-meat.svg',
                    image: 'images/image_products/ham.svg'
                },
                {
                    id: 8,
                    count: 1,
                    name: 'Курка',
                    weight: 50,
                    price: 20,
                    type: 'meat',
                    icon: 'images/icon_products/chicken-meat.svg',
                    image: 'images/image_products/chicken.svg'
                }
            ]
        }
    },
    {
        id: 4,
        name: 'Гавайська',
        image: '/images/image_pizza/havai.jpg',
        price: 109,
        products:{
            basis: {
                id: 1,
                name: 'Томатна основа',
                icon: 'images/icon_products/basis-tomate.svg',
                price: 16
            },
            products: [
                {
                    id: 4,
                    count: 1,
                    name: 'Сир моцарелла',
                    weight: 50,
                    price: 20,
                    type: 'cheeses',
                    icon: 'images/icon_products/mocarella-cheese.svg',
                    image: 'images/image_products/mocarella.svg'
                },
                {
                    id: 8,
                    count: 1,
                    name: 'Курка',
                    weight: 50,
                    price: 20,
                    type: 'meat',
                    icon: 'images/icon_products/chicken-meat.svg',
                    image: 'images/image_products/chicken.svg'
                },
                {
                    id: 17,
                    count: 1,
                    name: 'Кукурудза',
                    weight: 50,
                    price: 16,
                    type: 'anyProducts',
                    icon: 'images/icon_products/corn-any.svg',
                    image: 'images/image_products/corn.svg'
                },
                {
                    id: 23,
                    count: 1,
                    name: 'Оливки',
                    weight: 50,
                    price: 18,
                    type: 'anyProducts',
                    icon: 'images/icon_products/olives-any.svg',
                    image: 'images/image_products/olives.svg'
                },
                {
                    id: 24,
                    count: 1,
                    name: 'Ананас',
                    weight: 50,
                    price: 19,
                    type: 'anyProducts',
                    icon: 'images/icon_products/pineapple-any.svg',
                    image: 'images/image_products/pineapple.svg'
                }
            ]
        }
    },
    {
        id: 5,
        name: '4 Сири',
        image: '/images/image_pizza/4.jpg',
        price: 143,
        products:{
            basis: {
                id: 2,
                name: 'Вершкова основа',
                icon: 'images/icon_products/basis-cream.svg',
                price: 16
            },
            products: [
                {
                    id: 1,
                    count: 1,
                    name: 'Сир королівський',
                    weight: 50,
                    price: 29,
                    type: 'cheeses',
                    icon: 'images/icon_products/king-cheese.svg',
                    image: 'images/image_products/king-chesee.svg'
                },
                {
                    id: 2,
                    count: 1,
                    name: 'Сир дор-блю',
                    weight: 50,
                    price: 39,
                    type: 'cheeses',
                    icon: 'images/icon_products/dor-blue-cheese.svg',
                    image: 'images/image_products/dor-blue.svg'
                },
                {
                    id: 3,
                    count: 1,
                    name: 'Сир пармезан',
                    weight: 50,
                    price: 39,
                    type: 'cheeses',
                    icon: 'images/icon_products/parmesan-cheese.svg',
                    image: 'images/image_products/parmezan.svg'
                }, {
                    id: 4,
                    count: 1,
                    name: 'Сир моцарелла',
                    weight: 50,
                    price: 20,
                    type: 'cheeses',
                    icon: 'images/icon_products/mocarella-cheese.svg',
                    image: 'images/image_products/mocarella.svg'
                }
            ]
        }
    },
    {
        id: 6,
        name: 'Мега Піца',
        image: '/images/image_pizza/mega.jpeg',
        price: 152,
        products:{
            basis: {
                id: 1,
                name: 'Томатна основа',
                icon: 'images/icon_products/basis-tomate.svg',
                price: 16
            },
            products: [
                {
                    id: 4,
                    count: 1,
                    name: 'Сир моцарелла',
                    weight: 50,
                    price: 20,
                    type: 'cheeses',
                    icon: 'images/icon_products/mocarella-cheese.svg',
                    image: 'images/image_products/mocarella.svg'
                },
                {
                    id: 7,
                    count: 1,
                    name: 'Шинка',
                    weight: 50,
                    price: 22,
                    type: 'meat',
                    icon: 'images/icon_products/ham-meat.svg',
                    image: 'images/image_products/ham.svg'
                },
                {
                    id: 11,
                    count: 1,
                    name: 'Салямі',
                    weight: 50,
                    price: 22,
                    type: 'meat',
                    icon: 'images/icon_products/salami-meat.svg',
                    image: 'images/image_products/salami.svg'
                },
                {
                    id: 9,
                    count: 1,
                    name: 'Мисливські ковбаски',
                    weight: 50,
                    price: 22,
                    type: 'meat',
                    icon: 'images/icon_products/sausages-meat.svg',
                    image: 'images/image_products/sausages.svg'
                },
                {
                    id: 16,
                    count: 1,
                    name: 'Гриби',
                    weight: 50,
                    price: 16,
                    type: 'anyProducts',
                    icon: 'images/icon_products/mushrooms-any.svg',
                    image: 'images/image_products/mushrooms.svg'
                },
                {
                    id: 17,
                    count: 1,
                    name: 'Кукурудза',
                    weight: 50,
                    price: 16,
                    type: 'anyProducts',
                    icon: 'images/icon_products/corn-any.svg',
                    image: 'images/image_products/corn.svg'
                },
                {
                    id: 23,
                    count: 1,
                    name: 'Оливки',
                    weight: 50,
                    price: 18,
                    type: 'anyProducts',
                    icon: 'images/icon_products/olives-any.svg',
                    image: 'images/image_products/olives.svg'
                }
            ]
        }
    },
    {
        id: 7,
        name: 'Романа',
        image: '/images/image_pizza/romana.jpg',
        price: 72,
        products:{
            basis: {
                id: 2,
                name: 'Вершкова основа',
                icon: 'images/icon_products/basis-cream.svg',
                price: 16
            },
            products: [
                {
                    id: 4,
                    count: 1,
                    name: 'Сир моцарелла',
                    weight: 50,
                    price: 20,
                    type: 'cheeses',
                    icon: 'images/icon_products/mocarella-cheese.svg',
                    image: 'images/image_products/mocarella.svg'
                },
                {
                    id: 11,
                    count: 1,
                    name: 'Салямі',
                    weight: 50,
                    price: 22,
                    type: 'meat',
                    icon: 'images/icon_products/salami-meat.svg',
                    image: 'images/image_products/salami.svg'
                },
                {
                    id: 16,
                    count: 1,
                    name: 'Гриби',
                    weight: 50,
                    price: 16,
                    type: 'anyProducts',
                    icon: 'images/icon_products/mushrooms-any.svg',
                    image: 'images/image_products/mushrooms.svg'
                }
            ]
        }
    },
    {
        id: 8,
        name: 'Наполетана',
        image: '/images/image_pizza/napoletana.jpg',
        price: 86,
        products:{
            basis: {
                id: 2,
                name: 'Вершкова основа',
                icon: 'images/icon_products/basis-cream.svg',
                price: 16
            },
            products: [
                {
                    id: 4,
                    count: 1,
                    name: 'Сир моцарелла',
                    weight: 50,
                    price: 20,
                    type: 'cheeses',
                    icon: 'images/icon_products/mocarella-cheese.svg',
                    image: 'images/image_products/mocarella.svg'
                },
                {
                    id: 6,
                    count: 1,
                    name: 'Бекон',
                    weight: 50,
                    price: 20,
                    type: 'meat',
                    icon: 'images/icon_products/bacon-meat.svg',
                    image: 'images/image_products/bacon.svg'
                },
                {
                    id: 16,
                    count: 1,
                    name: 'Гриби',
                    weight: 50,
                    price: 16,
                    type: 'anyProducts',
                    icon: 'images/icon_products/mushrooms-any.svg',
                    image: 'images/image_products/mushrooms.svg'
                },
                {
                    id: 18,
                    count: 1,
                    name: 'Огірок',
                    weight: 50,
                    price: 14,
                    type: 'anyProducts',
                    icon: 'images/icon_products/cucumber-any.svg',
                    image: 'images/image_products/cucumber.svg'
                }
            ]
        }
    },
    {
        id: 9,
        name: 'Палермо',
        image: '/images/image_pizza/palermo.jpg',
        price: 104,
        products:{
            basis: {
                id: 1,
                name: 'Томатна основа',
                icon: 'images/icon_products/basis-tomate.svg',
                price: 16
            },
            products: [
                {
                    id: 4,
                    count: 1,
                    name: 'Сир моцарелла',
                    weight: 50,
                    price: 20,
                    type: 'cheeses',
                    icon: 'images/icon_products/mocarella-cheese.svg',
                    image: 'images/image_products/mocarella.svg'
                },
                {
                    id: 5,
                    count: 1,
                    name: 'Сир фета',
                    weight: 50,
                    price: 20,
                    type: 'cheeses',
                    icon: 'images/icon_products/feta-cheese.svg',
                    image: 'images/image_products/feta.svg'
                },
                {
                    id: 8,
                    count: 1,
                    name: 'Курка',
                    weight: 50,
                    price: 20,
                    type: 'meat',
                    icon: 'images/icon_products/chicken-meat.svg',
                    image: 'images/image_products/chicken.svg'
                },
                {
                    id: 15,
                    count: 1,
                    name: 'Вялені помідори',
                    weight: 50,
                    price: 22,
                    type: 'anyProducts',
                    icon: 'images/icon_products/dried-tomatoes-any.svg',
                    image: 'images/image_products/dried-tomatoes.svg'
                },
                {
                    id: 20,
                    count: 1,
                    name: 'Чилі',
                    weight: 5,
                    price: 6,
                    type: 'anyProducts',
                    icon: 'images/icon_products/chile-any.svg',
                    image: 'images/image_products/chile.svg'
                }
            ]
        }
    },
    {
        id: 10,
        name: 'Папероні',
        image: '/images/image_pizza/peper.jpg',
        price: 68,
        products:{
            basis: {
                id: 1,
                name: 'Томатна основа',
                icon: 'images/icon_products/basis-tomate.svg',
                price: 16
            },
            products: [
                {
                    id: 4,
                    count: 1,
                    name: 'Сир моцарелла',
                    weight: 50,
                    price: 20,
                    type: 'cheeses',
                    icon: 'images/icon_products/mocarella-cheese.svg',
                    image: 'images/image_products/mocarella.svg'
                },
                {
                    id: 10,
                    count: 1,
                    name: 'Папероні',
                    weight: 50,
                    price: 32,
                    type: 'meat',
                    icon: 'images/icon_products/paperoni-meat.svg',
                    image: 'images/image_products/paperoni.svg'
                }
            ]
        }
    }
];

function getPizzas() {
    return pizzas;
}

module.exports = getPizzas;
