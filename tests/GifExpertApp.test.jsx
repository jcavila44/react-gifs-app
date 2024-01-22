import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas de <GifExpertApp/>', () => {

  test('Pruebas para validar el estado inicial del componente', () => {

    const onAddCategory = jest.fn();

    render(<GifExpertApp />);

    expect(onAddCategory).not.toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(0);


  });


})