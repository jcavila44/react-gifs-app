import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        const newInputValueClean = inputValue.trim();
        if (newInputValueClean.length < 1) return;

        onNewCategory(newInputValueClean);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmitForm} aria-label="form">
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
    onNewCategory: PropTypes.func.isRequired
};

AddCategory.defaultProps = {
    onNewCategory: 'Faltan la funcion de onNewCategory'
};