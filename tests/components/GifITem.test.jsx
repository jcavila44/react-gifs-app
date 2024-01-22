import { render, screen } from "@testing-library/react"
import { GifITem } from "../../src/components/GifITem"

describe('Pruebas en <GifITem/>', () => {

    const title = 'Naruto';
    const url = 'https://naruto.com.co/naruto.jpg'
    const id = '123';

    test('Debe de hacer match con el snapshot ', () => {

        const { container } = render(<GifITem id={id} title={title} url={url} />);
        expect(container).toMatchSnapshot();

    })

    test('Debe de mostar la imagen con el URL y el ALT indicado', () => {

        render(<GifITem id={id} title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('should first', () => {

        render(<GifITem id={id} title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    
    })

})