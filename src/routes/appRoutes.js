
export const appRoutes = [
    {
        path: '/home',
        component: 'Home'
    },
    {
        path: '/pizza',
        component: 'Pizza'
    },
    {
        path: '/promotions',
        component: 'Promotions'
    },
    {
        path: '/info',
        component: 'Info'
    },
    {
        path: '/auth',
        component: 'Auth'
    }
    ,{
        path: '/pizza-constructor',
        component: 'PizzaConstructor',
        exact: true
    },
    {
        path: '/order',
        component: 'Order'
    }
];

