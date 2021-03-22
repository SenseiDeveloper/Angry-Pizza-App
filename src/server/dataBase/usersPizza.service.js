
const usersPizza = [
    {
        id:"2021-03-22T15:20:19.193Z",
        userID: 1,
        name:"Моя піцца",
        image:"/images/image_pizza/angry.jpg",
        price: 45,
        products: {
            basis:{
                id:1,
                name:"Томатна основа",
                icon:"images/icon_products/basis-tomate.svg",
                price:16,
                select:true
            },
            products:[
                {
                    id:1,
                    count:1,
                    name:"Сир королівський",
                    idName:"king-cheese",
                    weight:50,
                    price:29,
                    type:"cheeses",
                    icon:"images/icon_products/king-cheese.svg",
                    image:"images/image_products/king-chesee.svg",
                    select:true
                }
            ]
        }

    },
    {
        id:"2021-03-22T15:54:13.124Z",
        userID:1,
        name:"Овочева",
        image:"/images/image_pizza/angry.jpg",
        price:206,
        products: {
            basis: {
                id:2,
                name:"Вершкова основа",
                icon:"images/icon_products/basis-cream.svg",
                price:16,
                select:true
            },
            products: [
                {
                    id:4,
                    count:1,
                    name:"Сир моцарелла",
                    idName:"mocarella",
                    weight:50,
                    price:20,
                    type:"cheeses",
                    icon:"images/icon_products/mocarella-cheese.svg",
                    image:"images/image_products/mocarella.svg",
                    select:true
                },
                {
                    id:2,
                    count:1,
                    name:"Сир дор-блю",
                    idName:"dor-blue",
                    weight:50,
                    price:39,
                    type:"cheeses",
                    icon:"images/icon_products/dor-blue-cheese.svg",
                    image:"images/image_products/dor-blue.svg",
                    select:true
                },
                {
                    id:6,
                    count:1,
                    name:"Бекон",
                    idName:"bacon",
                    weight:50,
                    price:20,
                    type:"meat",
                    icon:"images/icon_products/bacon-meat.svg",
                    image:"images/image_products/bacon.svg",
                    select:true
                },
                {
                    id:7,
                    count:1,
                    name:"Шинка",
                    idName:"ham",
                    weight:50,
                    price:22,
                    type:"meat",
                    icon:"images/icon_products/ham-meat.svg",
                    image:"images/image_products/ham.svg",
                    select:true
                },
                {
                    id:8,
                    count:1,
                    name:"Курка",
                    idName:"chicken",
                    weight:50,
                    price:20,
                    type:"meat",
                    icon:"images/icon_products/chicken-meat.svg",
                    image:"images/image_products/chicken.svg",
                    select:true
                },{
                    id:16,
                    count:1,
                    name:"Гриби",
                    idName:"mushrooms",
                    weight:50,
                    price:16,
                    type:"anyProducts",
                    icon:"images/icon_products/mushrooms-any.svg",
                    image:"images/image_products/mushrooms.svg",
                    select:true
                },
                {
                    id:15,
                    count:1,
                    name:"Вялені помідори",
                    idName:"dried-tomatoes",
                    weight:50,
                    price:22,
                    type:"anyProducts",
                    icon:"images/icon_products/dried-tomatoes-any.svg",
                    image:"images/image_products/dried-tomatoes.svg",
                    select:true
                },
                {
                    id:19,
                    count:1,
                    name:"Болгарський перець",
                    idName:"paprika",
                    weight:50,
                    price:15,
                    type:"anyProducts",
                    icon:"images/icon_products/paprika-any.svg",
                    image:"images/image_products/paprika.svg",
                    select:true
                },
                {
                    id:21,
                    count:1,
                    name:"Цибуля",
                    idName:"onion",
                    weight:50,
                    price:10,
                    type:"anyProducts",
                    icon:"images/icon_products/onion-any.svg",
                    image:"images/image_products/onion.svg",
                    select:true
                },
                {
                    id:20,
                    count:1,
                    name:"Чилі",
                    idName:"chile",
                    weight:5,
                    price:6,
                    type:"anyProducts",
                    icon:"images/icon_products/chile-any.svg",
                    image:"images/image_products/chile.svg",
                    select:true
                }
            ]
        }
    }
];

function getUsersPizza() {
    return usersPizza
}

module.exports = getUsersPizza;
