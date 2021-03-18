const products = {
    basis: [
        {
            id: 1,
            name: 'Томатна основа',
            icon: 'images/icon_products/basis-tomate.svg',
            price: 16
        },
        {
            id: 2,
            name: 'Вершкова основа',
            icon: 'images/icon_products/basis-cream.svg',
            price: 16
        }
    ],
    cheeses: [
        {
            id: 1,
            count: 1,
            name: 'Сир королівський',
            idName: 'king-cheese',
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
            idName: 'dor-blue',
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
            idName: 'parmezan',
            weight: 50,
            price: 39,
            type: 'cheeses',
            icon: 'images/icon_products/parmesan-cheese.svg',
            image: 'images/image_products/parmezan.svg'
        }, {
            id: 4,
            count: 1,
            name: 'Сир моцарелла',
            idName: 'mocarella',
            weight: 50,
            price: 20,
            type: 'cheeses',
            icon: 'images/icon_products/mocarella-cheese.svg',
            image: 'images/image_products/mocarella.svg'
        }
        , {
            id: 5,
            count: 1,
            name: 'Сир фета',
            idName: 'feta',
            weight: 50,
            price: 20,
            type: 'cheeses',
            icon: 'images/icon_products/feta-cheese.svg',
            image: 'images/image_products/feta.svg'
        }
    ],
    meat: [
        {
            id: 6,
            count: 1,
            name: 'Бекон',
            idName: 'bacon',
            weight: 50,
            price: 20,
            type: 'meat',
            icon: 'images/icon_products/bacon-meat.svg',
            image: 'images/image_products/bacon.svg'
        },
        {
            id: 7,
            count: 1,
            name: 'Шинка',
            idName: 'ham',
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
            idName: 'chicken',
            weight: 50,
            price: 20,
            type: 'meat',
            icon: 'images/icon_products/chicken-meat.svg',
            image: 'images/image_products/chicken.svg'
        },
        {
            id: 11,
            count: 1,
            name: 'Салямі',
            idName: 'salami',
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
            idName: 'sausages',
            weight: 50,
            price: 22,
            type: 'meat',
            icon: 'images/icon_products/sausages-meat.svg',
            image: 'images/image_products/sausages.svg'
        },
        {
            id: 10,
            count: 1,
            name: 'Папероні',
            idName: 'paperoni',
            weight: 50,
            price: 32,
            type: 'meat',
            icon: 'images/icon_products/paperoni-meat.svg',
            image: 'images/image_products/paperoni.svg'
        },
        {
            id: 12,
            count: 1,
            name: 'Лосось',
            idName: 'salmon',
            weight: 50,
            price: 54,
            type: 'meat',
            icon: 'images/icon_products/salmon-meat.svg',
            image: 'images/image_products/salmon.svg'
        },
        {
            id: 13,
            count: 1,
            name: 'Крабові палички',
            idName: 'crab',
            weight: 50,
            price: 29,
            type: 'meat',
            icon: 'images/icon_products/crab-steacs-meat.svg',
            image: 'images/image_products/crab.svg'
        }
    ],
    anyProducts: [
        {
            id: 14,
            count: 1,
            name: 'Помідори',
            idName: 'tomatoes',
            weight: 50,
            price: 16,
            type: 'anyProducts',
            icon: 'images/icon_products/tomatoes-any.svg',
            image: 'images/image_products/tomatoes.svg'
        },
        {
            id: 18,
            count: 1,
            name: 'Огірок',
            idName: 'cucumber',
            weight: 50,
            price: 14,
            type: 'anyProducts',
            icon: 'images/icon_products/cucumber-any.svg',
            image: 'images/image_products/cucumber.svg'
        },
        {
            id: 15,
            count: 1,
            name: 'Вялені помідори',
            idName: 'dried-tomatoes',
            weight: 50,
            price: 22,
            type: 'anyProducts',
            icon: 'images/icon_products/dried-tomatoes-any.svg',
            image: 'images/image_products/dried-tomatoes.svg'
        },
        {
            id: 16,
            count: 1,
            name: 'Гриби',
            idName: 'mushrooms',
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
            idName: 'corn',
            weight: 50,
            price: 16,
            type: 'anyProducts',
            icon: 'images/icon_products/corn-any.svg',
            image: 'images/image_products/corn.svg'
        },
        {
            id: 19,
            count: 1,
            name: 'Болгарський перець',
            idName: 'paprika',
            weight: 50,
            price: 15,
            type: 'anyProducts',
            icon: 'images/icon_products/paprika-any.svg',
            image: 'images/image_products/paprika.svg'
        },
        {
            id: 20,
            count: 1,
            name: 'Чилі',
            idName: 'chile',
            weight: 5,
            price: 6,
            type: 'anyProducts',
            icon: 'images/icon_products/chile-any.svg',
            image: 'images/image_products/chile.svg'
        },
        {
            id: 21,
            count: 1,
            name: 'Цибуля',
            idName: 'onion',
            weight: 50,
            price: 10,
            type: 'anyProducts',
            icon: 'images/icon_products/onion-any.svg',
            image: 'images/image_products/onion.svg'
        },
        {
            id: 22,
            count: 1,
            name: 'Часник',
            idName: 'garlic',
            weight: 25,
            price: 10,
            type: 'anyProducts',
            icon: 'images/icon_products/garlic-any.svg',
            image: 'images/image_products/garlic.svg'
        },
        {
            id: 23,
            count: 1,
            name: 'Оливки',
            idName: 'olives',
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
            idName: 'pineapple',
            weight: 50,
            price: 19,
            type: 'anyProducts',
            icon: 'images/icon_products/pineapple-any.svg',
            image: 'images/image_products/pineapple.svg'
        },
        {
            id: 25,
            count: 1,
            name: 'Лимон',
            idName: 'lemon',
            weight: 50,
            price: 14,
            type: 'anyProducts',
            icon: 'images/icon_products/lemon-any.svg',
            image: 'images/image_products/lemon.svg'
        }
    ]
};

function getProducts() {
    return products;
}

module.exports = getProducts;
