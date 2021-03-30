
export  const setPizzaToLocalStorage = (itm) => {
    const checkStorage = localStorage.getItem('pizzas');
    if (!checkStorage){
        localStorage.setItem('pizzas', JSON.stringify([itm]));
    }else {
        const data = JSON.parse(checkStorage);
        localStorage.setItem('pizzas', JSON.stringify([...data,itm]));
    }
};

export const pizzaValidation = products => {
    if(Object.keys(products.basis).length === 0){
        return 'Ви не обрали основу';
    } else if(products.products.length === 0){
        return 'Ви не обрали продукти';
    }else {
        return false;
    }
};

export const mathPrice = state => {
    const price = state.map( e => e.price);
    const setPrice = price.reduce((one,two) => { return one + two},0);
    return setPrice;
};

export const createObjHistory = (pizzaStorage,pizzaState,price,bonus) => {
    const pizzas = JSON.parse(pizzaStorage);
    const priceMoney = mathPrice(pizzaState);
    const user = JSON.parse(localStorage.getItem('user')).id;
    const priceBonus = price + (bonus !== 0? bonus : 0);
    const savePizza = {
        pizzas,
        priceMoney,
        priceBonus,
        user
    };
    return savePizza;
};
