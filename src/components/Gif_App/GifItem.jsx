import PropTypes from 'prop-types';

export default function GifItem({ gif }) {
    return (
        <>
            <div className='card'>
                <img src={gif.url} alt={gif.title}></img>
                <h4 className='capitalize'>{gif.title}</h4>
            </div>
        </>
    )
}
GifItem.propTypes = {
    gif: PropTypes.object.isRequired
}