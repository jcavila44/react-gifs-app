import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {

    const ownInputValue = 'Naruto';

    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const inputScreen = screen.getByRole('textbox');

        fireEvent.input(inputScreen, { target: { value: ownInputValue } });
        expect(inputScreen.value).toBe(ownInputValue);

    });


    test('Debe realizar el submit del formulario', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const formScreen = screen.getByRole('form');
        const inputScreen = screen.getByRole('textbox');

        fireEvent.input(inputScreen, { target: { value: ownInputValue } });
        fireEvent.submit(formScreen);

        expect(inputScreen.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(ownInputValue);



    });


    test('No debe llamar el onNewCAtegory si el input está vacío', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const formScreen = screen.getByRole('form');
        fireEvent.submit(formScreen);

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    });

})