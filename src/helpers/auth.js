export const isUserLogged = () => !!localStorage.getItem('user') && !!localStorage.getItem('token');
