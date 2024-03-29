
import PropTypes from 'prop-types';
import { GifITem } from './GifITem';
import { useFetchGifs } from '../hooks/useFetchGifs';




export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>Cargando...</h2>}
            <div className='card-grid'>|
                {
                    images.map((image) => (<GifITem key={image.id} {...image} />))
                }
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string
};

GifGrid.defaultProps = {
    category: 'Fata la propiedad category'
};