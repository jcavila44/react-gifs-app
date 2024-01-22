import { fetchGetGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', () => {

    const category = 'Naruto';

    test('Debe retornar un arreglo de gifs', async () => {
        const gifs = await fetchGetGifs(category);
        const gifsStructure = {
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        }

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual(gifsStructure);
    });
})