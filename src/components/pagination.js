import React,{useState,useEffect} from 'react';

import {BsChevronLeft,BsChevronRight} from 'react-icons/bs';

export const Pagination = ({pizzas,handleChangeItem}) => {
    const pizzaArray = [...pizzas];
    const [pageState, setPageState] = useState({});

    useEffect(() => {
        setPageState({
            page: 1,
            maxPage: pizzaArray.length / 5,
            item: pizzaArray
        });
    }, []);

    const handlePage = (type) => {
        let page;
        type === 'next'? page = pageState.page + 1 : page = pageState.page - 1 ;
        const startIndex = (page - 1) * 5;
        const endIndex = page * 5;
        const newPizzaArray = pageState.item.slice(startIndex, endIndex);
        setPageState(prev => {
            return {
                ...prev,
                page
            }
        });
        handleChangeItem(newPizzaArray);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return(
        <div className='pagination'>
            <button
                className={pageState.page === 1? 'inActive': 'active'}
                onClick={() => handlePage('prev')}><BsChevronLeft /></button>
            <p>{pageState.page}</p>
            <button
                className={pageState.page === pageState.maxPage? 'inActive': 'active'}
                onClick={()=> handlePage('next')}><BsChevronRight /></button>
        </div>
    );
};
