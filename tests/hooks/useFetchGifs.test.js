import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('PRuebas de customHooks useFetchGifs', () => {

    const category = 'Naruto';

    test('Debe de regresar el estado inicial', () => {

        const { result: { current: { images, isLoading } } } = renderHook(() => useFetchGifs(category))

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();


    })

    test('Debe de retornar un arreglo de imagenes y isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs(category))


        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();


    })
})