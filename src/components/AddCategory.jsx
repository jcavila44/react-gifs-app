import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
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
