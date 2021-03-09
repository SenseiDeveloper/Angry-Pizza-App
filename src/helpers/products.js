
const addProperty = products => {
    return products.map(p => {
        p.select = false;
        return p;
    });
};

export  const modifyProducts = (products) => {
    return  Object.assign({
        basis: addProperty(products.basis),
        cheeses: addProperty(products.cheeses),
        meat: addProperty(products.meat),
        anyProducts: addProperty(products.anyProducts)
    });
};
