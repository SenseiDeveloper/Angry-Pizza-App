import React,{useState} from 'react';

export const SearchPizzaInput = ({pizzaArray,handleSearchField}) => {
    const [ value, setValue] = useState( '');

    const handleChangeValue = (event) => {
        setValue(event.target.value);
        if(event.target.value.length === 0){
            handleSearchField(0);
        }else {
            const pizza = pizzaArray.find(
                e => e.name.toLocaleLowerCase() === event.target.value.toLocaleLowerCase());

            if(!pizza){
                handleSearchField('Піцу не найдено');
            } else {
                handleSearchField([pizza]);
            }
        }
    };

  return (
      <input type="text" onChange={handleChangeValue} value={value} placeholder='Знайти піцу'/>
  );
};
