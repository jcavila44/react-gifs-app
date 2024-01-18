
import PropTypes from 'prop-types';
import { fetchGetGifs } from '../helpers/getGifs';
import { useEffect } from 'react';




export const GifGrid = ({ category }) => {

    useEffect(() => {
        fetchGetGifs(category);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string
};

GifGrid.defaultProps = {
    category: 'Fata la propiedad category'
};