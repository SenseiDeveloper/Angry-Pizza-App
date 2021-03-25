
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

export const mathPrice = state =>{
    const price = state.map( e => e.price);
    const setPrice = price.reduce((one,two) => { return one + two},0);
    return setPrice;
};
