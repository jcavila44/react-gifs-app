import PropTypes from 'prop-types';

export const GifITem = ({ title, url, }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}



GifITem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

GifITem.defaultProps = {
    id: 'Fata la propiedad id',
    title: 'Fata la propiedad title',
    url: 'Fata la propiedad url',
};