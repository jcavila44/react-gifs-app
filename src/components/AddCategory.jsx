import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;
        setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input
                key={12}
                type="text"
                placeholder="Buscar gifs..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func
};

AddCategory.defaultProps = {
    setCategories: 'Faltan la funcion de categorias'
};